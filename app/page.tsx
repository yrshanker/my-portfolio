"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <Navbar />

      {/* 📜 Inspirational Quote Section */}
      <section className="bg-cmuRed text-white py-10 px-6 text-center shadow-md w-full">
        <h2 className="text-3xl font-bold mb-4">My Philosophy</h2>
        <p className="text-xl italic font-medium max-w-3xl mx-auto">
          &quot;Success is not final, failure is not fatal: it is the courage to continue that counts.&quot;
        </p>
        <p className="mt-2 text-lg font-semibold">— Winston Churchill</p>
      </section>

      {/* 🏆 Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
        <div className="flex justify-center">
          <Image 
            src="/profile.jpg" 
            width={180} 
            height={180} 
            alt="Yashraj Shanker" 
            className="rounded-full border-4 border-cmuRed shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-cmuRed mt-6">Yashraj Shanker</h1>
        <p className="mt-6 text-xl text-gray-700 leading-relaxed font-light max-w-4xl">
          I am a <span className="font-bold text-cmuDarkGray">Mechanical Engineer</span> turned  
          <span className="font-bold text-cmuRed"> AI & Robotics Engineer</span>, passionate about building 
          <span className="font-bold"> intelligent systems</span> at the intersection of  
          <span className="font-bold"> deep learning, computer vision, and automation</span>.
          My expertise spans <span className="font-bold text-cmuDarkGray">mechanical design, medical imaging, AI-driven robotics, and computational modeling</span>,  
          with hands-on experience in <span className="font-bold text-cmuRed"> endovascular surgery automation</span>,  
          <span className="font-bold text-cmuRed"> transformer models for histopathology</span>, and  
          <span className="font-bold text-cmuRed"> real-time surgical tool tracking</span>.
        </p>
      </section>

      {/* 🚀 Featured Projects */}
      <section className="container mx-auto px-6 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-cmuDarkGray">Featured Projects</h2>
        <div className="flex flex-col items-center gap-10 mt-8">
          {[
            { title: "Hybrid CNN-Transformer", img: "/project1.png", desc: "AI model for cancer detection.", link: "/projects/cnn-transformer" },
            { title: "Telesurgery CV Algorithm", img: "/Project2.png", desc: "Guidewire tracking for surgeries.", link: "/projects/telesurgery" },
            { title: "Automated EV Charging Robot", img: "/Electron.png", desc: "Automated EV Chargers for EV.", link: "/projects/ev-charging-robot"}
          ].map((project, index) => (
            <Link key={index} href={project.link} className="bg-cmuLightGray shadow-md rounded-lg overflow-hidden block hover:shadow-lg w-full max-w-md">
              <Image src={project.img} width={500} height={300} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cmuDarkGray">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-cmuDarkGray">Let&apos;s Connect</h2>
        <p className="mt-4 text-lg text-gray-700">Reach out via LinkedIn or GitHub.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="https://www.linkedin.com/in/yshanker/">
            <button className="bg-cmuRed text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800">
              LinkedIn
            </button>
          </Link>
          <Link href="https://github.com/yrshanker">
            <button className="bg-cmuDarkGray text-white px-6 py-3 rounded-lg shadow-md hover:bg-black">
              GitHub
            </button>
          </Link>
        </div>
      </section>

      {/* 🔗 Footer */}
      <footer className="bg-cmuRed text-white py-8 w-full mt-12">
        <div className="container mx-auto text-center flex flex-col items-center space-y-4">
          {/* Contact Info */}
          <p className="text-lg">
            📧 Email: <a href="mailto:yashshanker10@gmail.com" className="hover:underline text-white">Yashraj Shanker</a>
          </p>
          <p className="text-lg">
            📞 Phone: <a href="tel:+12676902003" className="hover:underline text-white">Call Me</a>
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4">
            <Link href="https://www.linkedin.com/in/yshanker/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700">
                LinkedIn
              </button>
            </Link>
            <Link href="https://github.com/yrshanker" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900">
                GitHub
              </button>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300 mt-4">&copy; {new Date().getFullYear()} Yashraj Shanker. All rights reserved.</p>
        </div>
      </footer>

      {/* 🔼 Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-cmuRed text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-800 transition-opacity"
        >
          ⬆️ Top
        </button>
      )}
    </div>
  );
}
