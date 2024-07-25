import Image from "next/image";
const TextBox = ({ heading, text }) => {
  return (
    <div className="flex flex-col gap-1 bg-white items-center justify-center rounded-md shadow-sm">
      <h1 className="text-primary font-semibold">{heading}</h1>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
};
export default function PatientDetails() {
  const patientData = [
    { heading: "Email", value: "corey18@gmail.com" },
    { heading: "Gender", value: "Male" },
    { heading: "Age", value: "27" },
    { heading: "Registered Since", value: "Mar 3, 2023" },
    { heading: "Medical Condition", value: "Severe" },
  ];
  return (
    <div className="bg-white flex flex-col gap-3 py-5 px-5 rounded-lg border-[1px] h-full">
      <div className="flex gap-2 items-center">
        <Image
          src={"/avatar.png"}
          height={50}
          width={50}
          alt="Profile Picture"
        />
        <h1 className="font-semibold">Corey Culhane</h1>
        <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded-md px-2 font-semibold">
          ID : 1829876935
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-gray-100/60 p-4 px-6 rounded-md">
        <h1 className="self-center">Appointments</h1>
        <div className="grid md:grid-cols-2 gap-px">
          <TextBox heading={"25"} text={"Past"} />
          <TextBox heading={"2 Aug, 2024"} text={"Next"} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {patientData.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <h1 className="text-gray-500 text-sm">{item.heading}</h1>
            <p
              className={`font-medium text-sm  ${
                item.value === "Severe"
                  ? "text-white bg-red-500 px-2 rounded-md"
                  : ""
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
