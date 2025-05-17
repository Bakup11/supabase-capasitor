// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://lennklzrdbkaugxcramh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlbm5rbHpyZGJrYXVneGNyYW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzkzOTksImV4cCI6MjA2MzAxNTM5OX0.RaJJuX9eiEr3mGsOLUoVgaL66YITYCNrxKY1vlbpcfU';
export const supabase = createClient(supabaseUrl, supabaseKey);