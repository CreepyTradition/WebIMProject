import { useState } from 'react';
import { Icon } from '@iconify/react';

type Student = {
  id: number;
  name: string;
  avatar: string;
};

export default function StudentSchedulingPage() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const students: Student[] = [
    { id: 1, name: 'John', avatar: 'fluent-emoji:man-light' },
    { id: 2, name: 'Jane', avatar: 'fluent-emoji:woman-light' },
    { id: 3, name: 'Alex', avatar: 'emojione-v1:woman' },
    { id: 4, name: 'Sara', avatar: 'fxemoji:woman' },
  ];

  const slots = [
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
  ];

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
          <h1 className="text-border">Mentor</h1>
        </div>
      </div>
      <div className="bg-[#fff] border-t-2 border-[#e7e7e7] h-full sticky top-0">
        <section className="flex-col gap-[4rem] h-full">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex justify-center items-center gap-[1rem] md:gap-[2rem]">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-auto">
                    <h2 className="text-xl font-bold mb-4">Students</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-12 justify-items-center">
                      {students.map((student) => (
                        <button
                          key={student.id}
                          onClick={() => setSelectedStudent(student)}
                          className={`border-2 p-4 flex flex-col items-center ${
                            selectedStudent?.id === student.id ? 'border-blue-500' : 'border-gray-300'
                          }`}
                          style={{ borderRadius: '50%' }}
                        >
                          <Icon
                            icon={student.avatar}
                            className="w-20 h-20 text-gray-700 mb-2"
                          />
                          <span className="font-medium">{student.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-2/3">
                    <h2 className="text-xl font-bold mb-4">Choose a Time Slot</h2>
                    <div className="flex flex-col gap-4">
                      {slots.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-4 rounded-lg border transition-all ${
                            selectedSlot === slot ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedStudent && selectedSlot && (
                  <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">Selected Appointment</h3>
                    <p>Student: {selectedStudent.name}</p>
                    <p>Time Slot: {selectedSlot}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
