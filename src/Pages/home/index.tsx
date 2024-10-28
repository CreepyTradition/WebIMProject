import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import { useEffect } from "react";

export default function HomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home - Mapúa Malayan Colleges Mindanao";
    }, []);

    return (
        <div>
            <div className="h-screen w-screen fixed -z-10 opacity-35">
                <img
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src="BACKGROUND.png"
                    alt="bg"
                />
            </div>
            <section className="w-full h-screen flex justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center h-full gap-[1.5rem]">
                    <div className="flex flex-col pt-[2rem] text-regular text-center">
                        <h3 className="font-normal">
                            <img
                                loading="lazy"
                                src="banner.png"
                                className="h-[120px] w-auto mx-auto"
                                alt="mapualogo"
                            />
                        </h3>
                        <h1>
                            Center <span className="text-red">for</span> <br />
                            <span className="text-blue"> Student</span> Advising
                        </h1>
                    </div>
                    <div className="flex gap-[1rem]">
                        <a onClick={() => navigate("/register")}>
                            <Button type="red">Register</Button>
                        </a>
                        <Button type="blue" onClick={() => navigate("/login")}>
                            Login
                        </Button>
                    </div>
                </div>
            </section>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
                <section className="flex-col gap-[4rem] h-full">
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
                            {/* <img
                                loading="lazy"
                                src="MMCMmain.png"
                                className="h-[160px] w-auto"
                                alt="mainlogo"
                            /> */}
                            <img
                                loading="lazy"
                                src="logo1.png"
                                className="h-[200px] w-auto"
                                alt="mainlogo"
                            />
                        </div>
                        <div className="flex flex-col max-w-[768px] justify-center">
                            <h3 className="text-regular font-semibold text-center">
                                Center for Student Advising
                            </h3>
                            <p className="text-justify">
                                The Center for Student Advising (CSA) aims to provide
                                an integrated advising experience for all students in Mapúa Malayan Colleges Mindanao.
                                The center offers general academic and non-academic advising and promotes academic
                                success programs to achieve academic success.{" "}
                                <span
                                    className="text-red cursor-pointer"
                                    onClick={() => navigate("/about")}
                                >
                                    {" "}
                                    Read more...
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem]">
                            <img
                                loading="lazy"
                                src="462640253_1369432297182896_2726681043396341596_n.jpg"
                                className="h-[200px] w-auto"
                                alt="oss"
                            />
                            <div className="flex flex-col justify-center items-start text-left">
                                <h3>Academic Exellence & Support</h3>
                                <p>Providing integrated advising, academic support,
                                    and student success<br /> programs to empower students
                                    at Malayan Colleges Mindanao.</p>
                                <Button
                                    className="!px-[6rem] mt-4"
                                    type="regular"
                                    onClick={() => navigate("/servicescsa")}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}