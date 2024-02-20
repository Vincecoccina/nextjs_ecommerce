import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList/>
    </main>
  );
}
