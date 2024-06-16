import React from "react";

function Container({ children, className, ...props }) {
  return (
    <div
      className={`w-full lg:w-11/12 mx-auto p-1 ${className ? className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

Container.Heading = function ContainerHeading({ children, className }) {
  return (
    <h1
      className={
        className
          ? `text-center font-fira-sans font-bold md:text-4xl sm:text-3xl xs:text-xl uppercase ${className}`
          : "text-center font-fira-sans font-bold md:text-4xl sm:text-3xl xs:text-xl uppercase"
      }
    >
      {children}
    </h1>
  );
};

Container.SubHeading = function ContainerSubHeading({ children, className }) {
  return (
    <h2
      className={
        className
          ? `text-center font-fira-sans font-bold md:text-2xl sm:text-xl xs:text-md -translate-x-2 uppercase ${className}`
          : "text-center font-fira-sans font-bold md:text-2xl sm:text-xl xs:text-md -translate-x-2 uppercase"
      }
    >
      {children}
    </h2>
  );
};

Container.Paragraph = function ContainerParagraph({ children, className }) {
  return (
    <p
      className={
        className
          ? `md:text-xl sm:text-md xs:text-md text-center w-10/12 mx-auto font-fira-sans font-semibold mt-2 mb-2 ${className}`
          : "md:text-xl sm:text-md xs:text-md text-center w-10/12 mx-auto font-fira-sans font-semibold mt-2 mb-2"
      }
    >
      {children}
    </p>
  );
};

export default Container;
