"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-full border border-neutral-200 px-4 py-4 pt-4 shadow-md">
        <div className="font-bold tracking-widest text-neutral-500">Logo</div>
        <div className="hidden items-center gap-4 text-sm font-medium text-neutral-500 md:flex">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="hover:text-neutral-900"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="transito delay-200 active:bg-neutral-950 md:hidden"
        >
          III
        </div>
      </div>
      {open && (
        <div className="mt-4 md:hidden flex-col items-center justify-center gap-6 border m-4 rounded-md border-neutral-200 p-4 shadow-md">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="flex w-full items-center justify-center rounded-md py-2 hover:bg-neutral-200 hover:text-neutral-900"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
