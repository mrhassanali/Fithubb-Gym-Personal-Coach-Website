import React from "react";
import { Section, Container } from "../../Atoms";
import Carousel from "../Carousel";
import ProductData from "../../data/Products.json";

export default function Products() {
  return (
    <Section>
      <Container className={"shadow-lg"}>
        <Container.Heading>
          CHOOSE YOUR PRODUCT AND BOOST <br />
          YOUR BODY STRENGTH
        </Container.Heading>
        <div className="xs:px-2">
          <Carousel data={ProductData} sideArrows={true} />
        </div>
      </Container>
    </Section>
  );
}
