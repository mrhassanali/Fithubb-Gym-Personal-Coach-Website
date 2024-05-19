import React from "react";
import { Section, Container } from "../../Atoms";
import Carousel from "../Carousel";
import FitnessGallery from "../../data/FitnessGallery.json";

export default function Workout() {
  return (
    <Section>
      <Container className={"shadow-lg"}>
        <Container.Heading>
        See All Workouts
        </Container.Heading>
        <div className="border border-slate-950 mb-9 p-8">
          <Carousel data={FitnessGallery} slidesToShow={1}/>
        </div>
      </Container>
    </Section>
  );
}
