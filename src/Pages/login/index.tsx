import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";

export default function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login - Mapúa Malayan Colleges Mindanao";
    }, []);

    return (
        <div>
            <div className="h-screen w-screen fixed -z-10 opacity-85">
                <img
                    loading="lazy"
                    className="object-cover w-full h-[350px]"
                    src="redbg.png"
                    alt="redbg"
                />
            </div>
            <div className="w-full flex flex-col justify-center items-center h-full text-justify gap-[1.5rem]">
                <div className="flex flex-col py-[5rem] text-regular">
                    <h1 className="text-border">
                        Login(WORK IN PROGRESS)
                    </h1>
                </div>
            </div>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
                <section className="flex-col gap-[4rem] h-full">
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <form className="flex flex-col gap-6 w-full max-w-md">
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="border p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <Button type="blue" onClick={() => navigate("/")}>
                                Login
                            </Button>
                        </form>
                    </div>

                </section>
            </div>
        </div>
    );
}