import React from "react";
import { Container } from "../../Atoms";
import PopularClassesData from "../../data/PopularClassesData.json";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function PopularClasses() {
  return (
    <Container id={"classes"}>
      <Container.Heading>Popular Classes</Container.Heading>
      <Container.Paragraph className={"text-slate-600"}>
        Gym classes provide well-planned and structured workouts that target
        specific goals, such as strength training, cardio endurance,
        flexibility, or a combination of these.
      </Container.Paragraph>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-6 md:px-8 sm:px-0 small:px-10 xs:px-4">
        {PopularClassesData.map((item, index) => {
          return <PopularClassesCard item={item} key={index} />;
        })}
      </div>
    </Container>
  );
}

function PopularClassesCard(props) {
  const { title, image, slug, description } = props.item;

  return (
    <div className="rounded-lg shadow-2xl flex flex-col">
      <div className="w-full h-44 relative custom-bg-black-layer-package">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-tr-lg rounded-tl-lg"
        />
        <h4 className="absolute bottom-0 left-0 text-white p-2 font-fira-sans font-bold text-xl md:text-md xs:text-md">
          {title}
        </h4>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <p className="font-fira-sans font-medium text-slate-700 text-[17px] md:text-md xs:text-md mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center  mt-auto">
          <Link to={slug}>
            <button className="bg-slate-950 rounded-lg p-2 text-white cursor-pointer font-fira-sans font-medium">
              Learn More
            </button>
          </Link>
          <button className="bg-red-550 text-white font-fira-sans font-medium text-lg rounded-full p-1">
            <PlusIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
