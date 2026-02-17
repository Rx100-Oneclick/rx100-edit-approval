export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      app_code_sequences: {
        Row: {
          next_sequence: number
          tenant_id: string
        }
        Insert: {
          next_sequence: number
          tenant_id: string
        }
        Update: {
          next_sequence?: number
          tenant_id?: string
        }
        Relationships: []
      }
      app_registry: {
        Row: {
          active: boolean | null
          app_id: string
          app_key: string | null
          app_name: string | null
          app_type: string | null
          capability: string | null
          target_url: string | null
        }
        Insert: {
          active?: boolean | null
          app_id?: string
          app_key?: string | null
          app_name?: string | null
          app_type?: string | null
          capability?: string | null
          target_url?: string | null
        }
        Update: {
          active?: boolean | null
          app_id?: string
          app_key?: string | null
          app_name?: string | null
          app_type?: string | null
          capability?: string | null
          target_url?: string | null
        }
        Relationships: []
      }
      app_role_permissions: {
        Row: {
          created_at: string | null
          permission_id: string
          role_id: string
        }
        Insert: {
          created_at?: string | null
          permission_id: string
          role_id: string
        }
        Update: {
          created_at?: string | null
          permission_id?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "module_permissions"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "app_role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "application_roles"
            referencedColumns: ["uuid"]
          },
        ]
      }
      application_owners: {
        Row: {
          app_id: string
          created_at: string | null
          created_by: string
          effective_from: string | null
          effective_untill: string | null
          is_active: boolean | null
          role: string
          tenant_id: string
          updated_at: string | null
          user_id: string
          uuid: string
        }
        Insert: {
          app_id: string
          created_at?: string | null
          created_by?: string
          effective_from?: string | null
          effective_untill?: string | null
          is_active?: boolean | null
          role: string
          tenant_id: string
          updated_at?: string | null
          user_id: string
          uuid?: string
        }
        Update: {
          app_id?: string
          created_at?: string | null
          created_by?: string
          effective_from?: string | null
          effective_untill?: string | null
          is_active?: boolean | null
          role?: string
          tenant_id?: string
          updated_at?: string | null
          user_id?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_owners_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "applications_registry"
            referencedColumns: ["app_id"]
          },
          {
            foreignKeyName: "application_owners_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      application_roles: {
        Row: {
          application_id: string
          created_at: string | null
          role_name: string
          tenant_id: string
          uuid: string
        }
        Insert: {
          application_id: string
          created_at?: string | null
          role_name: string
          tenant_id: string
          uuid?: string
        }
        Update: {
          application_id?: string
          created_at?: string | null
          role_name?: string
          tenant_id?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_roles_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications_registry"
            referencedColumns: ["app_id"]
          },
          {
            foreignKeyName: "application_roles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      application_user_permissions: {
        Row: {
          application_id: string
          archived: boolean | null
          created_at: string | null
          organization_id: string
          organization_member_id: string
          permission_jsonb: Json
          permission_matrix_id: string
          updated_at: string | null
          uuid: string
        }
        Insert: {
          application_id: string
          archived?: boolean | null
          created_at?: string | null
          organization_id: string
          organization_member_id: string
          permission_jsonb: Json
          permission_matrix_id: string
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          application_id?: string
          archived?: boolean | null
          created_at?: string | null
          organization_id?: string
          organization_member_id?: string
          permission_jsonb?: Json
          permission_matrix_id?: string
          updated_at?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_user_permissions_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "application_user_permissions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "application_user_permissions_organization_member_id_fkey"
            columns: ["organization_member_id"]
            isOneToOne: false
            referencedRelation: "organization_members"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "application_user_permissions_permission_matrix_id_fkey"
            columns: ["permission_matrix_id"]
            isOneToOne: false
            referencedRelation: "permission_matrix"
            referencedColumns: ["uuid"]
          },
        ]
      }
      applications: {
        Row: {
          application_name: string
          application_static_id: string
          archived: boolean | null
          created_at: string | null
          updated_at: string | null
          uuid: string
        }
        Insert: {
          application_name: string
          application_static_id: string
          archived?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          application_name?: string
          application_static_id?: string
          archived?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Relationships: []
      }
      applications_modules: {
        Row: {
          app_id: string
          created_at: string | null
          created_by: string
          description: string | null
          module_name: string
          status: string
          tenant_id: string
          updated_at: string | null
          uuid: string
        }
        Insert: {
          app_id: string
          created_at?: string | null
          created_by?: string
          description?: string | null
          module_name: string
          status: string
          tenant_id: string
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          app_id?: string
          created_at?: string | null
          created_by?: string
          description?: string | null
          module_name?: string
          status?: string
          tenant_id?: string
          updated_at?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_modules_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "applications_registry"
            referencedColumns: ["app_id"]
          },
          {
            foreignKeyName: "applications_modules_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      applications_registry: {
        Row: {
          app_code: string
          app_id: string
          app_name: string
          app_type: string
          created_at: string | null
          created_by: string
          criticality: string | null
          data_sensitivity: string | null
          description: string
          owning_org_unit_id: string | null
          status: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          app_code: string
          app_id?: string
          app_name: string
          app_type: string
          created_at?: string | null
          created_by?: string
          criticality?: string | null
          data_sensitivity?: string | null
          description: string
          owning_org_unit_id?: string | null
          status: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          app_code?: string
          app_id?: string
          app_name?: string
          app_type?: string
          created_at?: string | null
          created_by?: string
          criticality?: string | null
          data_sensitivity?: string | null
          description?: string
          owning_org_unit_id?: string | null
          status?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_registry_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      approval_template_scope: {
        Row: {
          created_at: string
          created_by: string
          scope_reference_id: string | null
          scope_type: string
          template_id: string
          tenant_id: string
          uuid: string
        }
        Insert: {
          created_at: string
          created_by: string
          scope_reference_id?: string | null
          scope_type: string
          template_id: string
          tenant_id: string
          uuid?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          scope_reference_id?: string | null
          scope_type?: string
          template_id?: string
          tenant_id?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "approval_template_scope_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "approval_templates"
            referencedColumns: ["template_id"]
          },
          {
            foreignKeyName: "approval_template_scope_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      approval_template_steps: {
        Row: {
          config: Json | null
          created_at: string | null
          created_by: string
          email: string
          name: string
          step_id: string
          step_order: number
          updated_at: string | null
          user_id: string
          version_id: string
        }
        Insert: {
          config?: Json | null
          created_at?: string | null
          created_by?: string
          email: string
          name: string
          step_id?: string
          step_order: number
          updated_at?: string | null
          user_id: string
          version_id: string
        }
        Update: {
          config?: Json | null
          created_at?: string | null
          created_by?: string
          email?: string
          name?: string
          step_id?: string
          step_order?: number
          updated_at?: string | null
          user_id?: string
          version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "approval_template_steps_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "approval_template_versions"
            referencedColumns: ["version_id"]
          },
        ]
      }
      approval_template_versions: {
        Row: {
          created_at: string | null
          created_by: string
          is_active: boolean | null
          published_at: string | null
          status: string
          template_id: string
          version_id: string
          version_number: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string
          is_active?: boolean | null
          published_at?: string | null
          status: string
          template_id: string
          version_id?: string
          version_number: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          is_active?: boolean | null
          published_at?: string | null
          status?: string
          template_id?: string
          version_id?: string
          version_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "approval_template_versions_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "approval_templates"
            referencedColumns: ["template_id"]
          },
        ]
      }
      approval_templates: {
        Row: {
          approval_template_name: string
          approval_type: string
          created_at: string | null
          created_by: string
          description: string
          template_id: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          approval_template_name: string
          approval_type: string
          created_at?: string | null
          created_by?: string
          description: string
          template_id?: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          approval_template_name?: string
          approval_type?: string
          created_at?: string | null
          created_by?: string
          description?: string
          template_id?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "approval_templates_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      audit_events: {
        Row: {
          actor: Json
          audit_event_id: string
          context: Json | null
          event_type: string
          occurred_at: string
          request_id: string
          source_system: string
          stored_at: string
          subject: Json
          tenant_id: string | null
          trace_id: string
        }
        Insert: {
          actor: Json
          audit_event_id: string
          context?: Json | null
          event_type: string
          occurred_at: string
          request_id: string
          source_system: string
          stored_at?: string
          subject: Json
          tenant_id?: string | null
          trace_id: string
        }
        Update: {
          actor?: Json
          audit_event_id?: string
          context?: Json | null
          event_type?: string
          occurred_at?: string
          request_id?: string
          source_system?: string
          stored_at?: string
          subject?: Json
          tenant_id?: string | null
          trace_id?: string
        }
        Relationships: []
      }
      audit_seal_idempotency: {
        Row: {
          created_at: string
          request_id: string
          response: Json
          seal_id: string
        }
        Insert: {
          created_at?: string
          request_id: string
          response: Json
          seal_id: string
        }
        Update: {
          created_at?: string
          request_id?: string
          response?: Json
          seal_id?: string
        }
        Relationships: []
      }
      audit_seals: {
        Row: {
          batch_id: string
          previous_seal_hash: string | null
          seal_hash: string
          seal_id: string
          sealed_at: string
          signature: string
          source_system: string
          tenant_id: string | null
        }
        Insert: {
          batch_id: string
          previous_seal_hash?: string | null
          seal_hash: string
          seal_id?: string
          sealed_at?: string
          signature: string
          source_system: string
          tenant_id?: string | null
        }
        Update: {
          batch_id?: string
          previous_seal_hash?: string | null
          seal_hash?: string
          seal_id?: string
          sealed_at?: string
          signature?: string
          source_system?: string
          tenant_id?: string | null
        }
        Relationships: []
      }
      decision_records: {
        Row: {
          decided_at: string
          decided_by: string
          decision_id: string
          decision_type: string
          outcome: string
          reason_codes: string[] | null
          record_id: string
          recorded_at: string
          request_id: string
          resource_id: string
          resource_type: string
          subject_id: string
          subject_type: string
          trace_id: string
        }
        Insert: {
          decided_at: string
          decided_by: string
          decision_id: string
          decision_type: string
          outcome: string
          reason_codes?: string[] | null
          record_id?: string
          recorded_at?: string
          request_id: string
          resource_id: string
          resource_type: string
          subject_id: string
          subject_type: string
          trace_id: string
        }
        Update: {
          decided_at?: string
          decided_by?: string
          decision_id?: string
          decision_type?: string
          outcome?: string
          reason_codes?: string[] | null
          record_id?: string
          recorded_at?: string
          request_id?: string
          resource_id?: string
          resource_type?: string
          subject_id?: string
          subject_type?: string
          trace_id?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          body_html_template: string
          body_text_template: string
          locale: string
          subject_template: string
          template_key: string
        }
        Insert: {
          body_html_template: string
          body_text_template: string
          locale: string
          subject_template: string
          template_key: string
        }
        Update: {
          body_html_template?: string
          body_text_template?: string
          locale?: string
          subject_template?: string
          template_key?: string
        }
        Relationships: []
      }
      enforcement_result_events: {
        Row: {
          action: string
          details: string | null
          emitted_at: string
          enforcement_outcome: string
          policy_decision: string
          request_id: string
          resource_type: string
          source_system: string
          trace_id: string
        }
        Insert: {
          action: string
          details?: string | null
          emitted_at?: string
          enforcement_outcome: string
          policy_decision: string
          request_id: string
          resource_type: string
          source_system: string
          trace_id: string
        }
        Update: {
          action?: string
          details?: string | null
          emitted_at?: string
          enforcement_outcome?: string
          policy_decision?: string
          request_id?: string
          resource_type?: string
          source_system?: string
          trace_id?: string
        }
        Relationships: []
      }
      event_registry: {
        Row: {
          created_at: string
          created_by: string | null
          event_type: string
          headers_required: string[]
          id: string
          partition_keys: string[] | null
          schema_version: number
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          event_type: string
          headers_required: string[]
          id?: string
          partition_keys?: string[] | null
          schema_version: number
        }
        Update: {
          created_at?: string
          created_by?: string | null
          event_type?: string
          headers_required?: string[]
          id?: string
          partition_keys?: string[] | null
          schema_version?: number
        }
        Relationships: []
      }
      event_routing_config: {
        Row: {
          created_at: string
          created_by: string | null
          delivery_mode: string
          event_type: string
          id: string
          is_active: boolean
          partition_key: string | null
          subscriber_endpoint: string
          subscriber_name: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          delivery_mode: string
          event_type: string
          id?: string
          is_active?: boolean
          partition_key?: string | null
          subscriber_endpoint: string
          subscriber_name: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          delivery_mode?: string
          event_type?: string
          id?: string
          is_active?: boolean
          partition_key?: string | null
          subscriber_endpoint?: string
          subscriber_name?: string
        }
        Relationships: []
      }
      gateway_route_registry: {
        Row: {
          created_at: string
          enforcement_pipeline: string
          http_method: string
          is_active: boolean
          request_path: string
          route_id: string
          target_service: string
        }
        Insert: {
          created_at?: string
          enforcement_pipeline: string
          http_method: string
          is_active?: boolean
          request_path: string
          route_id?: string
          target_service: string
        }
        Update: {
          created_at?: string
          enforcement_pipeline?: string
          http_method?: string
          is_active?: boolean
          request_path?: string
          route_id?: string
          target_service?: string
        }
        Relationships: []
      }
      group_code_sequences: {
        Row: {
          next_sequence: number
          tenant_id: string
        }
        Insert: {
          next_sequence: number
          tenant_id: string
        }
        Update: {
          next_sequence?: number
          tenant_id?: string
        }
        Relationships: []
      }
      group_members: {
        Row: {
          added_by: string
          created_at: string | null
          group_id: string
          is_active: boolean
          membership_id: string
          membership_type: string
          tenant_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          added_by: string
          created_at?: string | null
          group_id: string
          is_active?: boolean
          membership_id?: string
          membership_type: string
          tenant_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          added_by?: string
          created_at?: string | null
          group_id?: string
          is_active?: boolean
          membership_id?: string
          membership_type?: string
          tenant_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["group_id"]
          },
          {
            foreignKeyName: "group_members_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      groups: {
        Row: {
          created_at: string | null
          created_by: string
          description: string
          group_code: string
          group_id: string
          group_name: string
          status: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string
          description: string
          group_code: string
          group_id?: string
          group_name: string
          status: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string
          group_code?: string
          group_id?: string
          group_name?: string
          status?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      idempotency_keys: {
        Row: {
          created_at: string
          request_id: string
          response: Json
        }
        Insert: {
          created_at?: string
          request_id: string
          response: Json
        }
        Update: {
          created_at?: string
          request_id?: string
          response?: Json
        }
        Relationships: []
      }
      microservices: {
        Row: {
          api_endpoint: string | null
          archived: boolean | null
          created_at: string | null
          created_by: string
          functions_code: string | null
          name: string
          scope: string | null
          service_id: string
          status: string
          tenant_id: string
          updated_at: string | null
          uuid: string
          version: string | null
        }
        Insert: {
          api_endpoint?: string | null
          archived?: boolean | null
          created_at?: string | null
          created_by: string
          functions_code?: string | null
          name: string
          scope?: string | null
          service_id: string
          status?: string
          tenant_id: string
          updated_at?: string | null
          uuid?: string
          version?: string | null
        }
        Update: {
          api_endpoint?: string | null
          archived?: boolean | null
          created_at?: string | null
          created_by?: string
          functions_code?: string | null
          name?: string
          scope?: string | null
          service_id?: string
          status?: string
          tenant_id?: string
          updated_at?: string | null
          uuid?: string
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "microservices_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "service_register"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "microservices_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      module_permissions: {
        Row: {
          action: string
          application_id: string
          created_at: string | null
          module_id: string
          permission_code: string
          uuid: string
        }
        Insert: {
          action: string
          application_id: string
          created_at?: string | null
          module_id: string
          permission_code: string
          uuid?: string
        }
        Update: {
          action?: string
          application_id?: string
          created_at?: string | null
          module_id?: string
          permission_code?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "module_permissions_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications_registry"
            referencedColumns: ["app_id"]
          },
          {
            foreignKeyName: "module_permissions_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "applications_modules"
            referencedColumns: ["uuid"]
          },
        ]
      }
      onboarding_state_log: {
        Row: {
          actor: string
          created_at: string
          intent: string
          onboarding_id: string
          reason_code: string | null
          record_id: string
          request_id: string
          source_system: string
          state: string
          tenant_id: string | null
          trace_id: string
        }
        Insert: {
          actor: string
          created_at?: string
          intent: string
          onboarding_id: string
          reason_code?: string | null
          record_id?: string
          request_id: string
          source_system: string
          state: string
          tenant_id?: string | null
          trace_id: string
        }
        Update: {
          actor?: string
          created_at?: string
          intent?: string
          onboarding_id?: string
          reason_code?: string | null
          record_id?: string
          request_id?: string
          source_system?: string
          state?: string
          tenant_id?: string | null
          trace_id?: string
        }
        Relationships: []
      }
      org_relationships: {
        Row: {
          child_org_unit_id: string
          created_at: string | null
          created_by: string
          effective_from: string | null
          is_active: boolean
          parent_org_unit_id: string
          tenant_id: string
          updated_at: string | null
          uuid: string
        }
        Insert: {
          child_org_unit_id: string
          created_at?: string | null
          created_by: string
          effective_from?: string | null
          is_active: boolean
          parent_org_unit_id: string
          tenant_id: string
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          child_org_unit_id?: string
          created_at?: string | null
          created_by?: string
          effective_from?: string | null
          is_active?: boolean
          parent_org_unit_id?: string
          tenant_id?: string
          updated_at?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_relationships_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      org_units: {
        Row: {
          created_at: string
          created_by: string
          description: string
          org_unit_name: string
          org_unit_type: string
          status: string
          tenant_id: string
          updated_at: string
          uuid: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description: string
          org_unit_name: string
          org_unit_type: string
          status: string
          tenant_id: string
          updated_at?: string
          uuid?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string
          org_unit_name?: string
          org_unit_type?: string
          status?: string
          tenant_id?: string
          updated_at?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_units_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      organization_members: {
        Row: {
          activation_details: string | null
          archived: boolean | null
          assigned_on: string | null
          avatar_url: string | null
          business_unit: string | null
          created_at: string | null
          designation: string | null
          email: string
          expiry_details: string | null
          full_name: string
          invitation_status: string
          invite_user: boolean | null
          mobile_number: string | null
          reporting_manager: string | null
          role: string
          role_id: string | null
          setup_complete: boolean | null
          status: string | null
          tenant_id: string
          type: string | null
          updated_at: string | null
          user_id: string | null
          uuid: string
        }
        Insert: {
          activation_details?: string | null
          archived?: boolean | null
          assigned_on?: string | null
          avatar_url?: string | null
          business_unit?: string | null
          created_at?: string | null
          designation?: string | null
          email: string
          expiry_details?: string | null
          full_name: string
          invitation_status: string
          invite_user?: boolean | null
          mobile_number?: string | null
          reporting_manager?: string | null
          role: string
          role_id?: string | null
          setup_complete?: boolean | null
          status?: string | null
          tenant_id: string
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
          uuid?: string
        }
        Update: {
          activation_details?: string | null
          archived?: boolean | null
          assigned_on?: string | null
          avatar_url?: string | null
          business_unit?: string | null
          created_at?: string | null
          designation?: string | null
          email?: string
          expiry_details?: string | null
          full_name?: string
          invitation_status?: string
          invite_user?: boolean | null
          mobile_number?: string | null
          reporting_manager?: string | null
          role?: string
          role_id?: string | null
          setup_complete?: boolean | null
          status?: string | null
          tenant_id?: string
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_members_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "organization_members_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      organizations: {
        Row: {
          archived: boolean | null
          country: string | null
          created_at: string | null
          domain: string | null
          is_active: boolean | null
          name: string
          type: string | null
          updated_at: string | null
          uuid: string
        }
        Insert: {
          archived?: boolean | null
          country?: string | null
          created_at?: string | null
          domain?: string | null
          is_active?: boolean | null
          name: string
          type?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          archived?: boolean | null
          country?: string | null
          created_at?: string | null
          domain?: string | null
          is_active?: boolean | null
          name?: string
          type?: string | null
          updated_at?: string | null
          uuid?: string
        }
        Relationships: []
      }
      pending_signup_projected_events: {
        Row: {
          event_id: string
          occurred_at: string
          pending_signup_id: string
          projected_at: string
        }
        Insert: {
          event_id: string
          occurred_at: string
          pending_signup_id: string
          projected_at?: string
        }
        Update: {
          event_id?: string
          occurred_at?: string
          pending_signup_id?: string
          projected_at?: string
        }
        Relationships: []
      }
      pending_signups: {
        Row: {
          attempt_count: number
          created_at: string
          email: string
          idempotency_key: string
          last_projected_event_at: string | null
          last_verification_sent_at: string | null
          name: string | null
          password_hash: Json
          status: string
          tentant_id: string | null
          trace_id: string | null
          user_id: string | null
          uuid: string
        }
        Insert: {
          attempt_count?: number
          created_at?: string
          email: string
          idempotency_key: string
          last_projected_event_at?: string | null
          last_verification_sent_at?: string | null
          name?: string | null
          password_hash: Json
          status: string
          tentant_id?: string | null
          trace_id?: string | null
          user_id?: string | null
          uuid?: string
        }
        Update: {
          attempt_count?: number
          created_at?: string
          email?: string
          idempotency_key?: string
          last_projected_event_at?: string | null
          last_verification_sent_at?: string | null
          name?: string | null
          password_hash?: Json
          status?: string
          tentant_id?: string | null
          trace_id?: string | null
          user_id?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "pending_signups_tentant_id_fkey"
            columns: ["tentant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      permission_actions: {
        Row: {
          action_name: string
          uuid: string
        }
        Insert: {
          action_name: string
          uuid?: string
        }
        Update: {
          action_name?: string
          uuid?: string
        }
        Relationships: []
      }
      permission_matrix: {
        Row: {
          application_id: string
          archived: boolean | null
          created_at: string | null
          name: string
          permissions_jsonb: Json
          updated_at: string | null
          uuid: string
        }
        Insert: {
          application_id: string
          archived?: boolean | null
          created_at?: string | null
          name: string
          permissions_jsonb: Json
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          application_id?: string
          archived?: boolean | null
          created_at?: string | null
          name?: string
          permissions_jsonb?: Json
          updated_at?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "permission_matrix_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["uuid"]
          },
        ]
      }
      permissions: {
        Row: {
          action_name: string
          allowed_resource_scopes: string[]
          created_at: string
          created_by: string
          dependency_rules: Json | null
          feature_name: string
          risk_level: string | null
          system_defined: boolean
          updated_at: string
          uuid: string
        }
        Insert: {
          action_name: string
          allowed_resource_scopes: string[]
          created_at?: string
          created_by?: string
          dependency_rules?: Json | null
          feature_name: string
          risk_level?: string | null
          system_defined?: boolean
          updated_at?: string
          uuid?: string
        }
        Update: {
          action_name?: string
          allowed_resource_scopes?: string[]
          created_at?: string
          created_by?: string
          dependency_rules?: Json | null
          feature_name?: string
          risk_level?: string | null
          system_defined?: boolean
          updated_at?: string
          uuid?: string
        }
        Relationships: []
      }
      policies: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          policy_code: string
          policy_id: string
          policy_name: string
          policy_type: string
          status: string | null
          tenant_id: string
          updated_at: string
          version: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          policy_code: string
          policy_id?: string
          policy_name: string
          policy_type: string
          status?: string | null
          tenant_id: string
          updated_at?: string
          version: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          policy_code?: string
          policy_id?: string
          policy_name?: string
          policy_type?: string
          status?: string | null
          tenant_id?: string
          updated_at?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "policies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      policy_assignments: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          assignment_id: string
          enforcement_mode: string
          is_active: boolean | null
          policy_id: string | null
          scope_id: string
          tenant_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          assignment_id?: string
          enforcement_mode: string
          is_active?: boolean | null
          policy_id?: string | null
          scope_id: string
          tenant_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          assignment_id?: string
          enforcement_mode?: string
          is_active?: boolean | null
          policy_id?: string | null
          scope_id?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "policy_assignments_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["policy_id"]
          },
          {
            foreignKeyName: "policy_assignments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      policy_attribute_operators: {
        Row: {
          attribute_key: string
          created_at: string | null
          operator: string
        }
        Insert: {
          attribute_key: string
          created_at?: string | null
          operator: string
        }
        Update: {
          attribute_key?: string
          created_at?: string | null
          operator?: string
        }
        Relationships: [
          {
            foreignKeyName: "policy_attribute_operators_attribute_key_fkey"
            columns: ["attribute_key"]
            isOneToOne: false
            referencedRelation: "policy_attributes"
            referencedColumns: ["attribute_key"]
          },
        ]
      }
      policy_attributes: {
        Row: {
          attribute_key: string
          category: string
          created_at: string | null
          description: string | null
          display_name: string
          is_active: boolean | null
          value_source: string
          value_type: string
        }
        Insert: {
          attribute_key: string
          category: string
          created_at?: string | null
          description?: string | null
          display_name: string
          is_active?: boolean | null
          value_source: string
          value_type: string
        }
        Update: {
          attribute_key?: string
          category?: string
          created_at?: string | null
          description?: string | null
          display_name?: string
          is_active?: boolean | null
          value_source?: string
          value_type?: string
        }
        Relationships: []
      }
      policy_bundle_cache: {
        Row: {
          action: string
          cache_id: string
          created_at: string
          policy_bundle: Json
          resolved_state: string
          resource_type: string
          tenant_id: string
          ttl: string
          updated_at: string
          version: string
        }
        Insert: {
          action: string
          cache_id?: string
          created_at?: string
          policy_bundle: Json
          resolved_state?: string
          resource_type: string
          tenant_id: string
          ttl: string
          updated_at?: string
          version: string
        }
        Update: {
          action?: string
          cache_id?: string
          created_at?: string
          policy_bundle?: Json
          resolved_state?: string
          resource_type?: string
          tenant_id?: string
          ttl?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      policy_bundles: {
        Row: {
          bundle_id: string
          created_at: string
          description: string | null
          name: string
          version: string
        }
        Insert: {
          bundle_id?: string
          created_at?: string
          description?: string | null
          name: string
          version: string
        }
        Update: {
          bundle_id?: string
          created_at?: string
          description?: string | null
          name?: string
          version?: string
        }
        Relationships: []
      }
      policy_code_sequences: {
        Row: {
          next_sequence: number
          tenant_id: string
        }
        Insert: {
          next_sequence: number
          tenant_id: string
        }
        Update: {
          next_sequence?: number
          tenant_id?: string
        }
        Relationships: []
      }
      policy_decisions: {
        Row: {
          action: string | null
          assignment_id: string | null
          decision: string | null
          decision_id: string
          evaluated_at: string | null
          policy_id: string | null
          reason: string | null
          rule_id: string | null
          subject_id: string | null
        }
        Insert: {
          action?: string | null
          assignment_id?: string | null
          decision?: string | null
          decision_id: string
          evaluated_at?: string | null
          policy_id?: string | null
          reason?: string | null
          rule_id?: string | null
          subject_id?: string | null
        }
        Update: {
          action?: string | null
          assignment_id?: string | null
          decision?: string | null
          decision_id?: string
          evaluated_at?: string | null
          policy_id?: string | null
          reason?: string | null
          rule_id?: string | null
          subject_id?: string | null
        }
        Relationships: []
      }
      policy_operators: {
        Row: {
          description: string
          display_label: string
          operator_code: string
        }
        Insert: {
          description: string
          display_label: string
          operator_code: string
        }
        Update: {
          description?: string
          display_label?: string
          operator_code?: string
        }
        Relationships: []
      }
      policy_rules: {
        Row: {
          created_at: string | null
          created_by: string
          is_active: boolean | null
          policy_id: string | null
          rule_definition: Json
          rule_id: string
          rule_name: string
          updated_at: string | null
          version: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          is_active?: boolean | null
          policy_id?: string | null
          rule_definition: Json
          rule_id: string
          rule_name: string
          updated_at?: string | null
          version: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          is_active?: boolean | null
          policy_id?: string | null
          rule_definition?: Json
          rule_id?: string
          rule_name?: string
          updated_at?: string | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "policy_rules_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      policy_versions: {
        Row: {
          created_at: string | null
          created_by: string
          effective_from: string
          effective_until: string | null
          policy_id: string
          policy_version_id: string
          reason: string | null
          status: string
          tenant_id: string
          updated_at: string | null
          version_label: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          effective_from: string
          effective_until?: string | null
          policy_id: string
          policy_version_id?: string
          reason?: string | null
          status: string
          tenant_id: string
          updated_at?: string | null
          version_label: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          effective_from?: string
          effective_until?: string | null
          policy_id?: string
          policy_version_id?: string
          reason?: string | null
          status?: string
          tenant_id?: string
          updated_at?: string | null
          version_label?: string
        }
        Relationships: [
          {
            foreignKeyName: "policy_versions_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["policy_id"]
          },
          {
            foreignKeyName: "policy_versions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      redirect_allow_list: {
        Row: {
          allowed_host: string
          allowed_scheme: string
          archived: boolean
          context: string
          created_at: string
          id: string
          tenant_id: string | null
        }
        Insert: {
          allowed_host: string
          allowed_scheme?: string
          archived?: boolean
          context: string
          created_at?: string
          id?: string
          tenant_id?: string | null
        }
        Update: {
          allowed_host?: string
          allowed_scheme?: string
          archived?: boolean
          context?: string
          created_at?: string
          id?: string
          tenant_id?: string | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          permission_id: string
          role_id: string
        }
        Insert: {
          permission_id: string
          role_id: string
        }
        Update: {
          permission_id?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["uuid"]
          },
        ]
      }
      role_policies: {
        Row: {
          action: string
          bundle_id: string
          condition: Json
          created_at: string
          description: string | null
          policy_id: string
          resource_type: string
        }
        Insert: {
          action: string
          bundle_id: string
          condition: Json
          created_at?: string
          description?: string | null
          policy_id?: string
          resource_type?: string
        }
        Update: {
          action?: string
          bundle_id?: string
          condition?: Json
          created_at?: string
          description?: string | null
          policy_id?: string
          resource_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_policies_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "policy_bundles"
            referencedColumns: ["bundle_id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          name: string
          publish_reason: string | null
          role_type: string
          scope: string | null
          status: string
          system_defined: boolean
          tenant_id: string | null
          updated_at: string
          uuid: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          name: string
          publish_reason?: string | null
          role_type: string
          scope?: string | null
          status: string
          system_defined?: boolean
          tenant_id?: string | null
          updated_at?: string
          uuid?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          name?: string
          publish_reason?: string | null
          role_type?: string
          scope?: string | null
          status?: string
          system_defined?: boolean
          tenant_id?: string | null
          updated_at?: string
          uuid?: string
        }
        Relationships: []
      }
      scopes: {
        Row: {
          created_at: string | null
          display_name: string | null
          scope_id: string
          scope_type: string
          tenant_id: string
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          scope_id?: string
          scope_type: string
          tenant_id: string
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          scope_id?: string
          scope_type?: string
          tenant_id?: string
        }
        Relationships: []
      }
      service_register: {
        Row: {
          archived: boolean | null
          created_at: string | null
          created_by: string
          icon: string | null
          name: string
          tenant_id: string
          updated_at: string | null
          uuid: string
        }
        Insert: {
          archived?: boolean | null
          created_at?: string | null
          created_by: string
          icon?: string | null
          name: string
          tenant_id: string
          updated_at?: string | null
          uuid?: string
        }
        Update: {
          archived?: boolean | null
          created_at?: string | null
          created_by?: string
          icon?: string | null
          name?: string
          tenant_id?: string
          updated_at?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_register_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      session_issued_signals: {
        Row: {
          client_id: string
          client_type: string
          expires_at: string
          issued_at: string
          request_id: string
          session_id: string
          source_system: string
          tenant_id: string | null
          trace_id: string
          user_id: string
        }
        Insert: {
          client_id: string
          client_type: string
          expires_at: string
          issued_at: string
          request_id: string
          session_id: string
          source_system: string
          tenant_id?: string | null
          trace_id: string
          user_id: string
        }
        Update: {
          client_id?: string
          client_type?: string
          expires_at?: string
          issued_at?: string
          request_id?: string
          session_id?: string
          source_system?: string
          tenant_id?: string | null
          trace_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_issued_signals_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      signin_request_signals: {
        Row: {
          client_id: string
          credential_type: string
          identifier: string
          intent: string
          password_present: boolean | null
          received_at: string
          redirect: string | null
          request_id: string
          signal_id: string
          source_system: string
          tenant_id: string | null
          trace_id: string
        }
        Insert: {
          client_id: string
          credential_type: string
          identifier: string
          intent: string
          password_present?: boolean | null
          received_at?: string
          redirect?: string | null
          request_id: string
          signal_id?: string
          source_system: string
          tenant_id?: string | null
          trace_id: string
        }
        Update: {
          client_id?: string
          credential_type?: string
          identifier?: string
          intent?: string
          password_present?: boolean | null
          received_at?: string
          redirect?: string | null
          request_id?: string
          signal_id?: string
          source_system?: string
          tenant_id?: string | null
          trace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "signin_request_signals_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      snippet_register: {
        Row: {
          archived: boolean
          attachments: string[] | null
          call_url: string
          created_at: string
          created_by: string | null
          description: string
          name: string
          tenant_id: string
          updated_at: string
          uuid: string
        }
        Insert: {
          archived?: boolean
          attachments?: string[] | null
          call_url: string
          created_at?: string
          created_by?: string | null
          description: string
          name: string
          tenant_id: string
          updated_at?: string
          uuid?: string
        }
        Update: {
          archived?: boolean
          attachments?: string[] | null
          call_url?: string
          created_at?: string
          created_by?: string | null
          description?: string
          name?: string
          tenant_id?: string
          updated_at?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "snippet_register_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      trusted_producers: {
        Row: {
          created_at: string
          producer_id: string
          source_system: string
          status: string
        }
        Insert: {
          created_at?: string
          producer_id: string
          source_system: string
          status: string
        }
        Update: {
          created_at?: string
          producer_id?: string
          source_system?: string
          status?: string
        }
        Relationships: []
      }
      user_application_roles: {
        Row: {
          application_id: string
          assigned_at: string | null
          role_id: string
          tenant_id: string
          user_id: string
          uuid: string
        }
        Insert: {
          application_id: string
          assigned_at?: string | null
          role_id: string
          tenant_id: string
          user_id?: string
          uuid?: string
        }
        Update: {
          application_id?: string
          assigned_at?: string | null
          role_id?: string
          tenant_id?: string
          user_id?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_application_roles_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications_registry"
            referencedColumns: ["app_id"]
          },
          {
            foreignKeyName: "user_application_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "application_roles"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "user_application_roles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["uuid"]
          },
        ]
      }
      user_identity: {
        Row: {
          auth_flags: Json
          identity_state: string
          updated_at: string
          user_id: string
        }
        Insert: {
          auth_flags?: Json
          identity_state: string
          updated_at?: string
          user_id: string
        }
        Update: {
          auth_flags?: Json
          identity_state?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_identity_state_log: {
        Row: {
          created_at: string
          id: string
          new_state: string
          previous_state: string
          reason_code: string | null
          request_id: string
          source_system: string
          trace_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          new_state: string
          previous_state: string
          reason_code?: string | null
          request_id: string
          source_system: string
          trace_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          new_state?: string
          previous_state?: string
          reason_code?: string | null
          request_id?: string
          source_system?: string
          trace_id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          auth_methods: string[]
          created_at: string
          email: string
          email_verified: boolean
          status: string
          tenant_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          auth_methods?: string[]
          created_at?: string
          email: string
          email_verified?: boolean
          status: string
          tenant_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          auth_methods?: string[]
          created_at?: string
          email?: string
          email_verified?: boolean
          status?: string
          tenant_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      verification_client_allowlist: {
        Row: {
          allowed_origins: string[]
          client_id: string
          client_type: string
          enabled: boolean
        }
        Insert: {
          allowed_origins: string[]
          client_id: string
          client_type: string
          enabled?: boolean
        }
        Update: {
          allowed_origins?: string[]
          client_id?: string
          client_type?: string
          enabled?: boolean
        }
        Relationships: []
      }
      verification_client_validation_signals: {
        Row: {
          client_id: string
          id: string
          reason_code: string
          request_id: string
          source_system: string
          tenant_id: string | null
          trace_id: string
          valid: boolean
          validated_at: string
        }
        Insert: {
          client_id: string
          id?: string
          reason_code: string
          request_id: string
          source_system: string
          tenant_id?: string | null
          trace_id: string
          valid: boolean
          validated_at?: string
        }
        Update: {
          client_id?: string
          id?: string
          reason_code?: string
          request_id?: string
          source_system?: string
          tenant_id?: string | null
          trace_id?: string
          valid?: boolean
          validated_at?: string
        }
        Relationships: []
      }
      verification_email_delivery_logs: {
        Row: {
          attempt: number
          failure_reason: string | null
          log_id: string
          occurred_at: string
          provider: string
          provider_message_id: string | null
          recipient: string
          recorded_at: string
          request_id: string
          source_system: string
          status: string
          template_key: string
          tenant_id: string | null
          trace_id: string
          verification_type: string
        }
        Insert: {
          attempt: number
          failure_reason?: string | null
          log_id?: string
          occurred_at: string
          provider: string
          provider_message_id?: string | null
          recipient: string
          recorded_at?: string
          request_id: string
          source_system: string
          status: string
          template_key: string
          tenant_id?: string | null
          trace_id: string
          verification_type: string
        }
        Update: {
          attempt?: number
          failure_reason?: string | null
          log_id?: string
          occurred_at?: string
          provider?: string
          provider_message_id?: string | null
          recipient?: string
          recorded_at?: string
          request_id?: string
          source_system?: string
          status?: string
          template_key?: string
          tenant_id?: string | null
          trace_id?: string
          verification_type?: string
        }
        Relationships: []
      }
      verification_enforcement_signals: {
        Row: {
          action: string
          enforced_at: string
          id: string
          intent: string
          reason_code: string
          request_id: string
          source_system: string
          status: string
          tenant_id: string | null
          trace_id: string
        }
        Insert: {
          action: string
          enforced_at: string
          id?: string
          intent: string
          reason_code: string
          request_id: string
          source_system: string
          status: string
          tenant_id?: string | null
          trace_id: string
        }
        Update: {
          action?: string
          enforced_at?: string
          id?: string
          intent?: string
          reason_code?: string
          request_id?: string
          source_system?: string
          status?: string
          tenant_id?: string | null
          trace_id?: string
        }
        Relationships: []
      }
      verification_intent_events: {
        Row: {
          id: string
          intent: string
          received_at: string
          redirect: string | null
          request_id: string
          source_system: string
          tenant_id: string | null
          token: string
          trace_id: string
        }
        Insert: {
          id?: string
          intent: string
          received_at?: string
          redirect?: string | null
          request_id: string
          source_system: string
          tenant_id?: string | null
          token: string
          trace_id: string
        }
        Update: {
          id?: string
          intent?: string
          received_at?: string
          redirect?: string | null
          request_id?: string
          source_system?: string
          tenant_id?: string | null
          token?: string
          trace_id?: string
        }
        Relationships: []
      }
      verification_outcome_signals: {
        Row: {
          id: string
          intent: string
          mapped_at: string
          mapped_reason_code: string
          mapped_status: string
          raw_reason_code: string
          raw_status: string
          request_id: string
          source_system: string
          tenant_id: string | null
          trace_id: string
        }
        Insert: {
          id?: string
          intent: string
          mapped_at: string
          mapped_reason_code: string
          mapped_status: string
          raw_reason_code: string
          raw_status: string
          request_id: string
          source_system: string
          tenant_id?: string | null
          trace_id: string
        }
        Update: {
          id?: string
          intent?: string
          mapped_at?: string
          mapped_reason_code?: string
          mapped_status?: string
          raw_reason_code?: string
          raw_status?: string
          request_id?: string
          source_system?: string
          tenant_id?: string | null
          trace_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      append_only_audit_write: { Args: { input_payload: Json }; Returns: Json }
      audit_event_intake: { Args: { input_payload: Json }; Returns: Json }
      auth_signup_service: { Args: { input_payload: Json }; Returns: Json }
      authorize_member: { Args: { input_payload: Json }; Returns: Json }
      base64url_decode: { Args: { p_input: string }; Returns: string }
      base64url_encode: { Args: { p_input: string }; Returns: string }
      build_pdp_attributes: {
        Args: {
          p_auth_context: Json
          p_request_context: Json
          p_request_id: string
          p_source_system: string
          p_trace_id: string
        }
        Returns: Json
      }
      build_verification_link: { Args: { input_payload: Json }; Returns: Json }
      check_org_uniqueness: { Args: { input_payload: Json }; Returns: Json }
      complete_verification_response: {
        Args: { input_payload: Json }
        Returns: Json
      }
      compose_email_payload: { Args: { input_payload: Json }; Returns: Json }
      create_organization: { Args: { input_payload: Json }; Returns: Json }
      create_organization_member: {
        Args: {
          p_email: string
          p_full_name?: string
          p_tenant_id: string
          p_user_id?: string
        }
        Returns: Json
      }
      dispatch_external: {
        Args: { p_headers: Json; p_payload: Json; p_provider_context: Json }
        Returns: Json
      }
      dispatch_notification: { Args: { input_payload: Json }; Returns: Json }
      email_template_resolver: { Args: { input_payload: Json }; Returns: Json }
      enforce_verification_outcome: {
        Args: { input_payload: Json }
        Returns: Json
      }
      evaluate_role_policy: {
        Args: {
          p_caller_context: Json
          p_policy_bundle: Json
          p_resource: Json
        }
        Returns: Json
      }
      forward_request: {
        Args: {
          p_method: string
          p_path: string
          p_policy_decision: string
          p_request_id: string
          p_source_system: string
          p_trace_id: string
        }
        Returns: Json
      }
      generate_trace_context: { Args: { input_payload: Json }; Returns: Json }
      get_member_by_id: { Args: { p_member_id: string }; Returns: Json }
      get_organization_name_by_id: {
        Args: { p_org_id: string }
        Returns: string
      }
      get_policy_bundle: {
        Args: { p_action: string; p_resource_type: string; p_tenant_id: string }
        Returns: Json
      }
      get_user_identity_panel: {
        Args: { p_tenant_id: string; p_user_id: string }
        Returns: Json
      }
      get_user_organization_id: { Args: never; Returns: string }
      get_users_list: {
        Args: { p_tenant_id: string }
        Returns: {
          email: string
          full_name: string
          last_login: string
          mobile_number: string
          role: string
          status: string
          user_id: string
        }[]
      }
      get_vault_secret: { Args: { secret_name: string }; Returns: string }
      intake_signin: { Args: { input_payload: Json }; Returns: Json }
      intercept_request: {
        Args: { p_headers: Json; p_http_method: string; p_request_path: string }
        Returns: Json
      }
      interpret_obligations: {
        Args: {
          p_enforcement_instructions: Json
          p_request_id: string
          p_source_system: string
          p_trace_id: string
        }
        Returns: Json
      }
      invite_organization_member:
        | {
            Args: {
              p_business_unit: string
              p_designation: string
              p_email: string
              p_full_name: string
              p_mobile_number: string
              p_reporting_manager: string
              p_tenant_id?: string
            }
            Returns: Json
          }
        | {
            Args: {
              p_business_unit: string
              p_designation: string
              p_email: string
              p_full_name: string
              p_mobile_number: string
              p_reporting_manager: string
            }
            Returns: Json
          }
      issue_session: { Args: { input_payload: Json }; Returns: Json }
      issue_verification_token: { Args: { input_payload: Json }; Returns: Json }
      lookup_member: { Args: { input_payload: Json }; Returns: Json }
      map_verification_outcome: { Args: { input_payload: Json }; Returns: Json }
      next_app_sequence: { Args: { p_tenant_id: string }; Returns: number }
      normalize_input_service: { Args: { input_payload: Json }; Returns: Json }
      policy_decision_point: { Args: { input_payload: Json }; Returns: Json }
      project_pending_signup_state: {
        Args: { input_payload: Json }
        Returns: Json
      }
      read_profile: { Args: { input_payload: Json }; Returns: Json }
      record_decision: { Args: { input_payload: Json }; Returns: Json }
      redirect_validate: { Args: { input_payload: Json }; Returns: Json }
      register_event_type: {
        Args: {
          p_event_type: string
          p_headers_required: string[]
          p_partition_keys?: string[]
          p_schema_version: number
        }
        Returns: Json
      }
      resolve_caller_context: {
        Args: { p_session_id?: string; p_token?: string }
        Returns: Json
      }
      resolve_onboarding_state: { Args: { input_payload: Json }; Returns: Json }
      resolve_policy_set: {
        Args: { p_action: string; p_resource_type: string; p_tenant_id: string }
        Returns: Json
      }
      route_event: {
        Args: { p_event_type: string; p_headers: Json; p_payload: Json }
        Returns: Json
      }
      safe_uuid: { Args: { p_text: string }; Returns: string }
      seal_audit_batch: {
        Args: {
          p_batch_id: string
          p_previous_seal_hash: string
          p_request_id: string
          p_seal_hash: string
          p_signature: string
          p_source_system: string
          p_tenant_id: string
          p_trace_id: string
        }
        Returns: Json
      }
      sign: {
        Args: { p_alg: string; p_payload: Json; p_secret: string }
        Returns: string
      }
      submit_change_event: { Args: { p_payload: Json }; Returns: Json }
      user_identity_state: {
        Args: { p_headers: Json; p_identity: Json }
        Returns: Json
      }
      validate_and_hash_password: {
        Args: { input_payload: Json }
        Returns: Json
      }
      validate_auth_context: {
        Args: {
          p_header_tenant_id: string
          p_scopes: string[]
          p_subject_id: string
          p_token_id: string
          p_token_tenant_id: string
        }
        Returns: Json
      }
      validate_event_emission: {
        Args: {
          p_event_type: string
          p_headers: Json
          p_payload: Json
          p_schema_version: number
        }
        Returns: Json
      }
      validate_org: { Args: { input_payload: Json }; Returns: Json }
      validate_required_fields: { Args: { input_payload: Json }; Returns: Json }
      validate_session: {
        Args: {
          p_request_id: string
          p_session_id: string
          p_source_system: string
          p_tenant_id: string
          p_trace_id: string
        }
        Returns: {
          invalid_reason: string
          is_valid: boolean
          session_id: string
          validated_at: string
        }[]
      }
      validate_signup: { Args: { input_payload: Json }; Returns: Json }
      verify_auth: { Args: { input_payload: Json }; Returns: Json }
      verify_signed_assertion:
        | {
            Args: {
              p_email: string
              p_pending_signup_id: string
              p_token: string
            }
            Returns: boolean
          }
        | {
            Args: {
              p_email: string
              p_pending_signup_id: string
              p_token: string
            }
            Returns: boolean
          }
      verify_signup: { Args: { input_payload: Json }; Returns: Json }
      verify_token: { Args: { input_payload: Json }; Returns: Json }
      write_onboarding_state: { Args: { input_payload: Json }; Returns: Json }
      write_verification_email_delivery_log: {
        Args: { input_payload: Json }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
