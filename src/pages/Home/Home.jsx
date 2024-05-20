import React from "react";
import { Hero } from "../../components";

import PopularClasses from "../../components/PopularClasses";
import Packages from "../../components/Packages";
import BMICalculator from "../../components/BMICalculator";
import FinessGallary from "../../components/FinessGallary";
import Products from "../../components/Products";
// import Workout from "../../components/Workout";
import ClientReview from "../../components/ClientReview";
import Trainers from "../../components/Trainers";
import WhatWeDo from "../../components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      {/* <Workout /> */}
      <PopularClasses />
      <Packages />
      <BMICalculator />
      <ClientReview />
      <FinessGallary />
      <Products />
      <Trainers />
    </>
  );
}
