import React from "react";
import { Container, Section } from "../../Atoms";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <Section className={"mt-5 bg-[#1A1A1A]"}>
        <Container>
          <div className="grid lg:grid-cols-6 large:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:gri-cols-1 gap-1 mt-6 mb-4">
            <div className="md:col-span-2 pt-3 px-5">
              <div className="md:text-xl xs:text-lg text-slate-200 font-fira-sans font-semibold inline-flex items-center">
                <img src={Logo} alt="Logo" className="w-12 h-12" />
                Fit<span className="text-red-500">hubb</span>
              </div>
              <p className="text-slate-200 md:text-lg xs:text-md font-fira-sans text-medium mt-3">
                Remember to personalize the contact information, opening hours,
                and social media links based on the specific detail of your gym.
              </p>
            </div>
            <div className="pt-3 px-5">
              <div className="md:text-xl xs:text-lg text-slate-200 font-fira-sans font-semibold uppercase">
                My Account
              </div>
              <ul className="leading-8 font-fira-sans md:text-lg xs:text-md font-normal text-slate-200 mt-2">
                <li>About Us</li>
                <li>My Account</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Information</li>
              </ul>
            </div>
            <div className="pt-3 px-5">
              <div className="md:text-xl xs:text-lg text-slate-200 font-fira-sans font-semibold uppercase">
                Top Links
              </div>
              <ul className="leading-8 font-fira-sans md:text-lg xs:text-md font-normal text-slate-200 mt-2">
                <li> Classes</li>
                <li>Faq</li>
                <li>Our Trainer</li>
                <li>Daily Workouts</li>
                <li>Products</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="md:col-span-2 pt-3 px-5">
              <div className="md:text-xl xs:text-lg text-slate-200 font-fira-sans font-semibold uppercase">
                Address
              </div>
              <ul className="leading-10 md:text-lg xs:text-md font-fira-sans font-normal text-slate-200 mt-2">
                <li className="inline-flex items-center gap-x-2">
                  <div className="p-1 rounded-full flex items-center justify-center bg-slate-100">
                    <MapPinIcon className="w-5 h-5 fill-red-550" />
                  </div>
                  <span className="md:leading-normal xs:leading-5">
                    70/D, RD Complex, 100 Feet Road Coimbatore - 600 075
                  </span>
                </li>
                <li className="inline-flex items-center gap-x-2">
                  <div className="p-1 rounded-full flex items-center justify-center bg-slate-100">
                    <PhoneIcon className="w-5 h-5 fill-red-550" />
                  </div>
                  <span>+91 9874512345</span>
                </li>
                <li className="inline-flex items-center gap-x-2">
                  <div className="p-1 rounded-full flex items-center justify-center bg-slate-100">
                    <EnvelopeIcon className="w-5 h-5 fill-red-550" />
                  </div>
                  <span>contact@hassanali.pk</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      <div className="bg-[#1A1A1A] pt-2">
        <Container>
          <div className="flex md:flex-row xs:flex-col-reverse justify-between items-center">
            <div className="text-center py-3 text-white font-fira-sans text-md font-medium">
              © 2024 Fit<span className="text-red-550">Hubb</span>. All Rights
              Reserved.
            </div>
            <ul className="inline-flex text-white font-fira-sans text-md font-medium gap-x-4">
              <li className="border-r border-slate-300 pr-4">Privacy Policy</li>
              <li>Term & Condition</li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
