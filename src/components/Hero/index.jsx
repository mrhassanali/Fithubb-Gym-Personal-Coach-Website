import React from "react";
import { Container, Section } from "../../Atoms";
import { PlayIcon } from "@heroicons/react/16/solid";
import TriangleImg from "../../assets/images/triangle-svgrepo-com.png";
import MenImg from "../../assets/images/men-image.png";
import barChartImg from "../../assets/images/bar-chart-4-xxl.png";
import { HeartIcon } from "@heroicons/react/16/solid";

export default function Hero() {
  return (
    <>
      <Section
        className={
          "custom-bg-black-layer relative bg-[url('https://img.freepik.com/premium-photo/cinematic-shot-interior-empty-gym_970826-155.jpg')] bg-no-repeat bg-center bg-cover"
        }
      >
        <Container>
          <div className="flex flex-row justify-between md:flex-row sm:flex-col-reverse xs:flex-col-reverse lg:h-[35rem] md:h-[30rem] sm:h-auto">
            <div className="z-[70] w-1/2 h-full text-white md:w-1/2 sm:w-full xs:w-full">
              <div className="flex flex-col justify-center items-center h-full w-full p-1">
                <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold uppercase font-fira-sans w-full ">
                  GET HEALTHY BODY <br />
                  WITH THE PERFECT <br />
                  EXERCISE <br />
                </h1>
                <p className="font-semibold font-fira-sans border-slate-100 mt-3 lg:text-lg md:text-md sm:text-sm">
                  We are always there to help you to make a healthy body and
                  mind through the power of fitness.
                </p>
                <div className="gap-x-8 inline-flex items-center w-full mt-3 mb-2">
                  <button className="bg-red-550 p-2 text-white rounded-lg lg:text-lg md:text-md sm:text-sm font-semibold font-fira-sans">
                    Get Started
                  </button>
                  <div className="inline-flex items-center gap-x-4">
                    <div className="rounded-full bg-[#4b4b4b]">
                      <PlayIcon className="p-2 w-fit h-12 text-white md:h-10 sm:text-h-8 cursor-pointer" />
                    </div>
                    <span className="text-lg font-semibold lg:text-lg md:text-md sm:text-sm">
                      Play Video
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 mt-3 w-full">
                  <div className="inline-block text-center">
                    <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-md xs:text-[2rem] font-bold">
                      103 &nbsp;+
                    </h2>
                    <p className="text-lg lg:text-xl md:text-lg sm:text-sm xs:text-md font-semibold font-fira-sans ">
                      Expert Trainers
                    </p>
                  </div>
                  <div className="inline-block text-center">
                    <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-md xs:text-[2rem] font-bold">
                      565 &nbsp;+
                    </h2>
                    <p className="text-lg lg:text-xl md:text-lg sm:text-sm xs:text-md font-semibold font-fira-sans ">
                      Members Joined
                    </p>
                  </div>
                  <div className="inline-block text-center">
                    <h2 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-md xs:text-[2rem] font-bold">
                      115 &nbsp;+
                    </h2>
                    <p className="text-lg lg:text-xl md:text-lg sm:text-sm xs:text-md font-semibold font-fira-sans ">
                      Fitness Programs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="z-[70] w-1/2 md:w-1/2 sm:w-full xs:w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${TriangleImg})` }}
            >
              <img
                src={MenImg}
                alt="Placeholder"
                className=" w-3/4 mx-auto h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
      {/* <Container>
        <div className="flex md:flex-row sm:flex-row xs:flex-col justify-between mt-14 mb-6 small:px-6">
          <div className="border border-slate-800 md:w-1/2 xs:w-full relative">
            <img
              src="https://diversinet.com/wp-content/uploads/2024/04/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg"
              alt="sportsman"
              className="object-cover w-full h-full rounded-xl"
            />

            <div className="bg-slate-800  p-2 w-fit font-fira-sans rounded-lg absolute -right-14 top-28">
              <div className="inline-flex items-center gap-x-4">
                <img src={barChartImg} alt="bar chart" className="w-12 h-12" />
                <div>
                  <p className="text-slate-300 font-regular text-xl">
                    Calries Burned
                  </p>
                  <p className="text-2xl text-white font-semibold">
                    116&nbsp;bpm
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800  p-2 w-fit font-fira-sans rounded-lg absolute -right-14 bottom-24">
              <div className="inline-flex items-center gap-x-4">
                <HeartIcon alt="bar chart" className="w-12 h-12 text-red-550" />
                <div>
                  <p className="text-slate-300 font-regular text-xl">
                    Heart Rate
                  </p>
                  <p className="text-xl text-white font-semibold">
                    116&nbsp;bpm
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-800 md:w-1/2 xs:w-full md:p-10 sm:p-6 xs:p-4">
            <h1 className="md:text-5xl sm:text-2xl xs:text-lg font-bold font-fira-sans">
              Ready to Make Your Fitness
            </h1>
            <p className="mt-3 font-fira-sans text-slate-600 md:text-xl xs:text-lg font-medium">
              Gym are an essential part of any successful gym. They will help to
              attract new customers members motivated and track achieve their
              goals
            </p>
            <button className="px-3 py-2 bg-red-500 text-white font-medium rounded-lg mt-6 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </Container> */}
    </>
  );
}
