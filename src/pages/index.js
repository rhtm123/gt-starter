import Link from "next/link";

import { Hero1 } from "@/components/hero/Hero1";
import Services1 from "@/components/services/Services1";

import Whyus1 from "@/components/whyus/Whyus1";
import Contact1 from "@/components/contact/Contact1";
import Faq1 from "@/components/faq/FAQ1";

export default function Home() {
  return (
   
    <main>
      <Hero1 />

      <Services1 />

      <Whyus1 />

      <Contact1 />

      <Faq1 />

    </main>
  );
}
