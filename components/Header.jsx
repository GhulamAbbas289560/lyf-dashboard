"use client";
import { House, ChartPie } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const navItems = [
    {
      label: "Dashboard",
      href: "/",
      icon: House,
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: ChartPie,
    },
  ];
  const pathname = usePathname();
  return (
    <div className="flex justify-between bg-primary px-6 py-3">
      <div className="">
        <Link href="/">
          <Image src={"/logo.svg"} alt="LYF Logo" width={44} height={44} />
        </Link>
      </div>
      <div className="flex gap-2 items-center font-light">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex  gap-2 text-white py-2 px-4 rounded-md hover:bg-black/20 duration-300 ${
              pathname === item.href ? "bg-black/20 font-medium" : ""
            }`}
          >
            {item.icon && <item.icon size={24} />}
            {item.label}
          </Link>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}
