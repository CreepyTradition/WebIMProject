import { useEffect } from "react";

export default function Servicescsa() {

  useEffect(() => {
    document.title = "Services - Mapúa Malayan Colleges Mindanao";
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
            Services
          </h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
              <img
                loading="lazy"
                src="logo.png"
                className="h-[250px] w-auto"
                alt="mainlogo"
              />
            </div>
            <div>
              <p className="text-justify">This center provides an integrated
                advising experience for all students
                in Malayan Colleges Mindanao. CSA
                provides general academic advising
                and Academic Success Programs, in
                partnership with academic
                departments, the Center for
                Guidance and Counseling, the Center
                for Scholarship and Financial
                Assistance, and the Center for Career
                and Placement. The Center works
                collaboratively with the faculty and
                other offices and resources to help
                create student success.</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
          <img
            className="h-[345px] w-auto rounded-md"
            src="462540898_1485017992890231_545990648056432205_n.png"
            alt="services"
          />
        </div>
        </section>
      </div>
    </div>
  );
}