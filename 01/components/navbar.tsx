import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Founders", href: "/founders-guide" },
  { name: "guide", href: "/guide" },
  { name: "Pricing", href: "/pricing" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  return <div className="flex items-center justify-between py-4">
    <Link href={"/"}> <Image src={"/logo.svg"} width={100} height={100} alt="logo" /> </Link>
    <div className="flex items-center gap-4">
      {navLinks.map((link, index) => {
        return <Link key={index} href={link.href} 
          className="text-neutral-700 font-medium hover:text-neutral-500 transition duration-200"
        >{link.name}</Link>
      })}
      <button className="bg-blue-600 text-white font-semibold text-shadow-md tracking-wide shadow-lg px-4 py-2 rounded-lg" >Get started</button>
    </div> 
  </div>
}