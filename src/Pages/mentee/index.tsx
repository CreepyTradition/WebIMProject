import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // If using React Router
import Card from "../../components/ui/cards";

export default function MenteePage() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Student - Mapúa Malayan Colleges Mindanao";
    }, []);

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
                    <h1 className="text-border">
                        Student
                    </h1>
                </div>
            </div>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
                <section className="flex-col gap-[4rem] h-full">
                    <h1 className="text-regular">Mentors</h1>
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
                            <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-[2rem]">
                                <Card
                                    title="John Perkin Abrantes"
                                    icon="iconoir:developer"
                                    iconSize="text-[10rem]"
                                    onClick={() => navigate('/booking')}
                                >
                                    Main Developer
                                </Card>
                                <Card
                                    title="Josh Marco Goc-ong"
                                    icon="fluent-mdl2:party-leader"
                                    iconSize="text-[10rem]"
                                    onClick={() => navigate('/booking')}
                                >
                                    Team Leader
                                </Card>
                                <Card
                                    title="Karyll Grace Bontuyan"
                                    icon="oui:documentation"
                                    iconSize="text-[10rem]"
                                    onClick={() => navigate('/booking')}
                                >
                                    Documentation
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
