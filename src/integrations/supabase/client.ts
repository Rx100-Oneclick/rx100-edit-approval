// Standalone development/preview client only.
// Production XOOS hosting obtains the authenticated Data API client from bridge.data.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() || "";
const SUPABASE_PUBLISHABLE_KEY =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined)?.trim() ||
  "";

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.warn(
    "Standalone preview Supabase configuration is missing. XOOS runtime hosting does not use these values.",
  );
}

export const supabase = createClient<Database>(
  SUPABASE_URL || "https://example.invalid",
  SUPABASE_PUBLISHABLE_KEY || "preview-not-configured",
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  },
);
