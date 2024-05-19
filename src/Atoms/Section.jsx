import React from "react";



function Section({ children, className }) {
  return (
    <div
      className={`${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

Section.Badge = function SectionBadge({
  children,
}) {
  return (
    <div className="mx-auto w-fit rounded-md bg-antiqu-white px-3 text-center font-uncut-sans text-lg  capitalize text-amber-500">
      {children}
    </div>
  );
};

Section.Heading = function SectionHeading({
  children,
}){
  return (
    <h2 className="mobile:text-md mb-4 mt-4 text-center font-uncut-sans text-5xl font-extrabold capitalize small:text-xl medium:text-xl sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
};

export default Section;
