"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const projects = [
  { 
    title: "Hybrid CNN-Transformer Model for Cancer Detection", 
    img: "/project1.png", 
    desc: "Deep learning model using Vision Transformers and CNNs for Whole Slide Image (WSI) classification.", 
    link: "/projects/cnn-transformer" 
  },
  { 
    title: "Telesurgery CV Algorithm", 
    img: "/Project2.png", 
    desc: "Computer vision algorithm for real-time guidewire tracking and 2D-3D medical image registration.", 
    link: "/projects/telesurgery" 
  },
  { 
    title: "Autonomous Vehicle – Modern Control Theory", 
    img: "/autonomous-vehicle.png", 
    desc: "Designed PID and LQR controllers for autonomous navigation and real-time localization.", 
    link: "/projects/autonomous-vehicle" 
  },
  { 
    title: "Automated EV Charging Robot – Team Electron", 
    img: "/Electron.png", 
    desc: "Developed a robotic system for autonomous EV charging using multi-axis robotic arms.", 
    link: "/projects/ev-charging-robot" 
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      <Navbar />
      
      <section className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <p className="mt-4 text-lg text-gray-700">
          Explore my technical projects, ranging from AI research to robotic automation.
        </p>
      </section>

      <section className="container mx-auto px-6 py-12 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="bg-white shadow-md rounded-lg overflow-hidden block hover:shadow-lg">
              <Image src={project.img} width={500} height={300} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 w-full mt-12">
        <p>&copy; {new Date().getFullYear()} Yashraj Shanker. All rights reserved.</p>
      </footer>
    </div>
  );
}
