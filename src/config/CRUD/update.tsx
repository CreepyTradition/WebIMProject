import supabase from "../supbaseClient";

export async function updateFacilitator(id: string, updates: { name?: string; email?: string; profileImage?: string; }) {
  const { data, error } = await supabase
    .from('facilitators')
    .update(updates)
    .eq('id', id);
  
  if (error) throw new Error(error.message);
  return data;
}
