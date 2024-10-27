import { useEffect } from "react";

export default function ContactUs() {
    useEffect(() => {
        document.title = "Contact Us - Mapúa Malayan Colleges Mindanao";
      }, []);

    return (
      <div>
      <div className="h-screen w-screen fixed -z-10 opacity-85">
        <img
          loading="lazy"
          className="object-cover w-[1700px] h-[350px]"
          src="red bg.png"
          alt="redbg"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center h-full text-justify gap-[1.5rem]">
        <div className="flex flex-col pt-[2rem] text-regular">
          <h1>
            <br></br><br></br><span className="text-border">Contact Us</span>
          </h1>
        </div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
              
            </div>

          </div>

        </section>
      </div>
    </div>
    );
  }