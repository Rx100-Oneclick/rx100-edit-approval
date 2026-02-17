import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface TemplateDetails {
  approval_template_name: string;
  approval_type: string;
  description: string;
}

export interface StepData {
  step_id: string;
  step_order: number;
  name: string;
  email: string;
  user_id: string;
  version_id: string;
}

interface ApprovalData {
  template: TemplateDetails | null;
  steps: StepData[];
  originalSteps: StepData[];
  versionId: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useApprovalData(templateId: string, isAuthenticated: boolean) {
  const [data, setData] = useState<ApprovalData>({
    template: null,
    steps: [],
    originalSteps: [],
    versionId: null,
    isLoading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    if (!templateId || !isAuthenticated) return;

    try {
      setData(prev => ({ ...prev, isLoading: true, error: null }));

      // Fetch template details
      const { data: templateData, error: templateError } = await supabase
        .from('approval_templates')
        .select('approval_template_name, approval_type, description')
        .eq('template_id', templateId)
        .single();

      if (templateError) throw templateError;

      // Fetch draft version
      const { data: versionData, error: versionError } = await supabase
        .from('approval_template_versions')
        .select('version_id')
        .eq('template_id', templateId)
        .eq('status', 'DRAFT')
        .eq('is_active', false)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (versionError) throw versionError;

      // Fetch steps
      const { data: stepsData, error: stepsError } = await supabase
        .from('approval_template_steps')
        .select('step_id, step_order, name, email, user_id, version_id')
        .eq('version_id', versionData.version_id)
        .order('step_order', { ascending: true });

      if (stepsError) throw stepsError;

      const steps = (stepsData || []) as StepData[];

      setData({
        template: templateData,
        steps,
        originalSteps: JSON.parse(JSON.stringify(steps)),
        versionId: versionData.version_id,
        isLoading: false,
        error: null,
      });
    } catch (err: any) {
      setData(prev => ({ ...prev, isLoading: false, error: err.message || 'Failed to fetch data' }));
    }
  }, [templateId, isAuthenticated]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setSteps = (newSteps: StepData[]) => {
    setData(prev => ({ ...prev, steps: newSteps }));
  };

  const resetOriginal = () => {
    setData(prev => ({ ...prev, originalSteps: JSON.parse(JSON.stringify(prev.steps)) }));
  };

  const hasChanges = () => {
    return JSON.stringify(data.steps.map(s => s.step_id)) !== JSON.stringify(data.originalSteps.map(s => s.step_id));
  };

  return { ...data, setSteps, resetOriginal, hasChanges, refetch: fetchData };
}
