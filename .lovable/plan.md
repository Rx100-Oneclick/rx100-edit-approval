

## Edit Approval Authority - Dynamic Data Integration Plan

### Overview
Transform the current static/mock "Edit Approval Authority" page into a dynamic, Supabase-connected application that receives authentication and context via URL parameters and postMessage from a parent iframe, fetches real data from the database, and supports reordering approval steps with audit logging.

---

### 1. Authentication via URL Parameters and postMessage

**How it works:**
- On load, parse URL parameters: `access_token`, `refresh_token`, `user_id`, `email`, `tenant_id`, `template_id`
- Use `supabase.auth.setSession({ access_token, refresh_token })` to authenticate
- Send `{ type: 'IFRAME_READY' }` postMessage to parent as a backup signal
- Listen for `{ type: 'AUTH_SESSION', payload: { access_token, refresh_token } }` from parent as fallback auth
- Store `tenant_id`, `template_id`, `user_id`, `email` in React state/context for use throughout the app

### 2. Data Fetching Flow

**Authority Details (right panel):**
- Query `approval_templates` table by `template_id`
- Display `approval_template_name` in "Authority Name" field (read-only)
- Display `approval_type` in "Authority Type" field (read-only)
- Display `description` in "Description" field (read-only)

**Hierarchy Levels (left panel):**
- Query `approval_template_versions` where `template_id` matches AND `status = 'DRAFT'` AND `is_active = false`
- Using the resulting `version_id`, query `approval_template_steps` where `version_id` matches
- Order by `step_order`, display each step showing: level number (step_order), name, email
- No avatars from DB -- use initials-based avatar or a default icon

### 3. UI Changes

**Remove:**
- "Add Level" button
- Actions dropdown (Skip, Replace)
- Delete (trash) icon
- "Scope & Applicability" card entirely
- All mock/hardcoded data (availableUsers array, etc.)

**Add:**
- Up/Down arrow buttons on each step row to reorder levels
- First item: only down arrow enabled; last item: only up arrow enabled
- "Save Changes" button starts **disabled**, only enables when step order has been changed
- Loading states while data is fetched

### 4. Reorder Logic

- When user clicks up/down arrow, swap the `step_order` of the two adjacent steps in local state
- Track whether any changes have been made (compare current order vs. original fetched order)
- Enable "Save Changes" button only when order differs from original

### 5. Save Changes Flow

When "Save Changes" is clicked:

1. **Generate trace context** by calling `rpc('generate_trace_context')` with:
   ```json
   {
     "headers": {
       "source_system": "approval-authority-editor",
       "tenant_id": "<tenant_id>"
     }
   }
   ```

2. **Update step_order** in `approval_template_steps` table for each reordered step (batch update)

3. **Write audit event** by calling `rpc('audit_event_intake')` with:
   ```json
   {
     "headers": {
       "trace_id": "<from step 1>",
       "request_id": "<from step 1>",
       "source_system": "approval-authority-editor",
       "tenant_id": "<tenant_id>"
     },
     "event_type": "approval_step_order.updated",
     "actor": { "actor_type": "user", "actor_id": "<user_id>", "email": "<email>" },
     "subject": { "subject_type": "approval_template_version", "subject_id": "<version_id>" },
     "context": { "changes": [{ "step_id": "...", "old_order": 1, "new_order": 2 }, ...] }
   }
   ```

4. **Show success animation** - a modern modal/popup with an animated checkmark (CSS-only tick animation with green circle) that auto-dismisses after ~2 seconds

5. **Send postMessage to parent** after save: `{ type: 'SAVE_COMPLETE', template_id }`

### 6. Cancel Button

- If no changes: send `{ type: 'CANCEL', template_id }` postMessage to parent
- If unsaved changes: show confirmation modal first, then send postMessage on confirm

### 7. PostMessage Communication to Parent

- On **Save**: `window.parent.postMessage({ type: 'SAVE_COMPLETE', template_id }, '*')`
- On **Cancel**: `window.parent.postMessage({ type: 'CANCEL', template_id }, '*')`

---

### Technical Details

**Files to modify:**
- `src/app/App.tsx` -- Complete rewrite of the component to:
  - Remove all mock data and unused state
  - Add URL parameter parsing and auth initialization
  - Add postMessage listener/sender
  - Add Supabase queries using `@supabase/supabase-js`
  - Implement up/down reorder with swap logic
  - Implement save with audit trail RPCs
  - Add success animation modal (CSS keyframe animation for checkmark)
  - Remove Scope & Applicability section
  - Remove Add Level, Actions dropdown, Delete icon
  - Add ChevronUp/ChevronDown buttons per row
  - Disable Save Changes when no changes detected

**New files:**
- `src/app/hooks/useAuthFromParent.ts` -- Custom hook for URL param auth + postMessage listener
- `src/app/hooks/useApprovalData.ts` -- Custom hook for fetching template, version, and steps data
- `src/app/components/SuccessAnimation.tsx` -- Animated checkmark success modal component

**Dependencies:** No new dependencies needed (Supabase client, Lucide icons, and existing CSS already available).

