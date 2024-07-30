import DataTable from "@/components/ui/DataTable";
import CardList from "./(dashboard)/(charts)/CardList";
import {
  columns as GeneralInfoColumns,
  data as GeneralInfoData,
} from "./(dashboard)/GeneralInfoTableDefs";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col py-4">
          <h1 className="font-semibold text-xl">Mike Jani</h1>
          <p className="text-black/50 font-medium">
            Hi Doctor, take a look at your patients activities
          </p>
          <div className="custom-scrollbar flex *:min-w-80 gap-4 overflow-auto py-4">
            <CardList />
          </div>
        </div>
      </div>
      <div className="container rounded-md border">
        <div className="p-4 border-b">
          <h1 className="font-bold text-xl">Patients</h1>
          <p className="text-black/50 font-medium">
            Patient Details & Activity Log
          </p>
        </div>
        <div>
          <DataTable data={GeneralInfoData} columns={GeneralInfoColumns} />
        </div>
      </div>
    </>
  );
}
