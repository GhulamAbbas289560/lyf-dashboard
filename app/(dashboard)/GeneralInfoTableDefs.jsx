"use client";
import moment from "moment";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusBadge, DiseaseBadge } from "./TableBadges";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const rawdata = [
  {
    _id: "66a4ce45ff59e6ed606d4563",
    name: "Demi Wilkinson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450703/health_dashboard/icons/avatars/avatar3_z7nquu.svg",
    diseases: ["sugar", "breating_problem"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4564",
    name: "Candice Wu",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450719/health_dashboard/icons/avatars/avatar4_w0po48.svg",
    diseases: ["sugar", "bp", "cancer"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4562",
    name: "Lana Steiner",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450688/health_dashboard/icons/avatars/avatar1_invmzj.svg",
    diseases: ["bp"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4561",
    name: "Phoenix Baker",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450688/health_dashboard/icons/avatars/avatar1_invmzj.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "no_appointment",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4560",
    name: "Olivia Rhye",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450686/health_dashboard/icons/avatars/avatar10_i3bjlz.svg",
    diseases: ["bp", "sugar"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4568",
    name: "Andi Lane",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450687/health_dashboard/icons/avatars/avatar8_z2q96u.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4567",
    name: "Drew Cano",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450712/health_dashboard/icons/avatars/avatar7_bobbrf.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4569",
    name: "Kate Morrison",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450707/health_dashboard/icons/avatars/avatar9_xoynn3.svg",
    diseases: ["breathing_problem", "bp", "sugar", "cancer"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d456a",
    name: "John Doe",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar1_vydzy8.svg",
    diseases: ["asthma"],
    previousAppointment: "2024-07-10T12:00:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-11T14:30:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d456b",
    name: "Jane Smith",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar2_cu9zb6.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-11T08:15:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-12T09:45:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d456c",
    name: "Michael Johnson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar3_ks0hcj.svg",
    diseases: ["hypertension"],
    previousAppointment: "2024-07-12T11:00:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-13T15:00:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d456e",
    name: "William Brown",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar5_wxsgxy.svg",
    diseases: ["asthma", "diabetes"],
    previousAppointment: "2024-07-14T09:30:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-15T13:30:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d456d",
    name: "Emily Davis",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar4_t0j6kv.svg",
    diseases: ["arthritis"],
    previousAppointment: "2024-07-13T10:00:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-14T16:00:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d456f",
    name: "Sophia Wilson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar6_ur9snv.svg",
    diseases: ["hypertension", "arthritis"],
    previousAppointment: "2024-07-15T08:00:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-16T14:00:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4570",
    name: "James Martinez",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar7_yx9iou.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-16T11:30:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-17T15:45:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4571",
    name: "Isabella Anderson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar8_lzjei5.svg",
    diseases: ["asthma", "arthritis"],
    previousAppointment: "2024-07-17T10:15:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-18T16:15:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4573",
    name: "Mia Lewis",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar10_jwgn0i.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-19T08:30:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-20T13:00:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4572",
    name: "David Clark",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar9_zkeo8n.svg",
    diseases: ["hypertension"],
    previousAppointment: "2024-07-18T09:00:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-19T14:45:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4574",
    name: "Benjamin Robinson",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar11_gxze7k.svg",
    diseases: ["arthritis"],
    previousAppointment: "2024-07-20T07:45:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-21T12:15:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4575",
    name: "Amelia Walker",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar12_zkx5o4.svg",
    diseases: ["asthma", "hypertension"],
    previousAppointment: "2024-07-21T10:45:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-22T15:30:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4576",
    name: "Lucas Harris",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar13_eaiuvw.svg",
    diseases: ["diabetes"],
    previousAppointment: "2024-07-22T09:15:00.000Z",
    status: "attend",
    nextAppointment: "2024-07-23T14:15:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4578",
    name: "Jack Allen",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar15_xan8lx.svg",
    diseases: ["asthma"],
    previousAppointment: "2024-07-24T07:30:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-25T11:45:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4577",
    name: "Charlotte Young",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450708/health_dashboard/icons/avatars/avatar14_fdxzgy.svg",
    diseases: ["arthritis"],
    previousAppointment: "2024-07-23T08:45:00.000Z",
    status: "missed",
    nextAppointment: "2024-07-24T13:45:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4566",
    name: "Orlando Diggs",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450735/health_dashboard/icons/avatars/avatar5_xqnr0f.svg",
    diseases: ["bp"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "cancelled",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
  {
    _id: "66a4ce45ff59e6ed606d4565",
    name: "Natali Craig",
    userImage:
      "https://res.cloudinary.com/danbfkvrk/image/upload/v1720450735/health_dashboard/icons/avatars/avatar5_xqnr0f.svg",
    diseases: ["breathing_problem"],
    previousAppointment: "2024-07-09T16:24:00.000Z",
    status: "no_appointment",
    nextAppointment: "2024-07-09T16:24:00.000Z",
    __v: 0,
  },
];
export const data = rawdata.map((item) => ({
  ...item,
  nameAndImage: `${item.name},${item.userImage}`,
}));
const HandleTrashClick = (rowData) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2
          size={40}
          className="text-red-700 hover:bg-red-500/10 p-2 rounded-full duration-500 cursor-pointer"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <Trash2
            size={45}
            className="text-red-500 bg-red-500/10 p-2 rounded-full"
          />
          <AlertDialogTitle>Delete Patient?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete the patient named
            <span className="text-red-700 font-medium">
              {" " + rowData.rowData.original.name} ?
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-700 hover:bg-red-800">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="rounded-[5px] border data-[state=checked]:bg-primary"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="rounded-[5px] border data-[state=checked]:bg-primary"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "nameAndImage",
    header: "Name",
    cell: ({ row }) => {
      const [name, image] = row.getValue("nameAndImage").split(",");
      return (
        <div className="flex gap-2 items-center font-medium">
          <Image src={image} height={32} width={32} alt="Image" />
          <h1>{name}</h1>
        </div>
      );
    },
  },

  {
    accessorKey: "diseases",
    header: "Diseases",
    cell: ({ row }) => {
      const temp = row.getValue("diseases");
      return <DiseaseBadge input={temp} />;
    },
  },
  {
    accessorKey: "previousAppointment",
    header: "Previous Appointment",
    cell: ({ row }) => {
      return moment(row.getValue("previousAppointment")).format(
        "MMMM DD, YYYY"
      );
    },
  },
  {
    accessorKey: "nextAppointment",
    header: "Next Appointment",
    cell: ({ row }) =>
      moment(row.getValue("previousAppointment")).format("MMMM DD, YYYY"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge input={row.getValue("status")} />,
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => (
      <>
        <HandleTrashClick rowData={row} />
      </>
    ),
  },
];
