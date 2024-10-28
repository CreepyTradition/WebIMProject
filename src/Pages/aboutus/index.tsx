import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About - Mapúa Malayan Colleges Mindanao";
  }, []);
  return (
    <div className="relative">
      <img
        className="opacity-20 w-auto h-1/2 absolute top-0 object-cover"
        src="aboutbanner.png"
        alt="aboutbanner"
      />
      <section className="flex-col gap-[5rem] h-auto sticky top-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem]">
          <img
            loading="lazy"
            src="logo.png"
            className="h-[250px] w-auto"
            alt="mainlogo"
          />
          <div className="max-w-[768px] text-justify md:text-start">
            <h3 className="text-regular font-semibold">
              Center for Student Advising
            </h3>
            <p>
              The Center for Student Advising (CSA) aims to provide
              an integrated advising experience for all students in Mapúa Malayan Colleges Mindanao.
              The center offers general academic and non-academic advising and promotes academic
              success programs to achieve academic success.
            </p>
          </div>
        </div>
      </section>
      <div className="sticky top-0 bg-[#fff]">
        <section className="h-auto justify-center flex-col gap-[1.5rem]">
          <h2 className="text-regular font-semibold">Meet the Team</h2>
          <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
            <img
              className="h-[345px] w-auto rounded-md"
              src="vpforacadaffairs.png"
              alt="vpaa"
            />
            <div>
              <p className="text-regular">
                Engr. Alejandro <em>"Jun"</em> H. Ballado, Jr.
              </p>
              <p className="text-blue uppercase font-medium">Vice President For Acdemic Affairs</p>
            </div>
            <div>
              <p className="text-regular">
                Liezel S. Lopez
              </p>
              <p className="text-blue uppercase font-medium">OSS Director</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1rem] md:gap-[1.5rem]">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Kyna Marie O. Heje</p>
              <p className="text-blue uppercase font-medium">OSS Assistant</p>
            </div>
          <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Eira Flores</p>
              <p className="text-blue uppercase font-medium">OSS Assistant - Helpdesk</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Charlymer Dingal</p>
              <p className="text-blue uppercase font-medium">
                CSAD Coordinator
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">For Hiring |2024</p>
              <p className="text-blue uppercase font-medium">CSA and GAD Coordinator</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Ramon Quiñagon</p>
              <p className="text-blue uppercase font-medium">CSFA Head</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">For Hiring|2024</p>
              <p className="text-blue uppercase font-medium">Help Center</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Samantha Grace Espino<br></br>
                Kenneth R. Alquino<br></br>
                Nissi John F. Salende</p>
              <p className="text-blue uppercase font-medium">CSA Facilitators</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Renzo James Sandoval<br></br>
                Justin Christian Bije<br></br>
                Bai Nysaa Mae Mondia</p>
              <p className="text-blue uppercase font-medium">CGC Facilitators</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Chloe Jan Cuaton<br></br>
                Bianca Mae Peligrino</p>
              <p className="text-blue uppercase font-medium">Psychometricians</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">** For Hiring</p>
              <p className="text-blue uppercase font-medium">CGC Coordinator</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">*Wichester Lemen</p>
              <p className="text-blue uppercase font-medium">Coach</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">Irish Mae O. Aberilla</p>
              <p className="text-blue uppercase font-medium">Sports and Athletics Coordinator</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-regular">** SA as needed</p>
              <p className="text-blue uppercase font-medium">CSFA Assistant</p>
            </div>
          </div>
        </section>
        <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
            <img
              className="h-[500px] w-auto rounded-md"
              src="462558439_405217282656092_1570684887792283146_n.png"
              alt="orgchart"
            />
        </div>
        <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
            <img
              className="h-[500px] w-auto rounded-md"
              src="462541086_549926151019250_6570040595572882274_n.jpg"
              alt="orgchart"
            />
        </div>
        <div className="bg-[#f9f9f9]">
          <section className="h-auto">
            <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-start justify-center gap-[2rem] max-w-[968px]">
              <div className="flex flex-col justify-between items-center h-full gap-[2rem]">
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                  <h3 className="text-regular font-semibold">Vision</h3>
                  <p>
                    Mapúa Malayan Colleges Mindanao stands among the world's
                    leading educational institutions.
                  </p>
                </div>
                <div className="flex flex-col w-full h-full justify-start items-center gap-[1rem]">
                  <h3 className="text-regular font-semibold">Motto</h3>
                  <p>Excellence and Relevance</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-start items-center text-justify gap-[1rem]">
                <h3 className="text-regular font-semibold">Mission</h3>
                <p>
                  1. The institute shall provide a learning environment in order
                  for its students to acquire the attributes that will make them
                  globally competitive & locally in-demand. <br />
                  <br />
                  2. The institute shall engage in cutting edge and economically
                  viable research, development and innovation that is relevant
                  locally and beyond. <br />
                  <br />
                  3. The institute shall provide state-of-the-art solutions to
                  problems of industries and communities locally and beyond.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
