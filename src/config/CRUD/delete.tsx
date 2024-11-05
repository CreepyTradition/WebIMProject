import supabase from "../supbaseClient";

export async function deleteFacilitator(id: string) {
  const { data, error } = await supabase
    .from('facilitators')
    .delete()
    .eq('id', id);
  
  if (error) throw new Error(error.message);
  return data;
}
