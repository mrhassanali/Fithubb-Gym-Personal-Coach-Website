import React from "react";
import { Container, Section } from "../../Atoms";
import TrainersData from "../../data/Trainers.json";
import { Link } from "react-router-dom";

import { ReactComponent as FacebookSVG } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstagramSVG } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/svg/linkedin.svg";

export default function Trainers() {
  return (
    <>
      <Container className={"mt-8"} id="about-us">
        <Container.Heading>OUR TRAINERS</Container.Heading>
      </Container>
      <Section>
        <Container>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 small:grid-cols-2 my-12 xs:px-3 gap-4">
            {TrainersData.map((trainer, index) => {
              return <TrainersCard trainers={trainer} key={index} />;
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

function TrainersCard(props) {
  const { name, job, facebook, instagram, linkedin, image } = props.trainers;
  return (
    <div className="shadow-2xl p-3 rounded-lg">
      <div className="bg-slate-600 w-full md:h-52 xs:h-48">
        <img src={image} alt={name} className="object-cover w-full h-full rounded-lg"/>
      </div>
      <div className="text-center mt-4">
        <h1 className="font-fira-sans font-bold md:text-3xl xs:text-xl">{name}</h1>
        <p className="md:text-lg xs:text-md font-semibold font-fira-sans text-red-500">
          {job}
        </p>
        <div className="flex justify-between items-center  mx-auto w-11/12 mt-2">
          <Link to={facebook}><button className="rounded-lg p-2 border border-slate-300 cursor-pointer hover:bg-red-550 hover:text-white group">
            <FacebookSVG className="w-7 h-7 group-hover:fill-white" />
          </button></Link>
          <Link to={instagram}><button className="rounded-lg p-2 border border-slate-300 cursor-pointer hover:bg-red-550 hover:text-white group">
            <InstagramSVG className="w-7 h-7 group-hover:fill-white" />
          </button></Link>
          <Link to={linkedin}><button className="rounded-lg p-2 border border-slate-300 cursor-pointer hover:bg-red-550 hover:text-white group">
            <LinkedinSVG className="w-7 h-7 group-hover:fill-white" />
          </button></Link>
        </div>
      </div>
    </div>
  );
}
