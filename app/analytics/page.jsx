import CardList from "./(components)/CardList";
import CoughChart from "./(components)/CoughChart";
import InhaleChart from "./(components)/InhaleChart";
import MedicalHistory from "./(components)/MedicalHistory";
import PatientDetails from "./(components)/PatientDetails";
import PatientSkeleton from "./(components)/PatientSkeleton";
import WaterChart from "./(components)/WaterChart";
export default function AnalyticsPage() {
  return (
    <div className="container py-10">
      <CardList />
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <PatientDetails />
        </div>
        <div className="md:col-span-2">
          <PatientSkeleton />
        </div>
        <div className="md:col-span-1">
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
