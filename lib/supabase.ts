import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Vérification et nettoyage strict de l'URL
const isValidUrl = (url: string) => {
  try {
    return url.startsWith('http://') || url.startsWith('https://');
  } catch {
    return false;
  }
};

const supabaseUrl = isValidUrl(rawUrl) 
  ? rawUrl.trim() 
  : 'https://hoyeybujcqrfxtpywmyv.supabase.co';

const supabaseAnonKey = rawKey ? rawKey.trim() : 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);