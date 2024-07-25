import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-slate-900 flex h-screen w-screen items-center justify-center">
      <Link className="bg-white p-2 px-4 rounded-md" href="/analytics">
        Go To Analytics
      </Link>
    </div>
  );
}
