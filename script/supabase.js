import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const SUPABASE_URL = 'https://xxfummgzkjxpvrzfutby.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4ZnVtbWd6a2p4cHZyemZ1dGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzUxMTcsImV4cCI6MjA3Nzg1MTExN30.expLJm8IhweMGmXtkCdqX5Ix0hotEgdzdBHrzTgisew';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);