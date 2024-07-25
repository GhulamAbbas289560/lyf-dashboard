import { ChevronDown, Plus } from "lucide-react";

export default function MedicalHistory() {
  const medicalHistoryData = [
    {
      disease: "Unresolved Cough",
      time: "9:30am - 10:00am",
      date: "September 9, 2013",
    },
    {
      disease: "Spirometry Discussion",
      time: "1:00pm - 1:30pm",
      date: "October 24, 2018",
    },
    {
      disease: "COPD Routine Check",
      time: "4:30pm - 5:00pm",
      date: "December 19, 2013",
    },
    {
      disease: "Unresolved Cough",
      time: "9:30am - 10:00am",
      date: "September 9, 2013",
    },
    {
      disease: "Spirometry Discussion",
      time: "1:00pm - 1:30pm",
      date: "October 24, 2018",
    },
    {
      disease: "COPD Routine Check",
      time: "4:30pm - 5:00pm",
      date: "December 19, 2013",
    },
    {
      disease: "Unresolved Cough",
      time: "9:30am - 10:00am",
      date: "September 9, 2013",
    },
    {
      disease: "Spirometry Discussion",
      time: "1:00pm - 1:30pm",
      date: "October 24, 2018",
    },
    {
      disease: "COPD Routine Check",
      time: "4:30pm - 5:00pm",
      date: "December 19, 2013",
    },
  ];
  return (
    <div className="bg-white flex flex-col gap-1 rounded-lg border-[1px] h-full">
      <div className="bg-gray-200/50 flex px-3 font-semibold py-3 border-b-[1px] gap-3 items-center">
        <h1 className="text-[15px]">Medical History</h1>
        <button className="bg-white p-1 px-2 flex items-center gap-1 rounded-lg border-[1px] text-xs">
          Sort By <ChevronDown size={20} />
        </button>
        <button className="bg-primary text-white p-1 px-2 flex items-center gap-1 rounded-lg border-[1px] text-xs">
          <Plus size={20} /> Add new
        </button>
      </div>
      <div className="flex flex-col px-6">
        {medicalHistoryData.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 justify-between items-center border-b-[1px] py-4"
          >
            <div>
              <h1 className="font-medium text-sm">{item.disease}</h1>
              <p className="text-sm text-slate-600">{item.date}</p>
            </div>
            <h1 className="text-xs bg-gray-100 font-bold px-3 py-px rounded-md">
              {item.time}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
