import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import supabase from "../../config/supbaseClient";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - Mapúa Malayan Colleges Mindanao";
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        console.log("Login successful:", data);
        navigate("/mentee");
      }
    } catch (err: any) {
      console.error("Login error:", err.message);
      setError(err.message);
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
          <h1 className="text-border">Login</h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={handleLogin}>
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
              <Button variant="blue" type="submit">
                Login
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
