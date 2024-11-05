import { useState } from "react";
import Button from "../../components/ui/button";

interface BookingFormProps {
  subjects: { Subject_ID: string; Name: string }[];
  facilitators: { Facilitator_ID: string; Name: string }[];
  selectedSubject: string | null;
  setSelectedSubject: (subject: string) => void;
  selectedFacilitator: string | null;
  setSelectedFacilitator: (facilitator: string) => void;
  onBookingSubmit: (bookingDetails: { subjectId: string; facilitatorId: string; timeSlot: string }) => void;
}

export default function BookingForm({
  subjects,
  facilitators,
  selectedSubject,
  setSelectedSubject,
  selectedFacilitator,
  setSelectedFacilitator,
  onBookingSubmit,
}: BookingFormProps) {
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubject || !selectedFacilitator || !timeSlot) {
      alert("Please fill in all fields.");
      return;
    }
    onBookingSubmit({ subjectId: selectedSubject, facilitatorId: selectedFacilitator, timeSlot });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem] p-4 border rounded-md">
      <label>
        Subject:
        <select
          value={selectedSubject || ""}
          onChange={(e) => setSelectedSubject(e.target.value)}
          required
          className="border p-2 rounded-md w-full"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {subjects?.map((subject) => (
            <option key={subject.Subject_ID} value={subject.Subject_ID}>
              {subject.Name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Facilitator:
        <select
          value={selectedFacilitator || ""}
          onChange={(e) => setSelectedFacilitator(e.target.value)}
          required
          className="border p-2 rounded-md w-full"
        >
          <option value="" disabled>
            Select a facilitator
          </option>
          {facilitators?.map((facilitator) => (
            <option key={facilitator.Facilitator_ID} value={facilitator.Facilitator_ID}>
              {facilitator.Name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Time Slot:
        <input
          type="datetime-local"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          required
          className="border p-2 rounded-md w-full"
        />
      </label>
      <div className="flex justify-center">
        <Button type="submit" variant="blue">
          Submit Booking
        </Button>
      </div>
    </form>
  );
}

