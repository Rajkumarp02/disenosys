"use client";
import React from "react";
import img from "../assests/models/CATIA.png";
import Image from "next/image";
import Mentor from "../assests/profile/f.png";
import { CiCalendarDate } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import Testimonials from "../home/Testimonials";
import c from "../assests/profile/b.png";

const Bootcamp = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 text-white px-4 sm:px-6 md:px-10 lg:px-32 xl:px-32 2xl:px-44 mx-auto p-12 mt-20 font-poppins rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-6 md:gap-8 mx-auto container px-2 py-12">
          <div className="">
            <h1 className="text-xl sm:text-2xl md:text-xl lg:text-6xl font-bold">
              Master Automotive Design with{" "}
              <span className="text-yellow-400">CATIA</span>
            </h1>
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold py-4">
              Join Our <span className="text-yellow-400">Intensive </span>
              Bootcamp
            </h2> */}
            <div className="flex justify-center items-center bg-blue-500 rounded-md p-2 gap-4 w-[480px] mt-3">
              <div className="bg-blue-900 p-2 flex items-center gap-2 rounded">
                <CiCalendarDate size={30} className="" />
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold">
                  November 17,2024
                </h2>
              </div>
              <div className="bg-blue-900 p-2 flex items-center gap-2 rounded">
                <BsClockHistory size={30} />
                <h2 className="text-white text-white text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold">
                  11 AM Onwards
                </h2>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-xl lg:text-lg mt-4 font-light">
              Accelerate your career with hands-on training in CATIA, the
              leading software for automotive design. This bootcamp covers
              everything from design fundamentals to advanced modeling
              techniques, guided by industry experts.
            </p>
            {/* <ul className="list-disc list-inside mt-6 space-y-2 text-lg sm:text-xl md:text-2xl lg:text-xl">
            <li>Learn the essentials of CATIA for automotive engineering.</li>
            <li>Develop real-world skills with practical, project-based learning.</li>
            <li>Network with professionals and enhance your career prospects.</li>
          </ul> */}
            <button
              className="bg-[#182073] hover:bg-yellow-600 text-lg font-bold font-poppins rounded-lg text-white px-6 sm:px-7 md:px-8 lg:px-9 py-2 my-4 md:my-6"
              onClick={() =>
                document
                  .getElementById("form-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Here
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src={img}
              alt="CATIA Design"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <section className="py-6 px-6 md:px-12 text-center bg-blue-50 rounded shadow-lg">
        <h2 className="font-bold font-poppins text-center text-[#182073] text-3xl lg:text-5xl mb-12">
          Know your mentors
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between md:space-x-0 mt-8 px-4 sm:px-6 md:px-10 lg:px-32 xl:px-32 2xl:px-44 ">
          <div className="bg-[#182073] rounded-full">
            <Image
              src={Mentor}
              alt="Mentor Profile Picture"
              className="w-full h-full rounded-full bg-[#182073] p-4"
            />
          </div>
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-4xl font-bold text-[#182073] font-poppins">
              John Doe
            </h3>
            <p className="text-gray-600 mt-3 text-xl font-poppins text-medium">
              John is an experienced industry leader with over 15 years of
              expertise in Automotive design and mentoring. Passionate about
              guiding aspiring developers, he combines real-world insights with
              hands-on learning to help students succeed in their careers.
            </p>
            <p className="mt-3 text-gray-600 mt-3 text-xl font-poppins text-medium">
              <b>Specialties:</b> Automotive design, project management, and
              career growth.
            </p>
          </div>
        </div>
      </section>

      {/* 
      <section className="bg-white py-16 px-6 md:px-28">
      <h2 className="font-bold font-poppins text-center text-[#182073] text-3xl lg:text-5xl mb-12">
    Why Our Bootcamp?
  </h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <Image
              src={img}
              alt="Feature 1"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#182073]">
                Hands-On Learning
              </h3>
              <p className="text-gray-600 mt-3">
                Build projects that simulate real-world scenarios to enhance
                your learning experience and gain practical skills.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-12">
            <Image
              src={img}
              alt="Feature 2"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#182073]">
                Expert Mentorship
              </h3>
              <p className="text-gray-600 mt-3">
                Learn from professionals who are actively working in the
                industry, providing guidance on best practices and career
                growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <Image
              src={img}
              alt="Feature 3"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#182073]">
                Job Assistance
              </h3>
              <p className="text-gray-600 mt-3">
                We help you with job placements and offer interview coaching to
                help you land your dream job in tech.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <div className="px-4 sm:px-6 bg-blue-50 md:px-10 lg:px-32 xl:px-32 2xl:px-44">
        <Testimonials />
      </div>

      <section className="bg-blue-50 py-16 px-6 md:px-28">
  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 h-[350px]">
    
    <div className="flex-1 text-center md:text-left h-full">
      <h2 className="font-bold text-[#182073] text-3xl lg:text-5xl mb-4">
        What you will learn
      </h2>
      <ul className="text-gray-600 list-disc h-full mt-3 space-y-3 font-semibold text-xl px-5 py-2 bg-white shadow-lg rounded border-l-4 border-l-[#182073] overflow-y-auto max-h-full">
        <div className="p-4 space-y-4">
          <li>Get certified by be10x to highlight your AI tool capabilities in your resume</li>
          <li>Learn from IIT Kharagpur alumni</li>
          <li>Be among the top 1% professionals to avoid being laid off</li>
          <li>No technical AI knowledge required to master AI tools</li>
          <li>Proven to reduce your work by 2 hours daily</li>
        </div>
      </ul>
    </div>

    <div className="flex-1 text-center md:text-left h-full">
      <h2 className="font-bold text-[#182073] text-3xl lg:text-5xl mb-4">
        Who should Attend
      </h2>
      <ul className="text-gray-600 list-disc h-full mt-3 space-y-3 font-semibold text-xl px-5 py-2 bg-white shadow-lg rounded border-l-4 border-l-[#182073] overflow-y-auto max-h-full">
        <div className="p-4 space-y-4">
          <li>Get certified by be10x to highlight your AI tool capabilities in your resume</li>
          <li>Learn from IIT Kharagpur alumni</li>
          <li>Be among the top 1% professionals to avoid being laid off</li>
        </div>
      </ul>
    </div>

  </div>
</section>

<section className="bg-blue-50 py-16 px-6 md:px-28 flex justify-center">
  <div className="flex flex-col justify-center">
   <div className="flex justify-center">
    <button className="bg-[#182073] text-white rounded shadow-lg p-3 text-lg font-bold"  onClick={() =>
                document
                  .getElementById("form-section")
                  .scrollIntoView({ behavior: "smooth" })
              }>Register Now for Rs.199</button>
   </div>
   <div className="mt-4 mb-2">
   <h2 className="font-bold font-poppins text-center text-[#182073] text-3xl lg:text-5xl mb-12">
   Get a certification of the workshop
   </h2>
   </div>
   <div className="flex justify-center mb-2"> 
    <Image src={c} alt="certificate-demo" className="w-96 h-auto object-cover"/>
   </div>
   <div className="flex justify-center ">
    <button className="bg-[#182073] text-white rounded shadow-lg p-3 text-lg font-bold"  onClick={() =>
                document
                  .getElementById("form-section")
                  .scrollIntoView({ behavior: "smooth" })
              }>Register Now for Rs.199</button>
   </div>
   </div>
 
</section>

      <section id="form-section" className="bg-blue-50 py-16 px-6 md:px-12">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#182073] text-center mb-6">
            Fill the Form to Join
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
            {/* <div>
              <label className="block text-gray-600 text-sm mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                rows="4"
              ></textarea>
            </div> */}
            <button
              type="submit"
              className="w-full bg-[#182073] hover:bg-[#182073] text-white py-3 font-poppins rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Bootcamp;
