"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

import DataTable from "@/components/ui/DataTable";
import {
  columns as GeneralInfoColumns,
  data as GeneralInfoData,
} from "./(dashboard)/GeneralInfoTableDefs";
export default function Home() {
  return (
    <div className="container rounded-md border">
      <div className="p-4 border-b">
        <h1 className="font-bold text-xl">Patients</h1>
        <p className="text-black/50 font-medium">
          Patient Details & Activity Log
        </p>
      </div>
      <div className="">
        <DataTable data={GeneralInfoData} columns={GeneralInfoColumns} />
      </div>
    </div>
  );
}
