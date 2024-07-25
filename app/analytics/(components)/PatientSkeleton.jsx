import Image from "next/image";

export default function PatientSkeleton() {
  return (
    <div className="bg-gray-200/50 flex flex-col items-center justify-center py-6 rounded-lg">
      <Image src={"/skeleton.png"} width={800} height={800} alt="Skeleton" />
    </div>
  );
}
