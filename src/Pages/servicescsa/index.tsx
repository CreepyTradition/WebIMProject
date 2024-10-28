import { useEffect, useState } from "react";

export default function Servicescsa() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  useEffect(() => {
    document.title = "Services - Mapúa Malayan Colleges Mindanao";
  }, []);

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                className="h-[200px] w-auto"
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
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex flex-col text-center justify-center items-center pt-[3rem] gap-[1rem]">
              <img
                className="h-auto w-full rounded-md cursor-pointer"
                src="462540898_1485017992890231_545990648056432205_n.png"
                alt="services"
                onClick={() => handleImageClick("462540898_1485017992890231_545990648056432205_n.png")}
              />
            </div>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 text-white text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <img
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-md border-4 border-blue"
              src={modalImageSrc}
              alt="Magnified view"
            />
          </div>
        </div>
      )}
    </div>
  );
}