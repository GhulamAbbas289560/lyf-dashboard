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
  const handleShowOnly = (value) => {
    const statusColumn = table.getColumn("status");
    if (statusColumn) {
      statusColumn.setFilterValue(value);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between px-4">
      <div className="tabs"></div>
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2 bg-gray-200/50 rounded-md px-4 py-3 md:py-0 font-medium">
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
        <Select onValueChange={handleShowOnly}>
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
            <SelectItem className="text-red-700 font-semibold" value="delete">
              Delete Selected
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
