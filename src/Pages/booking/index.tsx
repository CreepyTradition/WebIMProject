import { useState } from "react";
import BookingForm from "../../components/ui/bookingForm";

export default function BookingPage() {
  const subjects = [
    { Subject_ID: "1", Name: "Mathematics" },
    { Subject_ID: "2", Name: "Science" }
  ];

  const facilitators = [
    { Facilitator_ID: "1", Name: "John Doe" },
    { Facilitator_ID: "2", Name: "Jane Smith" }
  ];

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedFacilitator, setSelectedFacilitator] = useState<string | null>(null);

  const handleBookingSubmit = (bookingDetails: { subjectId: string; facilitatorId: string; timeSlot: string }) => {
    alert(`Booking submitted for Subject ID: ${bookingDetails.subjectId}, Facilitator ID: ${bookingDetails.facilitatorId}, Time Slot: ${bookingDetails.timeSlot}`);
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
        <div className="flex flex-col py-[5rem] text-regular text-center">
          <h1 className="text-border">
            Booking
          </h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="w-full max-w-3xl mt-8">
            <BookingForm
              subjects={subjects}
              facilitators={facilitators}
              selectedSubject={selectedSubject}
              setSelectedSubject={setSelectedSubject}
              selectedFacilitator={selectedFacilitator}
              setSelectedFacilitator={setSelectedFacilitator}
              onBookingSubmit={handleBookingSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
