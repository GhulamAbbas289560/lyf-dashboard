import CardList from "../(components)/CardList";
import CoughChart from "../(components)/CoughChart";
import InhaleChart from "../(components)/InhaleChart";
import MedicalHistory from "../(components)/MedicalHistory";
import PatientDetails from "../(components)/PatientDetails";
import PatientSkeleton from "../(components)/PatientSkeleton";
import WaterChart from "../(components)/WaterChart";
import PrescriptionPopup from "../(components)/PrescriptionPopup";
const fetchPatientData = async (patientId) => {
  const res = await fetch(
    `https://patient-dashboard-backend.onrender.com/api/patients`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  const patient = data.find((item) => item._id === patientId);
  return patient;
};

export default async function AnalyticsPage({ params }) {
  const patientId = params.patientId;
  const patientSingle = await fetchPatientData(patientId);
  return (
    <div className="container py-10">
      <CardList />
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <PatientDetails patient={patientSingle} />
        </div>
        <div className="md:col-span-2">
          <PatientSkeleton />
        </div>
        <div className="md:col-span-1">
          <PrescriptionPopup data={"as"}>
            <h1>as</h1>
          </PrescriptionPopup>
          <MedicalHistory />
        </div>
      </div>
      <h1 className="font-semibold py-2 border-b-[1px] text-xl">Insights</h1>
      <div className="grid md:grid-cols-3 gap-7">
        <InhaleChart />
        <CoughChart />
        <WaterChart />
      </div>
    </div>
  );
}
