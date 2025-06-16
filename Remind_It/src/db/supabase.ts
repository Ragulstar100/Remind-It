// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqyddisahgkgtbimbplo.supabase.co'; // 🔁 Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxeWRkaXNhaGdrZ3RiaW1icGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjk2MDIsImV4cCI6MjA2NTY0NTYwMn0.WQH8Xm08UBSJEtwylNm3753dDwK7Ur1aFFAnkw0MLnc'; // 🔁 Replace with your public anon key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
