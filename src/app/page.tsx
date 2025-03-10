import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Innovation Agency | Web, Mobile, Automation & AI Solutions",
  description:
    "Transform your ideas into digital reality with our expert development services in web, mobile, automation, and AI integration.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <Projects />
    </>
  );
}
