import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "../../components/ContactUs";
import ContactUsKSA from "../../components/ContactUsKSA";
import BigTitle from "../../components/ProjectCard/BigTitle";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  //test
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mx-auto">Egypt</h2>
      </div>
      <ContactUs />
      <div className="text-center">
        <h2 className="my-6 text-3xl font-bold sm:text-4xl mx-auto">
          Saudi Arabia
        </h2>
      </div>
      <ContactUsKSA />
      <ContactForm />
    </>
  );
};

export default Contact;
