"use client"
import React, { useEffect, useState } from 'react';

const BlinkingAlert = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000); // Show the alert for 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="fixed top-0 right-0 w-full z-50 animate-pulse">
    <div className="flex items-center justify-center space-x-4 bg-[#057FE3] text-center py-2">
    <div className="w-6 h-6 bg-[#182073] ring-2 ring-white shadow-xl rounded-full flex justify-center items-center">
    <div className="w-2 h-2 bg-red-500 animate-pulse rounded-full"></div>
</div>
         <span className="font-semibold font-poppins text-base text-white">
         Exciting changes ahead! Our basics are live—stay tuned for more!
      </span>
    </div>
  </div>
  
  );
};

export default BlinkingAlert;

