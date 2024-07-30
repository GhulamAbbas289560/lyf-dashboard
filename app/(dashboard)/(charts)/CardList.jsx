import {
  UsersRound,
  UserCheck,
  CalendarDays,
  ArrowUp,
  CalendarClock,
  Pen,
} from "lucide-react";
import PieChartCard from "./PieChartCard";
import AreaChartCard from "./AreaChartCard";
export default function CardList() {
  const allPatients = [
    { disease: "Asthma", value: 100, fill: "#f665a2" },
    { disease: "COPD", value: 100, fill: "#5388d8" },
    { disease: "TB", value: 140, fill: "#f4be37" },
  ];
  const activePatients = [
    { disease: "Asthma", value: 30, fill: "#f5840e" },
    { disease: "COPD", value: 90, fill: "#a155b9" },
    { disease: "TB", value: 50, fill: "#4caf50" },
  ];
  const registrationsData = [
    { month: "Jan", registrations: 0 },
    { month: "as", registrations: 10 },
    { month: "Jasasan", registrations: 8 },
    { month: "asa", registrations: 15 },
    { month: "as", registrations: 12 },
    { month: "as", registrations: 17 },
    { month: "as", registrations: 15 },
    { month: "as", registrations: 20 },
    { month: "as", registrations: 18 },
    { month: "as", registrations: 24 },
  ];
  const appointmentsData = [
    { month: "Jan", registrations: 10 },
    { month: "as", registrations: 12 },
    { month: "Jasasan", registrations: 8 },
    { month: "asa", registrations: 12 },
    { month: "as", registrations: 8 },
    { month: "as", registrations: 10 },
    { month: "as", registrations: 7 },
    { month: "as", registrations: 5 },
    { month: "as", registrations: 3 },
    { month: "as", registrations: 0 },
  ];
  return (
    <>
      <PieChartCard
        chartData={allPatients}
        backgroundColor={"#f1f4eb"}
        chartValue={"value"}
        chartSelector={"disease"}
        heading={"All Patients"}
        subheading={"400"}
        icon={
          <UsersRound size={40} className="border bg-white p-1 rounded-md" />
        }
        showChart={true}
      />
      <PieChartCard
        chartData={activePatients}
        backgroundColor={"#fbeae4"}
        chartValue={"value"}
        chartSelector={"disease"}
        heading={"Active Patients"}
        subheading={"170"}
        icon={
          <UserCheck size={40} className="border bg-white p-1 rounded-md" />
        }
        showChart={true}
      />
      <AreaChartCard
        heading={"New Registrations"}
        subheading={"62"}
        backgroundColor={"#e0faff"}
        icon={
          <CalendarDays size={40} className="border bg-white p-1 rounded-md" />
        }
        chartData={registrationsData}
        chartColor="green"
        iconFooter={
          <div className="self-end">
            <div className="flex text-green-600">
              <ArrowUp size={23} />
              <p className="font-semibold">10%</p>
            </div>
            <p className="text-sm">Last 7 days</p>
          </div>
        }
      />
      <AreaChartCard
        heading={"Previous Appointments"}
        subheading={"13"}
        backgroundColor={"#e7ecf8"}
        icon={
          <CalendarClock size={40} className="border bg-white p-1 rounded-md" />
        }
        chartData={appointmentsData}
        chartColor="red"
        iconFooter={
          <div className="self-end">
            <div className="flex text-red-600">
              <ArrowUp size={23} />
              <p className="font-semibold">10%</p>
            </div>
            <p className="text-sm">Last 7 days</p>
          </div>
        }
      />
      <PieChartCard
        chartData={activePatients}
        backgroundColor={"#f8e4fb"}
        chartValue={"value"}
        chartSelector={"disease"}
        heading={"Appointments Today"}
        subheading={"12"}
        icon={
          <CalendarDays size={40} className="border bg-white p-1 rounded-md" />
        }
      />
      <PieChartCard
        chartData={activePatients}
        backgroundColor={"#fff3e0"}
        chartValue={"value"}
        chartSelector={"disease"}
        heading={"Upcoming Appointments"}
        subheading={"05"}
        icon={
          <CalendarDays size={40} className="border bg-white p-1 rounded-md" />
        }
      />
    </>
  );
}
