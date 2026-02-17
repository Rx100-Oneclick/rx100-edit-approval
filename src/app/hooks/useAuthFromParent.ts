import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AuthContext {
  userId: string;
  email: string;
  tenantId: string;
  templateId: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAuthFromParent(): AuthContext {
  const [state, setState] = useState<AuthContext>({
    userId: '',
    email: '',
    tenantId: '',
    templateId: '',
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  const authenticate = useCallback(async (accessToken: string, refreshToken: string, userId: string, email: string, tenantId: string, templateId: string) => {
    try {
      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
      if (error) throw error;
      setState({
        userId,
        email,
        tenantId,
        templateId,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (err: any) {
      setState(prev => ({ ...prev, isLoading: false, error: err.message || 'Authentication failed' }));
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    const userId = params.get('user_id') || '';
    const email = params.get('email') || '';
    const tenantId = params.get('tenant_id') || '';
    const templateId = params.get('template_id') || '';

    // Store context regardless of auth
    if (tenantId) {
      setState(prev => ({ ...prev, tenantId, templateId, userId, email }));
    }

    if (accessToken && refreshToken) {
      authenticate(accessToken, refreshToken, userId, email, tenantId, templateId);
    } else {
      // Signal parent we're ready for auth
      window.parent.postMessage({ type: 'IFRAME_READY' }, '*');
      setState(prev => ({ ...prev, isLoading: true }));
    }

    const handler = (event: MessageEvent) => {
      if (event.data?.type === 'AUTH_SESSION' && event.data?.payload) {
        const { access_token, refresh_token } = event.data.payload;
        if (access_token && refresh_token) {
          authenticate(access_token, refresh_token, userId, email, tenantId, templateId);
        }
      }
    };

    window.addEventListener('message', handler);

    // Timeout if no auth received
    const timeout = setTimeout(() => {
      setState(prev => {
        if (prev.isLoading && !prev.isAuthenticated) {
          return { ...prev, isLoading: false, error: 'Authentication timeout - no credentials received' };
        }
        return prev;
      });
    }, 10000);

    return () => {
      window.removeEventListener('message', handler);
      clearTimeout(timeout);
    };
  }, [authenticate]);

  return state;
}
