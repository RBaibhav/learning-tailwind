import { Container } from "@/components/container";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-100 to-white">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}
