import { useState } from "react";
import Button from "../../components/ui/button";

interface Facilitator {
  id: string;
  name: string;
  csaUsername: string;
  csaPassword: string;
  contact: string;
  gender: string;
}

export default function FacilitatorPage() {
  const [facilitators, setFacilitators] = useState<Facilitator[]>([]);
  const [name, setName] = useState<string>("");
  const [csaUsername, setCsaUsername] = useState<string>("");
  const [csaPassword, setCsaPassword] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);

  // Handle form submission for adding or updating a facilitator
  const handleSubmit = () => {
    if (isEditing && editId) {
      // Update existing facilitator
      setFacilitators((prev) =>
        prev.map((facilitator) =>
          facilitator.id === editId
            ? { id: editId, name, csaUsername, csaPassword, contact, gender }
            : facilitator
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add new facilitator
      const newFacilitator: Facilitator = {
        id: Date.now().toString(),
        name,
        csaUsername,
        csaPassword,
        contact,
        gender,
      };
      setFacilitators((prev) => [...prev, newFacilitator]);
    }
    // Reset form fields after submission
    setName("");
    setCsaUsername("");
    setCsaPassword("");
    setContact("");
    setGender("Male");
  };

  // Handle deleting a facilitator
  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this facilitator?"
    );
    if (confirmed) {
      setFacilitators((prev) =>
        prev.filter((facilitator) => facilitator.id !== id)
      );
    }
  };

  // Handle editing a facilitator
  const handleEdit = (facilitator: Facilitator) => {
    const confirmed = window.confirm(
      "Are you sure you want to edit this facilitator?"
    );
    if (confirmed) {
      setIsEditing(true);
      setEditId(facilitator.id);
      setName(facilitator.name);
      setCsaUsername(facilitator.csaUsername);
      setCsaPassword(facilitator.csaPassword);
      setContact(facilitator.contact);
      setGender(facilitator.gender);
    }
  };

  return (
    <div>
      <div className="h-screen w-screen fixed -z-10 opacity-85">
        <img
          loading="lazy"
          className="object-cover w-full h-[350px]"
          src="redbg.jpg"
          alt="redbg"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center h-full text-justify gap-[1.5rem]">
        <div className="flex flex-col py-[5rem] text-regular text-center">
          <h1 className="text-border">Facilitators</h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex p-8">
            {/* Left Side: Form to Add or Update Facilitator */}
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
                <input
                  type="text"
                  placeholder="CSA Username"
                  value={csaUsername}
                  onChange={(e) => setCsaUsername(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="CSA Password"
                  value={csaPassword}
                  onChange={(e) => setCsaPassword(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <Button
                  variant="blue"
                  onClick={handleSubmit}
                  className="w-full"
                >
                  {isEditing ? "Update Student Advisor" : "Add Student Advisor"}
                </Button>
              </div>
            </div>

            {/* Right Side: List of Added Facilitators */}
            <div className="w-1/2 pl-4">
              <h3 className="text-xl font-semibold mb-4">
                Added Student Advisors
              </h3>
              <div className="space-y-4">
                {facilitators.length === 0 ? (
                  <p className="text-gray-600">
                    No student advisors added yet.
                  </p>
                ) : (
                  facilitators.map((facilitator) => (
                    <div
                      key={facilitator.id}
                      className="p-4 bg-white border border-gray-200 rounded shadow-md"
                    >
                      <h4 className="text-lg font-semibold">
                        {facilitator.name}
                      </h4>
                      <p>Username: {facilitator.csaUsername}</p>
                      <p>Contact: {facilitator.contact}</p>
                      <p>Gender: {facilitator.gender}</p>
                      <div className="flex justify-end mt-4 space-x-2">
                        <Button
                          variant="blue"
                          onClick={() => handleEdit(facilitator)}
                          className="w-full"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="red"
                          onClick={() => handleDelete(facilitator.id)}
                          className="w-full"
                        >
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
