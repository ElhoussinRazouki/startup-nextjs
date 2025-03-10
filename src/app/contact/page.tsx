import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Digital Innovation Agency",
  description: "Get in touch with our team for web, mobile, automation and AI solutions. We're here to help bring your ideas to life.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have a project in mind? We'd love to hear about it. Get in touch with us to discuss how we can help transform your ideas into reality."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
