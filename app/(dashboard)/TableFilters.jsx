import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function TableFilters({ table, selectedRows }) {
  const handleSortingChange = (value) => {
    const column = table.getColumn("nameAndImage");
    const isSorted = column.getIsSorted();
    if (isSorted !== value) {
      column.toggleSorting(value === "asc" ? false : true);
    }
  };
  return (
    <div className="flex justify-between px-4">
      <div className="tabs"></div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 bg-black/5 rounded-md px-4 font-medium">
          <Search className="text-black/20" />
          <input
            className="outline-none bg-transparent"
            placeholder="Search"
            value={table.getColumn("nameAndImage")?.getFilterValue()}
            onChange={(event) =>
              table
                .getColumn("nameAndImage")
                ?.setFilterValue(event.target.value)
            }
          />
        </div>
        <Select>
          <SelectTrigger className="w-[180px] font-medium">
            <SelectValue placeholder="Show Only" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="attend">Attend</SelectItem>
            <SelectItem value="missed">Missed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
            <SelectItem value="no_appointment">No Appointment</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleSortingChange}>
          <SelectTrigger className="w-[150px] font-medium">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Desending</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[150px] font-medium">
            <SelectValue placeholder="Bulk Action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="attend">Mark Attend</SelectItem>
            <SelectItem value="missed">Mark Missed</SelectItem>
            <SelectItem value="cancelled">Mark Cancelled</SelectItem>
            <SelectItem value="delete">Delete Selected</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
