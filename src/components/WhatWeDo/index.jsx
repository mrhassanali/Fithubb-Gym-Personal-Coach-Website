import React from "react";
import { Link } from "react-router-dom";

import WeDoCardData from "../../data/WeDOCardData.json";
import { Container } from "../../Atoms";

export default function WhatWeDo() {
  return (
    <Container>
      <Container.Heading className={"mt-4"}>What We Do</Container.Heading>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 small:grid-cols-2 xs:grid-cols-1 mt-5 mb-6 gap-x-16 md:gap-x-16 sm:gap-y-10 xs:gap-y-10">
        {WeDoCardData.map((card, index) => {
          return <WeDoCard card={card} key={index} />;
        })}
      </div>
    </Container>
  );
}

function WeDoCard(props) {
  return (
    <>
      <div>
        <div className="p-2 rounded-lg bg-red-550 w-10/12 mx-auto relative h-72 lg:h-72 md:h-60 sm:h-52 small:h-52 xs:h-52">
          <div className="bg-slate-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] rounded-lg m-auto h-5/6">
            <img
              src={props.card.img}
              alt={props.card.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-center font-fira-sans font-bold text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg uppercase">
            {props.card.title}
          </h1>
          <Link
            to={props.card.slug}
            className="block text-center mt-2 font-fira-sans text-red-550 text-xl lg:text-xl md:text-md sm:text-sm font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
