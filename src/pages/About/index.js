import React from "react";

const About = () => {
  return (
    <div className="py-5 bg-cool min-h-screen space-y-10 text-center flex flex-col items-center justify-center">
      <h1 className="font-light text-4xl">About</h1>
      <p className="font-light text-lg">
        This project created with React & Tailwind CSS
      </p>
      <div className="space-x-5">
        <button className="rounded-full bg-blue-500 px-4 py-2 text-white">
          View Code
        </button>
        <button className="rounded-full bg-blue-500 px-4 py-2 text-white">
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default About;
