import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  let [skills, setSkills] = useState(['HTML','CSS','JAVASCRIPT','REACT','NODEJS','EXPRESS','MONGODB','SQL','PL-SQL','TAILWIND', 'BOOTSTRAP']);
  
  return (
    <div className="text-base text-customColor4 transition-all ease-in-out delay-150">
      <h1 className="text-white text-3xl font-bold pb-5">About Me</h1>
      <p className="bg-customColor3 w-20 rounded h-1 mb-5 "></p>
      <section className="mb-8">
        <p className="mb-4">
          Hi, I’m Rutik Vaskar, a passionate web developer from Thane, Maharastra. I love crafting
          beautiful and functional web experiences that make a difference.
        </p>
        <p className="mb-4">
          As a Web Developer specializing in the MERN stack and React, I thrive
          on transforming intricate challenges into seamless, innovative
          solutions. My expertise spans MongoDB, SQL, and PLSQL, allowing me to
          build robust, scalable, and efficient web applications.
        </p>
        <p className="mb-4">
          My mission is to effectively convey your message and brand identity
          through creative and engaging web experiences. I have had the
          privilege of developing web solutions for several renowned brands,
          each time adding a personal touch that makes the product eye-catching
          and intuitive.
        </p>
        <p className="mb-4">
          My goal is to continue growing as a developer and to contribute to exciting projects
          that challenge me creatively and technically.
        </p>
        <p className="mb-4">
          When I’m not coding, you can find me exploring new technologies, reading tech blogs,
          or hiking in the beautiful landscapes around Sydney.
        </p>
        <p className="mb-4">
          Feel free to reach out through my contact page or connect with me on <Link className="text-blue-500" to={'https://github.com/Rvaskar'} target="_blank"  rel="noopener noreferrer">LinkedIn!</Link>
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-white font-bold mb-6">Technologies</h1>
        <div className="flex flex-wrap">
          {
            skills?.map((skill, index) => (
              <p className="text-center text-customColor3 m-3 bg-customColor2 text-sm px-4 py-1 rounded-lg" key={index}>
                {skill}
              </p>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default About;
