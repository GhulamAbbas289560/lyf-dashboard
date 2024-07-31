import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  BookText,
  Mail,
  Hospital,
  GraduationCap,
  Info,
  User,
  Clipboard,
  Calendar,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export default function PrescriptionPopup({ children, data }) {
  const Topbar = () => {
    return (
      <div className="flex gap-5 items-center bg-[#f6f6f6] rounded-lg shadow p-4 border">
        <Image src={"/doctor.png"} alt="Avatar" height={56} width={56} />
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Dr. Suzanne Holroyd</h1>
          <p className="text-black/50 text-sm">
            Pulmonologist General Physician, Diabetologist
          </p>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center text-black/60">
              <Mail size={18} />
              <p className="text-sm">suzanne@example.com</p>
            </div>
            <div className="flex gap-2 items-center text-black/60">
              <Hospital size={18} />
              <p className="text-sm">Lifeline General Hospital</p>
            </div>
            <div className="flex gap-2 items-center text-black/60">
              <GraduationCap size={18} />
              <p className="text-sm">
                MBBS, DTCD (T.B and Chest Diseases), MCPS (T.B and Chest
                Diseases), FCCP (USA)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const MedicalHistory = () => {
    return (
      <div className="bg-white p-3 rounded-md">
        <h1 className="font-semibold">Medical History</h1>
      </div>
    );
  };
  const Details = () => {
    return (
      <>
        {/*PATIENT DETAILS*/}
        <div className="flex flex-col gap-2">
          <div className="flex bg-white rounded-md shadow gap-4 items-center p-3">
            <Image src={"/avatar.png"} alt="avatar" height={50} width={50} />
            <div className="flex flex-col">
              <h1 className="font-semibold">Corey Culhane</h1>
              <p className="text-xs bg-blue-500/10 text-blue-700 rounded-md p-1 border-blue-500/40 border font-medium">
                ID : 385873265873
              </p>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-1 border bg-[#f0f9ff] border-[#0ba5ec] px-2 py-1 rounded-md">
                <h1 className="text-primary text-sm">Vitals</h1>
                <Info size={18} className="text-[#0ba5ec]" />
              </HoverCardTrigger>
              <HoverCardContent>
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-sm text-black/80">
                <User size={20} />
                <p>32 Years</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-black/80">
                <Clipboard size={20} />
                <p>87 kg</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-black/80">
                <Calendar size={20} />
                <p>2 August, 2024</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex gap-3 items-center">
              <p className="text-sm">Medical Condition</p>
              <p className="bg-red-500 text-white text-sm px-4 rounded-md">
                Severe
              </p>
            </div>
          </div>
        </div>
        {/*FORM*/}
        <form className="prescription-form py-4 flex flex-col gap-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="field-wrapper">
              <label htmlFor="prescription-title">Label/Title</label>
              <input
                type="text"
                id="prescription-title"
                name="prescription-title"
                placeholder="Prescription Label"
                required
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="disease">Disease</label>
              <input
                type="text"
                id="disease"
                name="disease"
                placeholder="Disease Details"
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="next-appointment">Next Appointment</label>
            </div>
          </div>
          <div className="field-wrapper">
            <label htmlFor="observation">Observation</label>
            <textarea
              id="observation"
              name="observation"
              placeholder="Observation/History"
              rows={4}
            ></textarea>
          </div>
          <div className="field-wrapper">
            <label htmlFor="advice">Advice</label>
            <textarea
              id="advice"
              name="advice"
              placeholder="Advice"
              rows={4}
            ></textarea>
          </div>
          <div className="field-wrapper">
            <label htmlFor="prescription">Prescription</label>
            <textarea
              id="prescription"
              name="prescription"
              placeholder="Prescription"
              rows={4}
            ></textarea>
          </div>
        </form>
      </>
    );
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="p-0 max-w-[80%]">
        <div className="flex flex-col pt-px">
          <div className="flex items-center gap-3 p-4 border-b">
            <BookText
              size={42}
              className="text-black/50 p-2 border rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">Prescription</h1>
              <p className="text-black/50 text-sm">
                Manage your patient prescriptions down below.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-[#f8fafc] p-4">
            <Topbar />
            <div className="gap-5 bg-[#f6f6f6] rounded-lg shadow p-4 border grid md:grid-cols-4 overflow-y-scroll h-[60vh] custom-scrollbar">
              <div className="md:col-span-1">
                <MedicalHistory />
              </div>
              <div className="md:col-span-3">
                <Details />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 flex justify-end gap-2">
            <DialogClose asChild>
              <button className="px-4 py-2 border-2 rounded-md font-semibold">
                Cancel
              </button>
            </DialogClose>
            <button className="px-4 py-2 rounded-md font-semibold bg-primary text-white">
              Save
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
