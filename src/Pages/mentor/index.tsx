import { useEffect } from "react";

export default function MentorPage(){
    useEffect(() => {
        document.title = "Mentor - Mapúa Malayan Colleges Mindanao";
      }, []);
    
    return(
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
                <div className="flex flex-col py-[5rem] text-regular">
                    <h1 className="text-border">
                        Mentor
                    </h1>
                </div>
            </div>
        </div>
    );
}