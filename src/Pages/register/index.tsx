import { useEffect } from "react";

export default function Register() {

    useEffect(() => {
        document.title = "Register - Mapúa Malayan Colleges Mindanao";
    }, []);

    return (
        <div>
            <div className="h-screen w-screen fixed -z-10 opacity-85">
                <img
                    loading="lazy"
                    className="object-cover w-[1700px] h-[350px]"
                    src="redbg.png"
                    alt="redbg"
                />
            </div>
            <div className="w-full flex flex-col justify-center items-center h-full text-justify gap-[1.5rem]">
                <div className="flex flex-col py-[5rem] text-regular">
                    <h1 className="text-border">
                        Register(WORK IN PROGRESS)
                    </h1>
                </div>
            </div>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
                <section className="flex-col gap-[4rem] h-full">
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
                            <form className="flex flex-col gap-4">
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        className="border p-2"
                                        required
                                    />
                                </label>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"

                                        className="border p-2"
                                        required
                                    />
                                </label>
                                <label>
                                    Password:
                                    <input
                                        type="password"
                                        name="password"


                                        className="border p-2"
                                        required
                                    />
                                </label>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Register
                                </button>
                            </form>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
}