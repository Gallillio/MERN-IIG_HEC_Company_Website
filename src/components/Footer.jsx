import React from "react";
import IAF from "../assets/images/Logos/IAF.png";
import IAS from "../assets/images/Logos/IAS.png";
import ISO from "../assets/images/Logos/ISO.png";

const Footer = () => {
  return (
    <footer className="bg-base-300">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li className="btn btn-ghost">
            <a
              href="/"
            >
              Home
            </a>
          </li>

          <li className="btn btn-ghost">
            <a href="/About">About Us</a>
          </li>

          <li className="btn btn-ghost">
            <a href="/Projects">Projects</a>
          </li>


          <li className="btn btn-ghost">
            <a href="/Blog">Blog</a>
          </li>

          <li className="btn btn-ghost">
            <a href="/Contact">Contact us</a>
          </li>


        </ul>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <img
            className="object-cover h-10 w-auto opacity-70"
            src={IAF}
            alt="Logo"
          ></img>
          <img
            className="object-cover h-10 w-auto opacity-70"
            src={IAS}
            alt="Logo"
          ></img>
          <img
            className="object-cover h-10 w-auto opacity-70"
            src={ISO}
            alt="Logo"
          ></img>
        </ul>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed font-extralight subtext-color">
          <a className="content-center">
            © 2023 IIG All rights reserved. <br /> Terms · Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
