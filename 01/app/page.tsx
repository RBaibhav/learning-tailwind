import Container from "@/components/container";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="absolute inset-0 mx-auto h-screen w-full max-w-6xl">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
        <div />
      </div>
      <Container className="">
        <Navbar />
        <Hero />
      </Container>

      <div className="h-px w-full bg-neutral-300" />
      <div className="mx-auto max-w-6xl p-4">
        <Image
          className="w-full rounded-2xl border-neutral-300 to-100% mask-b-from-20 object-cover object-top-left"
          src={"/image.png"}
          alt="hero image"
          width={1100}
          height={1000}
        ></Image>
      </div>
    </div>
  );
}
