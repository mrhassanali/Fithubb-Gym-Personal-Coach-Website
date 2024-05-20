import React, { useState } from "react";
import { Container } from "../../Atoms";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/16/solid";
// import ReviewsData from "../../data/Reviews.json";

export default function ClientReview() {
  const [setReviewNo] = useState(0);

  const handleReviews = (e, move) => {
    e.preventDefault();
    if (move === "next") {
      setReviewNo((preValue) => {
        return preValue + 1;
      });
    } else if (move === "pre") {
      setReviewNo((preValue) => {
        return preValue - 1;
      });
    }
  };

  return (
    <Container>
      <div className="flex md:flex-row xs:flex-col justify-between items-center gap-x-6 mt-20  md:h-80 xs:h-auto">
        <div className="md:w-1/2 xs:w-11/12 md:m-4 bg-black text-white rounded-lg relative h-full">
          {/* Top Center Image */}
          <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-32 md:h-32 xs:w-24 xs:h-24">
            <img
              src="/images/Trainers/chris-john.jpg"
              alt="chris-john"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1">
            <button className="rounded-full px-1 py-1 text-lg text-white font-fira-sans font-semibold bg-red-550">
              <ChevronLeftIcon
                className="h-6 w-6 font-extrabold"
                onClick={(e) => handleReviews(e, "prev")}
              />
            </button>
          </div>
          {/* Right Arrow */}
          <div className="absolute top-1/2 -right-0 transform translate-x-1/2 -translate-y-1/2">
            <button className="rounded-full px-1 py-1 text-lg text-white font-fira-sans font-semibold bg-red-550">
              <ChevronRightIcon
                className="h-6 w-6 font-extrabold"
                onClick={(e) => handleReviews(e, "next")}
              />
            </button>
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="rounded-full px-4 py-1 md:text-lg xs:text-md text-white font-fira-sans font-semibold bg-red-550">
              View All
            </button>
          </div>

          <div className="mt-20 text-center font-fira-sans">
            <h1 className="font-bold md:text-3xl xs:text-xl">Henry Jacob</h1>
            <div className="my-2">
              <span className="text-red-550">⭐️</span>
              <span className="text-red-550">⭐️</span>
              <span className="text-red-550">⭐️</span>
              <span className="text-red-550">⭐️</span>
              <span className="text-red-550">⭐️</span>
            </div>
            <p className="mt-2 w-10/12 mx-auto font-normal lg:text-lg md:text-md sm:text-md text-slate-200 md:mb-2 xs:mb-8">
              I recently joined Fithubb, and couldn't be happier with my
              decision. From the moment I stepped inside, knew this was gym that
              truly cares about its members’ fitness journey.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 xs:w-11/12 md:p-14 xs:py-8">
          <h1 className="md:text-3xl xs:text-xl font-bold font-fira-sans">
            What Our Clients Say About Us
          </h1>
          <p className="md:text-xl xs:text-lg font-fira-sans text-slate-600 mt-3 font-normal">
            I've been a member of fitness within for 6 months now and i
            absolutely love it! The trainers are so motive and they really help
            to reach fitness goals.
          </p>

          <div className="inline-flex justify-start items-center w-full md:gap-x-14 xs:gap-x-2 mt-2">
            <div className="flex justify-start -space-x-3 font-mono text-white text-sm font-bold leading-6">
              <div className="md:w-12 md:h-12 xs:w-8 xs:h-8 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0">
                <img
                  src="/images/Trainers/chris-john.jpg"
                  alt="chris-john"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="md:w-12 md:h-12 xs:w-8 xs:h-8 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10">
                <img
                  src="/images/Trainers/chris-john.jpg"
                  alt="chris-john"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="md:w-12 md:h-12 xs:w-8 xs:h-8 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20">
                <img
                  src="/images/Trainers/chris-john.jpg"
                  alt="chris-john"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="md:w-12 md:h-12 xs:w-8 xs:h-8 rounded-full flex items-center justify-center bg-red-550 shadow-lg ring-2 ring-white z-40 text-3xl">
                +
              </div>
            </div>
            <div className="inline-flex items-center gap-x-2">
              <StarIcon className="h-6 w-6 text-yellow-400" />{" "}
              <span className="font-fira-sans font-medium md:text-xl xs:text-md text-slate-500">
                4.8 (327 Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
