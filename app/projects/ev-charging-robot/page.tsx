"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const imageGallery = [
  { src: "/Electron.png", caption: "Wall Mounted Robotic Arm Design" },
  { src: "/Electron2.png", caption: "Initial Design of Robotic Arm" },
  { src: "/Electron3.png", caption: "Determined 3 Degrees of Freedom" },
  { src: "/Electron5.png", caption: "Incorporation of Cable Management" },
  { src: "/Electron6.png", caption: "Physical Build" }
];

export default function EVChargingRobotProject() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Automated EV Charging Robot – Dr. Electron</h1>

        {/* 📝 Large Introduction (Spans Image Width) */}
        <div className="mt-6 max-w-5xl mx-auto text-xl text-gray-800 leading-relaxed font-semibold px-4 sm:px-0 text-justify">
          <p>
            Team Electron developed an <span className="font-bold text-black"> automated EV charging system</span> designed to streamline the charging process for electric vehicles.
            The goal was to eliminate human intervention by utilizing <span className="font-bold text-cmuRed"> a robotic arm equipped with real-time vision processing</span>.
            This system integrates computer vision algorithms and multi-axis movement to ensure high-precision docking with EV charging ports.
          </p>
          <p className="mt-4">
            Throughout the development process, the team explored <span className="font-bold text-black">mechanical arm articulation, sensor fusion, and AI-powered movement control</span>.
            A <span className="font-bold text-cmuRed"> three-degree-of-freedom mechanism</span> ensures adaptability across different EV models, allowing seamless integration into smart charging stations.
          </p>
        </div>

        {/* 🖼️ Grid Layout for Images with Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 px-6">
          {imageGallery.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={item.src} 
                  alt={item.caption} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-md font-medium text-center w-4/5">{item.caption}</p>
            </div>
          ))}
        </div>

        {/* 🛠️ My Contributions Section */}
        <div className="mt-16 text-lg text-gray-900 font-semibold leading-relaxed max-w-4xl mx-auto text-left">
          <h2 className="text-2xl font-bold text-cmuRed text-center mb-4">My Contributions</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Designed <span className="font-bold text-black">CAD models</span> for a <span className="font-bold text-cmuRed">multi-axis robot</span>, demonstrating proof of concept for automated EV charging solutions.
            </li>
            <li>
              Developed <span className="font-bold text-cmuRed">multiple robot arm iterations</span>, assessing feasibility across various environments and scenarios.
            </li>
            <li>
              Integrated and implemented a <span className="font-bold text-black">camera vision system</span>, enabling robot arm simulation in static and dynamic environments.
            </li>
          </ul>
        </div>

        {/* 📝 Conclusion (Spans Image Width) */}
        <div className="mt-16 max-w-5xl mx-auto text-lg text-gray-700 leading-relaxed px-4 sm:px-0 text-justify">
          <p>
            The automated charging robot ensures <span className="font-bold text-black">seamless and safe energy transfer</span>, removing the need for human handling of heavy charging cables.
            By leveraging <span className="font-bold text-cmuRed">advanced motion planning</span> and <span className="font-bold text-cmuRed">machine learning</span>, 
            the system dynamically adjusts based on real-time environmental conditions, making it a viable solution for autonomous charging stations.
          </p>
          <p className="mt-4">
            The project was developed through a combination of <span className="font-bold text-black">mechanical design</span>, 
            <span className="font-bold text-cmuRed"> embedded systems programming</span>, and <span className="font-bold text-cmuRed">AI-based path planning</span>.
            The team worked on <span className="font-bold text-black">optimizing cable management</span> and improving the arm’s movement precision using 
            <span className="font-bold text-cmuRed"> closed-loop feedback control</span>.
          </p>
          <p className="mt-4">
            This technology has the potential to revolutionize the <span className="font-bold text-black">public EV charging industry</span>, 
            paving the way for <span className="font-bold text-cmuRed">fully autonomous charging stations</span> and contributing to a greener, more efficient transportation ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
}

