import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/cards";

export default function MentorshipPage() {
    useEffect(() => {
        document.title = "Mentorship Prograam - Mapúa Malayan Colleges Mindanao";
    }, []);

    const navigate = useNavigate();

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
                        Mentorship Program
                    </h1>
                </div>
            </div>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
                <section className="flex-col gap-[4rem] h-full">
                    <h1 className="text-regular">Users</h1>
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
                            <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-[2rem]">
                                <Card
                                    title="Student"
                                    icon="noto:man"
                                    iconSize="text-[10rem]"
                                    onClick={() => navigate('/mentee')}
                                >
                                    General Student Populace
                                </Card>
                                <Card
                                    title="Student Advisors"
                                    icon="streamline-emojis:man-student-2"
                                    iconSize="text-[8.5rem]"
                                    onClick={() => navigate('/mentor')}
                                >
                                    Students approved for adivising others
                                </Card>
                                <Card
                                    title="Facilitators"
                                    icon="fluent-emoji-flat:woman-teacher-medium"
                                    iconSize="text-[8.5rem]"
                                    onClick={() => navigate('/faculty')}
                                >
                                    CSA Facilitators
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
