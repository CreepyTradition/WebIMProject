import supabase from "../supbaseClient";

export async function fetchFacilitators() {
  const { data, error } = await supabase
    .from('facilitators')
    .select('*');
  
  if (error) throw new Error(error.message);
  return data;
}
