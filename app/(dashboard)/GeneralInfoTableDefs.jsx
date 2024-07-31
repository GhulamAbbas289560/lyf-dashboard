"use client";
import Link from "next/link";
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
export const data = [
  {
    _id: "66a9ec9d230b6153322dd4e4",
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
    _id: "66a9ec9d230b6153322dd4e5",
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
    _id: "66a9ec9d230b6153322dd4e3",
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
    _id: "66a9ec9d230b6153322dd4e6",
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
    _id: "66a9ec9d230b6153322dd4e7",
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
    _id: "66a9ec9d230b6153322dd4ea",
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
    _id: "66a9ec9d230b6153322dd4eb",
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
    _id: "66a9ec9d230b6153322dd4ec",
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
    _id: "66a9ec9d230b6153322dd4ee",
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
    _id: "66a9ec9d230b6153322dd4ed",
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
    _id: "66a9ec9d230b6153322dd4ef",
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
    _id: "66a9ec9d230b6153322dd4f0",
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
    _id: "66a9ec9d230b6153322dd4f1",
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
    _id: "66a9ec9d230b6153322dd4f2",
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
    _id: "66a9ec9d230b6153322dd4f3",
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
    _id: "66a9ec9d230b6153322dd4f4",
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
    _id: "66a9ec9d230b6153322dd4f6",
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
    _id: "66a9ec9d230b6153322dd4f5",
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
    _id: "66a9ec9d230b6153322dd4f7",
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
    _id: "66a9ec9d230b6153322dd4f8",
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
    _id: "66a9ec9d230b6153322dd4f9",
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
    _id: "66a9ec9d230b6153322dd4fa",
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
    _id: "66a9ec9d230b6153322dd4fb",
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
    _id: "66a9ec9d230b6153322dd4e9",
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
    _id: "66a9ec9d230b6153322dd4e8",
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { name, userImage, _id } = row.original;
      return (
        <Link href={`/analytics/${_id}`}>
          <div className="flex gap-2 items-center font-medium">
            <Image src={userImage} height={32} width={32} alt="Image" />
            <h1>{name}</h1>
          </div>
        </Link>
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
