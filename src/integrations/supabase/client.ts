import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://fsvkrzruluifnclvrubi.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmtyenJ1bHVpZm5jbHZydWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMzU1NTAsImV4cCI6MjA4OTgxMTU1MH0.mDM3At_SM8z5gCmFveLLZEESZJv0HeFBJ3y06IQ6r6U";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
