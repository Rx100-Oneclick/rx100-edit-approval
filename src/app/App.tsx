import React, { useState, useCallback } from 'react';
import { Info, ChevronUp, ChevronDown, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuthFromParent } from './hooks/useAuthFromParent';
import { useApprovalData, StepData } from './hooks/useApprovalData';
import SuccessAnimation from './components/SuccessAnimation';

export default function App() {
  const auth = useAuthFromParent();
  const { template, steps, setSteps, versionId, isLoading, error, hasChanges, resetOriginal, refetch } = useApprovalData(auth.templateId, auth.isAuthenticated);

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const moveStep = useCallback((index: number, direction: 'up' | 'down') => {
    const newSteps = [...steps];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSteps.length) return;

    // Swap step_order values
    const tempOrder = newSteps[index].step_order;
    newSteps[index] = { ...newSteps[index], step_order: newSteps[targetIndex].step_order };
    newSteps[targetIndex] = { ...newSteps[targetIndex], step_order: tempOrder };

    // Swap positions in array
    [newSteps[index], newSteps[targetIndex]] = [newSteps[targetIndex], newSteps[index]];
    setSteps(newSteps);
  }, [steps, setSteps]);

  const handleSave = useCallback(async () => {
    if (!hasChanges() || isSaving) return;
    setIsSaving(true);

    try {
      // 1. Generate trace context
      const { data: traceData, error: traceError } = await supabase.rpc('generate_trace_context', {
        input_payload: {
          headers: {
            source_system: 'approval-authority-editor',
            tenant_id: auth.tenantId,
          }
        }
      });
      if (traceError) throw traceError;

      const traceResult = traceData as Record<string, any> | null;
      const traceContext = traceResult?.context || traceResult;

      // 2. Update step_order for each changed step
      const updatePromises = steps.map(step =>
        supabase
          .from('approval_template_steps')
          .update({ step_order: step.step_order, updated_at: new Date().toISOString() })
          .eq('step_id', step.step_id)
      );
      const results = await Promise.all(updatePromises);
      const updateError = results.find(r => r.error);
      if (updateError?.error) throw updateError.error;

      // 3. Write audit event
      const { error: auditError } = await supabase.rpc('audit_event_intake', {
        input_payload: {
          headers: {
            trace_id: traceContext?.trace_id,
            request_id: traceContext?.request_id,
            source_system: 'approval-authority-editor',
            tenant_id: auth.tenantId,
          },
          event_type: 'approval_step_order.updated',
          actor: {
            actor_type: 'user',
            actor_id: auth.userId,
            email: auth.email,
          },
          subject: {
            subject_type: 'approval_template_version',
            subject_id: versionId,
          },
          context: {
            template_id: auth.templateId,
            changes: steps.map((s, i) => ({
              step_id: s.step_id,
              new_order: s.step_order,
            })),
          },
          occurred_at: new Date().toISOString(),
        }
      });
      if (auditError) console.warn('Audit write failed:', auditError);

      // 4. Show success
      resetOriginal();
      setShowSuccess(true);
    } catch (err: any) {
      console.error('Save failed:', err);
      alert('Failed to save changes: ' + (err.message || 'Unknown error'));
    } finally {
      setIsSaving(false);
    }
  }, [hasChanges, isSaving, steps, auth, versionId, resetOriginal]);

  const handleSuccessComplete = useCallback(() => {
    setShowSuccess(false);
    window.parent.postMessage({ type: 'SAVE_COMPLETE', template_id: auth.templateId }, '*');
  }, [auth.templateId]);

  const handleCancel = useCallback(() => {
    if (hasChanges()) {
      setShowCancelConfirm(true);
    } else {
      window.parent.postMessage({ type: 'CANCEL', template_id: auth.templateId }, '*');
    }
  }, [hasChanges, auth.templateId]);

  const confirmCancel = useCallback(() => {
    setShowCancelConfirm(false);
    window.parent.postMessage({ type: 'CANCEL', template_id: auth.templateId }, '*');
  }, [auth.templateId]);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  // Loading state
  if (auth.isLoading || isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <p className="text-slate-500 text-sm">Loading approval data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (auth.error || error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white rounded-xl border border-red-200 p-6 max-w-md text-center">
          <p className="text-red-600 font-semibold mb-2">Error</p>
          <p className="text-slate-600 text-sm">{auth.error || error}</p>
        </div>
      </div>
    );
  }

  const changed = hasChanges();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Edit Approval Authority</h1>
        <p className="text-slate-600 text-sm">Review and update approval configuration. Changes are saved as draft.</p>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Left Column - Hierarchy Levels */}
          <section className="md:col-span-7 xl:col-span-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">Configure Hierarchy Levels</h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-2">
                  {steps.length === 0 ? (
                    <p className="text-slate-400 text-sm text-center py-8">No approval steps found for this draft version.</p>
                  ) : (
                    steps.map((step, index) => (
                      <div
                        key={step.step_id}
                        className="grid grid-cols-12 gap-4 items-center p-4 border rounded-lg bg-white border-slate-200 hover:border-indigo-300 transition-colors"
                      >
                        {/* Level Number */}
                        <div className="col-span-1">
                          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{step.step_order}</span>
                          </div>
                        </div>

                        {/* User Info */}
                        <div className="col-span-8 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-slate-600 font-semibold text-xs">{getInitials(step.name)}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800">{step.name}</p>
                            <p className="text-xs text-slate-500">{step.email}</p>
                          </div>
                        </div>

                        {/* Up/Down Arrows */}
                        <div className="col-span-3 flex items-center justify-end gap-1">
                          <button
                            onClick={() => moveStep(index, 'up')}
                            disabled={index === 0}
                            className="p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-slate-500 hover:text-indigo-600 hover:bg-indigo-50"
                            title="Move Up"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => moveStep(index, 'down')}
                            disabled={index === steps.length - 1}
                            className="p-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-slate-500 hover:text-indigo-600 hover:bg-indigo-50"
                            title="Move Down"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={handleCancel}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!changed || isSaving}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg shadow-indigo-200 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
                >
                  {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Right Column - Authority Details */}
          <aside className="md:col-span-5 xl:col-span-4">
            <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 bg-gray-50/50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  Authority Details
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">Authority Name</label>
                    <input
                      type="text"
                      value={template?.approval_template_name || ''}
                      className="w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm"
                      readOnly
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">Authority Type</label>
                    <input
                      type="text"
                      value={template?.approval_type || ''}
                      className="w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm"
                      readOnly
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">Description</label>
                    <textarea
                      className="w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm h-20 resize-none"
                      readOnly
                      value={template?.description || ''}
                    />
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* Success Animation */}
      <SuccessAnimation show={showSuccess} onComplete={handleSuccessComplete} />

      {/* Cancel Confirm Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
            <h3 className="text-base font-bold text-slate-800 mb-3">Confirm Cancel</h3>
            <p className="text-sm text-slate-500 mb-4">You have unsaved changes. Are you sure you want to cancel?</p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowCancelConfirm(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={confirmCancel}
                className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg transition-all"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
