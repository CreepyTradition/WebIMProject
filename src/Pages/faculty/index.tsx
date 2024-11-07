import { useState, useEffect } from "react";
import Button from "../../components/ui/button";
import supabase from "../../config/supbaseClient";

// Define the exact shape of a row in the Student_Advisor table
interface StudentAdvisorRow {
  Advisor_ID: number;
  Name: string;
  Date_Approved: string;
  Contact: number | null;
  SA_Username: string;
  SA_Password: string;
  Remarks: string;
  Gender: number; // 1 for Male, 2 for Female
}

// Define the interface for use in React state
interface StudentAdvisor {
  id: number;
  name: string;
  dateApproved: string;
  contact: number | null;
  saUsername: string;
  saPassword: string;
  remarks: string;
  gender: number; // 1 for Male, 2 for Female
}

export default function StudentAdvisorPage() {
  const [advisors, setAdvisors] = useState<StudentAdvisor[]>([]);
  const [name, setName] = useState<string>("");
  const [dateApproved, setDateApproved] = useState<string>("");
  const [contact, setContact] = useState<number | null>(null);
  const [saUsername, setSaUsername] = useState<string>("");
  const [saPassword, setSaPassword] = useState<string>("");
  const [remarks, setRemarks] = useState<string>("");
  const [gender, setGender] = useState<number>(1); // Default to Male (1)
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch advisors from Supabase on component mount
  useEffect(() => {
    const fetchAdvisors = async () => {
      const { data, error } = await supabase
        .from("Student_Advisor")
        .select("Advisor_ID, Name, Date_Approved, Contact, SA_Username, SA_Password, Remarks, Gender");

      if (error) {
        console.error("Error fetching advisors:", error.message);
      } else if (data) {
        const advisorsData = (data as unknown) as StudentAdvisorRow[];

        const formattedAdvisorsData = advisorsData.map((item) => ({
          id: item.Advisor_ID,
          name: item.Name,
          dateApproved: item.Date_Approved,
          contact: item.Contact,
          saUsername: item.SA_Username,
          saPassword: item.SA_Password,
          remarks: item.Remarks,
          gender: item.Gender,
        }));
        setAdvisors(formattedAdvisorsData);
      }
    };
    fetchAdvisors();
  }, []);

  // Handle form submission for adding or updating an advisor
  const handleSubmit = async () => {
    if (isEditing && editId !== null) {
      const { error } = await supabase
        .from("Student_Advisor")
        .update({
          Name: name,
          Date_Approved: dateApproved,
          Contact: contact,
          SA_Username: saUsername,
          SA_Password: saPassword,
          Remarks: remarks,
          Gender: gender,
        })
        .eq("Advisor_ID", editId);

      if (error) {
        console.error("Error updating advisor:", error.message);
      } else {
        setAdvisors((prev) =>
          prev.map((advisor) =>
            advisor.id === editId
              ? { id: editId, name, dateApproved, contact, saUsername, saPassword, remarks, gender }
              : advisor
          )
        );
      }
      setIsEditing(false);
      setEditId(null);
    } else {
      const { data, error } = await supabase
        .from("Student_Advisor")
        .insert([{ Name: name, Date_Approved: dateApproved, Contact: contact, SA_Username: saUsername, SA_Password: saPassword, Remarks: remarks, Gender: gender }])
        .select();

      if (error) {
        console.error("Error adding advisor:", error.message);
      } else if (data) {
        const newAdvisors = (data as unknown as StudentAdvisorRow[]).map((item) => ({
          id: item.Advisor_ID,
          name: item.Name,
          dateApproved: item.Date_Approved,
          contact: item.Contact,
          saUsername: item.SA_Username,
          saPassword: item.SA_Password,
          remarks: item.Remarks,
          gender: item.Gender,
        }));
        setAdvisors((prev) => [...prev, ...newAdvisors]);
      }
    }

    // Reset form fields after submission
    setName("");
    setDateApproved("");
    setContact(null);
    setSaUsername("");
    setSaPassword("");
    setRemarks("");
    setGender(1); // Reset to Male (1)
  };

  // Handle deleting an advisor
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this advisor?");
    if (confirmed) {
      const { error } = await supabase.from("Student_Advisor").delete().eq("Advisor_ID", id);

      if (error) {
        console.error("Error deleting advisor:", error.message);
      } else {
        setAdvisors((prev) => prev.filter((advisor) => advisor.id !== id));
      }
    }
  };

  // Set up the advisor for editing
  const handleEdit = (advisor: StudentAdvisor) => {
    const confirmed = window.confirm("Are you sure you want to edit this advisor?");
    if (confirmed) {
      setIsEditing(true);
      setEditId(advisor.id);
      setName(advisor.name);
      setDateApproved(advisor.dateApproved);
      setContact(advisor.contact);
      setSaUsername(advisor.saUsername);
      setSaPassword(advisor.saPassword);
      setRemarks(advisor.remarks);
      setGender(advisor.gender);
    }
  };

  return (
    <div>
      <div className="h-screen w-screen fixed -z-10 opacity-85">
        <img loading="lazy" className="object-cover w-full h-[350px]" src="redbg.jpg" alt="redbg" />
      </div>
      <div className="w-full flex flex-col justify-center items-center h-full text-justify gap-[1.5rem]">
        <div className="flex flex-col py-[5rem] text-regular text-center">
          <h1 className="text-border">Student Advisors</h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex p-8">
            {/* Left Side: Form to Add or Update Advisor */}
            <div className="w-1/2 pr-4">
              <div className="bg-white border border-gray-200 rounded shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  {isEditing ? "Edit Student Advisor" : "Add Student Advisor"}
                </h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <select
                  value={gender}
                  onChange={(e) => setGender(Number(e.target.value))}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                >
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                </select>
                <input
                  type="date"
                  placeholder="Date Approved"
                  value={dateApproved}
                  onChange={(e) => setDateApproved(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="SA Username"
                  value={saUsername}
                  onChange={(e) => setSaUsername(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="SA Password"
                  value={saPassword}
                  onChange={(e) => setSaPassword(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={contact ?? ""}
                  onChange={(e) => setContact(Number(e.target.value))}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <Button variant="blue" onClick={handleSubmit} className="w-full">
                  {isEditing ? "Update Student Advisor" : "Add Student Advisor"}
                </Button>
              </div>
            </div>

            {/* Right Side: List of Added Advisors */}
            <div className="w-1/2 pl-4">
              <h3 className="text-xl font-semibold mb-4">Added Student Advisors</h3>
              <div className="space-y-4">
                {advisors.length === 0 ? (
                  <p className="text-gray-600">No student advisors added yet.</p>
                ) : (
                  advisors.map((advisor) => (
                    <div key={advisor.id} className="p-4 bg-white border border-gray-200 rounded shadow-md">
                      <h4 className="text-lg font-semibold">{advisor.name}</h4>
                      <p>Gender: {advisor.gender === 1 ? "Male" : "Female"}</p>
                      <p>Date Approved: {advisor.dateApproved}</p>
                      <p>Contact: {advisor.contact}</p>
                      <p>SA Username: {advisor.saUsername}</p>
                      <p>Remarks: {advisor.remarks}</p>
                      <div className="flex justify-end mt-4 space-x-2">
                        <Button variant="blue" onClick={() => handleEdit(advisor)} className="w-full">
                          Edit
                        </Button>
                        <Button variant="red" onClick={() => handleDelete(advisor.id)} className="w-full">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
