"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const currentRoute = usePathname();

  return (
    <header className="flex justify-between items-center py-[15px] container mx-auto">
      <div className="logo text-[20px] font-[700]">
        <p className="">
          Design<span className="text-[#F55F1D]">AGENCY</span>
        </p>
      </div>
      <div className="flex gap-[30px] font-[16px]">
        <Link
          href="/home"
          className={`p-[10px] transition duration-100 ${
            currentRoute === "/home" ? "border-b-2 border-b-[#20B15A]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/team"
          className={`p-[10px] transition duration-100 ${
            currentRoute === "/team" ? "border-b-2 border-b-[#20B15A]" : ""
          }`}
        >
          Team
        </Link>
        <Link
          href="/services"
          className={`p-[10px] transition duration-100 ${
            currentRoute === "/services" ? "border-b-2 border-b-[#20B15A]" : ""
          }`}
        >
          Service
        </Link>
        <Link
          href="/projects"
          className={`p-[10px] transition duration-100 ${
            currentRoute === "/projects" ? "border-b-2 border-b-[#20B15A]" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/testimonial"
          className={`p-[10px] transition duration-100 ${
            currentRoute === "/testimonial"
              ? "border-b-2 border-b-[#20B15A]"
              : ""
          }`}
        >
          Testimonials
        </Link>
        <Link
          href="/home"
          className="p-[10px] rounded-[10px] border-[1px] border-[#20B15A] cursor-pointer"
        >
          Login
        </Link>
        <Link
          href="/home"
          className="p-[10px] bg-[#20B15A] rounded-[10px] text-white cursor-pointer"
        >
          Register
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
