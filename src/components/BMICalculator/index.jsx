import React from "react";
import { Container, Section } from "../../Atoms";

export default function BMICalculator() {
  return (
    <Section>
      <Container>
        <Container.Heading>BMI CALCULATOR</Container.Heading>
        <Container.SubHeading>GET INTO SHAPE, NOW!</Container.SubHeading>
        <Container.Paragraph className={"text-slate-600"}>
          BMI is a reliable guide to estimate the healthy weight range based on
          height, weight & age.It is recognized by the insurance, Health
          professionals and Government.
        </Container.Paragraph>
        <div className="mt-3 mb-4 p-2 rounded-lg flex md:flex-row xs:flex-col-reverse justify-between items-center gap-x-16 shadow-2xl">
          <div className="md:w-1/2 xs:w-full">
            <form action="#" className="flex flex-col gap-y-4 md:p-8 xs:p-4">
              <h1 className="text-2xl font-fira-sans font-semibold uppercase">
                KNOW TOUR BMI
              </h1>
              <div>
                <select className="p-2 font-fira-sans w-full text-lg font-semibold text-slate-600 bg-transparent border border-slate-400 rounded-lg">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="inline-flex justify-space-between items-center gap-x-4">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Weight"
                  className="p-2 font-fira-sans w-2/3 text-lg font-semibold text-slate-600 bg-transparent border border-slate-400 rounded-lg"
                />
                <div className="inline-flex items-center border border-slate-800 w-1/3 rounded-lg">
                  <button className="w-1/2 p-2 hover:bg-red-550 hover:text-white uppercase rounded-lg text-xl font-fira-sans font-semibold">
                    KG
                  </button>
                  <button className="w-1/2 p-2 hover:bg-red-550 hover:text-white uppercase rounded-lg text-xl font-fira-sans font-semibold bg-red-550 text-white">
                    LB
                  </button>
                </div>
              </div>
              <div className="inline-flex justify-space-between items-center gap-x-4">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Height in CM"
                  className="p-2 font-fira-sans w-2/3 text-lg font-semibold text-slate-600 bg-transparent border border-slate-400 rounded-lg"
                />
                <div className="inline-flex items-center border border-slate-800 w-1/3 rounded-lg">
                  <button className="w-1/2 p-2 hover:bg-red-550 hover:text-white uppercase rounded-lg text-xl font-fira-sans font-semibold">
                    CM
                  </button>
                  <button className="w-1/2 p-2 hover:bg-red-550 hover:text-white uppercase rounded-lg text-xl font-fira-sans font-semibold bg-red-550 text-white">
                    IN
                  </button>
                </div>
              </div>
              <div className="inline-flex justify-between items-center w-full">
                <div>
                  <label class="inline-flex justify-between items-center cursor-pointer">
                    <span class="text-lg font-fira-sans font-semibold text-slate-600">
                      Metric &nbsp;
                    </span>
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-red-550 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-550"></div>
                  </label>
                </div>
                <div>
                  <span class="text-lg font-fira-sans font-semibold text-slate-600">
                    Imperical
                  </span>
                </div>
                <div>
                  <button className="p-2 px-3 bg-red-550 text-white border-rounded text-lg font-fira-sans font-semibold rounded-lg">
                    Calculate
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="md:w-1/2 xs:w-full md:h-[21rem] xs:h-[16rem] bg-[#1A1A1A] text-white font-fira-sans rounded-lg flex justify-center items-center ">
            <div className="text-center">
              <span className="text-4xl font-semibold">Your BMI is</span> <br />
              <span className="text-6xl font-bold text-red-550">0.00</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
