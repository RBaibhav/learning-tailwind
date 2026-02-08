import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-4 py-2">
      <div className="mt-20 mb-10 rounded-2xl border border-stone-300 bg-zinc-200 px-4 py-0.5 text-center text-xs font-bold text-neutral-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elitex.
      </div>
      <div className="w-3xl text-center text-6xl font-semibold">
        Magically simplify accounting and taxes
      </div>
      <div className="mt-6 w-lg text-center text-neutral-500">
        Automated bookkeeping. Effortless tax filing. Financial clarity. Set up
        in 10 mins. Back to building by 1:23am.
      </div>
      <div className="flex items-center justify-center gap-4 py-4">
        <button className="rounded-lg bg-blue-500 px-4 py-2 font-semibold tracking-wide text-white shadow-lg text-shadow-md">
          Get started
        </button>
        <Link href={"/pricing"} className="font-semibold">
          Pricing -{">"}
        </Link>
      </div>
      <div className="py-2 pb-20 text-xs text-neutral-400">
        For US-based startups.
      </div>
    </div>
  );
}
