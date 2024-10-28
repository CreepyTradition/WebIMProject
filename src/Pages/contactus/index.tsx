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
          className="object-cover w-full h-[350px]"
          src="redbg.png"
          alt="redbg"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center h-full text-justify gap-[1.5rem]">
        <div className="flex flex-col py-[5rem] text-regular">
          <h1 className="text-border">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
              <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-1 lg:grid-rows-1 gap-[2rem]">

                <h3 className="text-blue">
                  Email:
                </h3>
                <a
                  href="mailto:csa@mcm.edu.ph"
                  rel="noopener"
                  target="_blank"
                  title="csa"
                  className="hover:scale-110 transition-all ease-linear"
                >
                  <img className="h-[110px]" src="email.png" alt="fbpic" />
                </a>
                <h3 className="text-blue">
                  Facebook:
                </h3>
                <a
                  href="https://www.facebook.com/profile.php?id=100070921430794"
                  rel="noopener"
                  target="_blank"
                  title="csa"
                  className="hover:scale-110 transition-all ease-linear"
                >
                  <img className="h-[100px]" src="FacebookOutline.webp" alt="fbpic" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}