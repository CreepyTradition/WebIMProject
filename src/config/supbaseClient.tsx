import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://uvwjvvcgaqlzkskihetb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2d2p2dmNnYXFsemtza2loZXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyNjc5MjMsImV4cCI6MjA0Mzg0MzkyM30.XNPcTLkB5wdryfnZpEReG8iQJkCjmKXiezCn2aefNPw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase