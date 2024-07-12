import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vzsbfdrmxrckejkyszcy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6c2JmZHJteHJja2Vqa3lzemN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0ODMxMjAsImV4cCI6MjAzNTA1OTEyMH0.24SA3iP8t_FrxQy-J9jVFOWQm_nocUS8R0rF4dOOHmk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
