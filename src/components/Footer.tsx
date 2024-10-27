export default function Footer() {
    return (
        <footer className="text-[#fff]">
        <div className="flex flex-col justify-center items-center bg-[#737373] w-full h-auto">
          <div className="flex justify-between items-center w-full max-w-[1080px] mx-auto p-[1rem] h-[260px]">
            <div className="flex flex-col gap-[1rem] select-text">
              <p className="text-[0.8rem]">Office No: +63 917 583 9615<br/>Room 511, MMCM Acad Bldg.</p>
              <div className="bg-[#fff] h-[1px]" />
              <p className="text-[0.8rem]">
                Gen. Douglas MacArthur Hwy <br /> Matina, Davao City 8000 <br />
                Davao del Sur, Philippines
              </p>
            </div>
            <a
              href="https://mcm.edu.ph/"
              rel="noopener"
              target="_blank"
              title="mcm"
              className="hover:scale-110 transition-all ease-linear"
            >
              <img className="h-[150px]" src="MMCMLogo.png" alt="mmcm" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000000] text-center">
          <div className="flex flex-col justify-center items max-w-[1280px] mx-auto p-[0.5rem]">
            <p className="text-[0.8rem]">
              Copyright 2024 | Mapúa Malayan Colleges Mindanao | All Rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
    );
}