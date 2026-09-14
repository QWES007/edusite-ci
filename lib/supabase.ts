import { createClient, SupabaseClient } from '@supabase/supabase-js';

const getSupabaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (url && url.startsWith('http')) {
    return url.trim();
  }
  return 'https://hoyeybujcqrfxtpywmyv.supabase.co';
};

const getSupabaseAnonKey = () => {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (key && key.length > 0) {
    return key.trim();
  }
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhveWV5YnVqY3FyZnh0cHl3bXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzOTIxMzAsImV4cCI6MjEwNDk2ODEzMH0.BOgXy6XzwHeD8UKlqokTiUx9LcjAmHtChv8faYFfyVA';
};

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(getSupabaseUrl(), getSupabaseAnonKey());
  }
  return supabaseInstance;
};