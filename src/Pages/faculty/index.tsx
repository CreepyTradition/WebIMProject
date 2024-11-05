import { useEffect } from "react";

export default function FacultyPage(){
    useEffect(() => {
        document.title = "Faculty - Mapúa Malayan Colleges Mindanao";
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
                        Facilitator
                    </h1>
                </div>
            </div>
            <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
        </section>
      </div>
        </div>
    );
}