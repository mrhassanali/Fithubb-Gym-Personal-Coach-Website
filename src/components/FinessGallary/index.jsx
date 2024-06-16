import React from "react";
import { Section, Container } from "../../Atoms";
import Carousel from "../Carousel";
import FitnessGallery from "../../data/FitnessGallery.json";

export default function FinessGallary() {
  return (
    <Section
      id="gallery"
      className={
        "mt-10 mb-8 py-8 h-auto bg-[url('https://img.freepik.com/premium-photo/cinematic-shot-interior-empty-gym_970826-155.jpg')] bg-no-repeat bg-center bg-cover"
      }
    >
      <Container>
        <Container.Heading className={"text-white"}>
          FITNESS GALLERY
        </Container.Heading>
        <Container.Paragraph className={"text-white"}>
          "Strength doesn't come from what you can do. It comes from overcoming
          the things you once thought you couldn't.
        </Container.Paragraph>
      </Container>
      <div className="mb-9">
        <Carousel data={FitnessGallery} />
      </div>
    </Section>
  );
}
