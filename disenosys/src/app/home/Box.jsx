"use client";
import React from 'react';
import { FaChalkboardTeacher, FaBriefcase, FaProjectDiagram, FaCalendarDay } from 'react-icons/fa';
import "./Home.css"

const Box = () => {
    return (
        <div className='flex flex-col items-center py-5 lg:py-12'>
             <div className='flex justify-center items-center mb-12 p-5'>
            <h1 className='font-bold font-poppins text-[#057FE3] text-xl lg:text-5xl'>Why <span className='text-[#182073]'>Choose</span> Us?</h1>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4 container mx-auto">
                <div className="box-content flex flex-col items-center bg-white rounded-lg shadow-md border-b-4 border-[#0162ca] h-full">
                    <div className='p-6 space-y-4 flex flex-col flex-grow'>
                        <div className='flex justify-center items-center mb-4'>
                            <FaChalkboardTeacher size={40} color='#0162CA' className='icon' />
                        </div>
                        <h4 className='font-bold text-xl text-[#00224F] text-center'>
                            100% LIVE INTERACTIVE CLASSES
                        </h4>
                        <p className="text-gray-400 text-center">
                            Engage in live sessions with experts for an immersive learning experience.
                        </p>
                    </div>
                </div>

                <div className="box-content flex flex-col items-center bg-white rounded-lg shadow-md border-b-4 border-[#0162ca] h-full">
                    <div className='p-6 space-y-4 flex flex-col flex-grow'>
                        <div className='flex justify-center items-center mb-4'>
                            <FaBriefcase size={40} color='#0162CA' className='icon'/>
                        </div>
                        <h4 className='font-bold text-xl text-[#00224F] text-center'>
                            100% Job Assistance
                        </h4>
                        <p className="text-gray-400 text-center">
                            Get job placement support from our expert placement cell to kickstart your career.
                        </p>
                    </div>
                </div>

                <div className="box-content flex flex-col items-center bg-white rounded-lg shadow-md border-b-4 border-[#0162ca] h-full">
                    <div className='p-6 space-y-4 flex flex-col flex-grow'>
                        <div className='flex justify-center items-center mb-4'>
                            <FaProjectDiagram size={40} color='#0162CA' className='icon' />
                        </div>
                        <h4 className='font-bold text-xl text-[#00224F] text-center'>
                            Hands-on Experience with 50+ Projects
                        </h4>
                        <p className="text-gray-400 text-center">
                            Work on industry projects to gain practical experience and build your portfolio.
                        </p>
                    </div>
                </div>

                <div className="box-content flex flex-col items-center bg-white rounded-lg shadow-md border-b-4 border-[#0162ca] h-full">
                    <div className='p-6 space-y-4 flex flex-col flex-grow'>
                        <div className='flex justify-center items-center mb-4'>
                            <FaCalendarDay size={40} color='#0162CA' className='icon' />
                        </div>
                        <h4 className='font-bold text-xl text-[#00224F] text-center'>
                            Weekend Classes for Working Professionals
                        </h4>
                        <p className="text-gray-400 text-center">
                            Flexible weekend classes to accommodate the schedules of working professionals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
