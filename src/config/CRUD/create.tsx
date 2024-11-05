import supabase from "../supbaseClient";

export async function createFacilitator(name: string, email: string, profileImage: string) {
  const { data, error } = await supabase
    .from('facilitators')
    .insert([{ name, email, profileImage }]);
  
  if (error) throw new Error(error.message);
  return data;
}
