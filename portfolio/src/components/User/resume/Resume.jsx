import React from "react";
import Certificates from "./certifiactes/Certificates";
import Courses from "./course/Courses";

const Resume = () => {
  return (
    <div className="text-base text-customColor4 transition-all ease-in-out delay-150">
      <h1 className="text-white text-3xl font-bold pb-5">Resume</h1>
      <p className="bg-customColor3 w-20 rounded h-1 mb-5 "></p>
      <section>
        <div className="ml-0">
          <h1 className="text-2xl text-white font-bold mb-6">Education</h1>
          <ul className="">
            <li className="pl-5 py-2 my-4 border-l-2 border-l-customColor3 ">
              <h2 className="text-white text-xl">Bachelor of Engineering (Information Technology)</h2>
              <h4>Finolex academy management and Technology</h4>
              <h3>2019-2023</h3>
            </li>
            <li className="pl-5 py-2 my-4 border-l-2 border-l-customColor3 ">
              <h2 className="text-white text-xl">
                HSC
              </h2>
              <h4>Konkan Divisional Board</h4>
              <h3>
                2018-2019
              </h3>
            </li>
            <li className="pl-5 py-2 my-4 border-l-2 border-l-customColor3 ">
              <h2 className="text-white text-xl">SSC</h2>
              <h4>Konkan Divisional Board</h4>
              <h3>2016-2017</h3>

            </li>
          </ul>
        </div>
      </section>
      <Courses/>
      <Certificates/>
    </div>
  );
};

export default Resume;
