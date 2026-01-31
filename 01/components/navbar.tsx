import Link from "next/link";

const navItems = [
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

export default function Navbar() {
  return <div className="flex items-center justify-between m-6">
    <div className="text-xl">Finta</div>
    <div className="flex items-center justify-center gap-4 font-medium text-xl text-neutral-600 ">
      {navItems.map((item, index) => {
        return <Link className="text-sm hover:text-black  transition-colors ease-out delay-200" key={index} href={item.href}> {item.title} </Link> 
      })}
      <button className="bg-blue-600 px-3 py-1.5 rounded-md text-white text-sm text-shadow-sm text-shadow-neutral-50">Get started</button>
    </div>
  </div>
}