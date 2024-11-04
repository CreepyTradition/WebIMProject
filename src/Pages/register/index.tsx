import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import supabase from "../../config/supbaseClient";

export default function Register(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [program, setProgram] = useState<string>("");
    const [departments, setDepartments] = useState<any[]>([]);
    const [programs, setPrograms] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [fetchError, setFetchError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Register - Mapúa Malayan Colleges Mindanao";
        fetchDepartments();
    }, []);

    useEffect(() => {
        if (department) {
            updatePrograms(department);
        } else {
            setPrograms([]); // Clear programs when no department is selected
        }
    }, [department]);

    const fetchDepartments = () => {
        try {
            // Static departments
            const staticDepartments = [
                { Dept_ID: "1", Dept_Name: "ATYCB" },
                { Dept_ID: "2", Dept_Name: "CAS" },
                { Dept_ID: "3", Dept_Name: "CCIS" },
                { Dept_ID: "4", Dept_Name: "CEA" },
                { Dept_ID: "5", Dept_Name: "CHS" },
            ];
            setDepartments(staticDepartments);
        } catch (error) {
            setFetchError("Failed to fetch departments. Please try again later.");
        }
    };

    const updatePrograms = (deptId: string) => {
        try {
            const allPrograms: { [key: string]: { Program_ID: string; Program_Description: string }[] } = {
                "1": [
                    { Program_ID: "1", Program_Description: "BS Accountancy" },
                    { Program_ID: "2", Program_Description: "BS Entrepreneurship" },
                    { Program_ID: "3", Program_Description: "BS Management Accounting" },
                    { Program_ID: "4", Program_Description: "BS Tourism Management" },
                ],
                "2": [
                    { Program_ID: "5", Program_Description: "BA Communication Program" },
                    { Program_ID: "6", Program_Description: "BA Multimedia Arts Program" },
                ],
                "3": [
                    { Program_ID: "7", Program_Description: "BS Computer Science" },
                    { Program_ID: "8", Program_Description: "BS Entertainment and Multimedia Computing" },
                    { Program_ID: "9", Program_Description: "BS Information Systems" },
                ],
                "4": [
                    { Program_ID: "10", Program_Description: "BS Architecture" },
                    { Program_ID: "11", Program_Description: "BS Chemical Engineering" },
                    { Program_ID: "12", Program_Description: "BS Civil Engineering" },
                    { Program_ID: "13", Program_Description: "BS Computer Engineering" },
                    { Program_ID: "14", Program_Description: "BS Electrical Engineering" },
                    { Program_ID: "15", Program_Description: "BS Electronics Engineering" },
                    { Program_ID: "16", Program_Description: "BS Industrial Engineering" },
                    { Program_ID: "17", Program_Description: "BS Mechanical Engineering" },
                ],
                "5": [
                    { Program_ID: "18", Program_Description: "BS Biology" },
                    { Program_ID: "19", Program_Description: "BS Psychology" },
                ],
            };
            setPrograms(allPrograms[deptId] || []);
        } catch (error) {
            setFetchError("Failed to update programs. Please try again later.");
        }
    };

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        try {
            // First, sign up the user with Supabase
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error("Supabase error:", error.message);
                setError("Failed to register. Please try again later.");
                return;
            }

            // If sign-up is successful, proceed to insert user details in the 'Student' table
            if (data?.user) {
                const { error: insertError } = await supabase.from("Student").insert({
                    Student_FirstName: firstName,
                    Student_LastName: lastName,
                    Gender: gender === "male" ? 1 : 2, // Assuming 1 = Male, 2 = Female
                    Dept_ID: department,
                    Program_ID: program,
                    Date_Registered: new Date().toISOString(), // Store registration date
                    Student_Username: email,
                    Student_Password: password, // Keeping the password for database login
                });

                if (insertError) {
                    console.error("Error inserting student data:", insertError.message);
                    setError("Failed to register student details. Please try again later.");
                    return;
                }

                console.log("Registration successful:", data);
                navigate("/login"); // Navigate to the login page after successful registration
            }
        } catch (err: any) {
            console.error("Unexpected registration error:", err);
            setError("An unexpected error occurred. Please try again later.");
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
                    <h1 className="text-border">Register</h1>
                </div>
            </div>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
                <section className="flex-col gap-[4rem] h-full">
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <form
                            className="flex flex-col gap-6 w-full max-w-md"
                            onSubmit={handleRegister}
                        >
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Gender:</label>
                                <select
                                    name="gender"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Department:</label>
                                <select
                                    name="department"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept.Dept_ID} value={dept.Dept_ID}>
                                            {dept.Dept_Name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Program:</label>
                                <select
                                    name="program"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={program}
                                    onChange={(e) => setProgram(e.target.value)}
                                >
                                    <option value="">Select Program</option>
                                    {programs.map((prog) => (
                                        <option key={prog.Program_ID} value={prog.Program_ID}>
                                            {prog.Program_Description}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="border p-2 w-full rounded"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && (
                                <div className="text-red-600 font-medium text-center">
                                    {error}
                                </div>
                            )}
                            {fetchError && (
                                <div className="text-red-600 font-medium text-center">
                                    {fetchError}
                                </div>
                            )}
                            <Button variant="blue" type="submit">
                                Register
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
