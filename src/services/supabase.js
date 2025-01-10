import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jwfotjoujsftxvjvnrzl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Zm90am91anNmdHh2anZucnpsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTMyNTAyNCwiZXhwIjoyMDQ2OTAxMDI0fQ.qATz-tdQNwGIHTRyKm1Qi_9DKGLjq_F6a9ihfTivY4g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
