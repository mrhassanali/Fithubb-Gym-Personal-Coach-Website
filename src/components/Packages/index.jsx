import React from "react";
import { Section, Container } from "../../Atoms";
import { CheckIcon } from "@heroicons/react/16/solid";
import PackagesData from "../../data/Packages.json";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import SuccessClientImg from "../../assets/images/icon/success-client.png";
import TotalEquipements from "../../assets/images/icon/total-quipements.png";
import CupOfTea from "../../assets/images/icon/cub-tea.png";

export default function Packages() {
  return (
    <Section className={"bg-[#1A1A1A] mt-32 mb-10"}>
      <Container className={"mt-32 relative"}>
        <PackagesTopCard />
        <Container.Heading className={"text-white md:mt-20 xs:pt-24"}>
          Our Packages
        </Container.Heading>
        <Container.Paragraph className={"text-white"}>
          Choose a plan that's right for your growing team. Better pricing & No
          additional charges.
        </Container.Paragraph>
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 small:px-20 gap-5 mb-10 my-10">
          {PackagesData.map((item, index) => {
            return <PackagesCard item={item} key={index} />;
          })}
        </div>
      </Container>
    </Section>
  );
}

function PackagesTopCard() {
  return (
    <div className="w-full lg:w-11/12 text-white bg-red-550 rounded absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 width-[100%]">
      <div className="grid large:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 md:p-8 gap-4">
        <div className="md:border-r inline-flex items-center gap-x-2">
          <FaceSmileIcon className="w-12 h-12 text-white" />
          <div>
            <h1 className="text-white font-fira-sans font-bold text-3xl lg:text-3xl xs:text-md">
              546
            </h1>
            <p className="text-white font-fira-sans font-semibold text-xl lg:text-xl xs:text-md">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="md:border-r inline-flex items-center gap-x-2">
          <img
            src={SuccessClientImg}
            alt="total client"
            className="w-16 h-16"
          />
          <div>
            <h1 className="text-white font-fira-sans font-bold text-3xl lg:text-3xl xs:text-md">
              752
            </h1>
            <p className="text-white font-fira-sans font-semibold text-xl lg:text-xl xs:text-md">
              Total Clients
            </p>
          </div>
        </div>
        <div className="md:border-r inline-flex items-center gap-x-2">
          <img
            src={TotalEquipements}
            alt="total equipements"
            className="w-16 h-16"
          />
          <div>
            <h1 className="text-white font-fira-sans font-bold text-3xl lg:text-3xl xs:text-md">
              546
            </h1>
            <p className="text-white font-fira-sans font-semibold text-xl lg:text-xl xs:text-md text-wrap">
              Total Equipements
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-x-2">
          <img src={CupOfTea} alt="total equipements" className="w-16 h-16" />
          <div>
            <h1 className="text-white font-fira-sans font-bold text-3xl lg:text-3xl xs:text-md">
              423
            </h1>
            <p className="text-white font-fira-sans font-semibold text-xl lg:text-xl xs:text-md">
              Cup of tea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PackagesCard(props) {
  const { packageName, price, duration, banefits, image } = props.item;
  return (
    <div className="bg-[#525252] rounded-lg p-3 hover:bg-red-550 group">
      <h1 className="text-center text-white font-bold font-fira-sans md:text-2xl sm:text-lg">
        {packageName}
      </h1>
      <div className="bg-slate-500 rounded-lg w-full h-48 my-3">
        <img
          src={image}
          alt={packageName}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <h1 className="text-center text-white font-bold font-fira-sans md:text-xl sm:text-lg">
        Rs.{price}/ &nbsp;{duration}
      </h1>
      
      <ul className="text-white px-4 mt-4 leading-8">
        {banefits.map((item, index) => {
          return (
            <li
              key={index}
              className="inline-flex items-center gap-x-4 md:text-xl sm:text-lg font-fira-sans font-semibold"
            >
              <CheckIcon className="w-8 h-8 bg-[#3fe209] group-hover:bg-white group-hover:text-[#525252] text-slate-950 rounded-full" />
              {item}
            </li>
          );
        })}
      </ul>
      <div className="w-full flex justify-center my-2">
        <button className="border border-slate-50 p-2 md:text-xl sm:text-lg rounded-lg text-white group-hover:text-red-550 group-hover:bg-white font-fira-sans font-semibold">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
