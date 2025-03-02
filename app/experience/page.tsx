"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ExperienceEntryProps {
  id: string;
  year: string;
  title: string;
  duration: string;
  imageSrc?: string;
  expanded: { [key: string]: boolean };
  toggleExpand: (id: string) => void;
  visible: boolean;
  children?: React.ReactNode;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ id, year, title, duration, imageSrc, expanded, toggleExpand, visible, children }) => (
  <div 
    id={id} 
    className={`timeline-item relative flex transition-all duration-700 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`} 
  > 
    <div className="w-1/3 flex items-center justify-end pr-6">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={`${title} Logo`}
          width={120} 
          height={120}
          className="rounded-lg shadow-md mr-6"
        />
      )}
      <p className="text-lg font-bold text-cmuRed">{year}</p>
    </div>

    <div className="relative flex items-center justify-center w-12">
      <div className="w-6 h-6 bg-cmuRed rounded-full"></div>
    </div>

    <div className="w-1/2 pl-16 text-right"> 
      <button onClick={() => toggleExpand(id)} className="w-full text-right text-2xl font-bold text-cmuRed">
        {title} <span className="ml-2">{expanded[id] ? "▲" : "▼"}</span>
      </button>
      <p className="text-gray-500 text-sm mt-1">{duration}</p>
      {expanded[id] && (
        <div className="mt-3 text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">
          <ul className="list-disc ml-6">{children}</ul>
        </div>
      )}
    </div>
  </div>
);

export default function Experience() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

  const observer = useRef<IntersectionObserver | null>(null);

  const toggleExpand = (index: string) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".timeline-item").forEach((el) => {
      observer.current?.observe(el);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center relative">
      <Navbar />

      <section className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-cmuRed">My Professional and Academic Journey</h1>
        <p className="mt-4 text-lg text-gray-700">
          A timeline of my education, experiences, and leadership from Drexel University in 2018 to Carnegie Mellon University in 2023 to my current roles.
        </p>
      </section>

      <section className="container mx-auto px-6 py-12 max-w-4xl relative flex">
        <div className="sticky top-20 w-0.5 bg-cmuRed h-screen left-1/2 transform -translate-x-1/2"></div>

        <div className="flex flex-col w-full ml-16 space-y-48">
          
          <ExperienceEntry 
            id="drexelStart" 
            year="2018"
            title="Started Bachelor of Science in Mechanical Engineering - Drexel University" 
            duration="September 2018" 
            imageSrc="/drexel.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={true} 
          />

          {/* Add other ExperienceEntry components here */}

            <ExperienceEntry 
            id="catalyx" 
            year="2021" 
            title="Junior Systems Engineer - Catalyx (Xyntek | CXV Global)" 
            duration="September 2021 - March 2022" 
            imageSrc="/catalyx.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["catalyx"]}
          >
            <li>Achieved 98% success on Factory Acceptance Test for a carton inspection module in cosmetics industry.</li>
            <li>Programmed PreciseFlex 400 in Visual Basic, boosting pick-and-place efficiency by 20%.</li>
            <li>Developed an automated needle assembly prototype with 10mm precision for pharmaceutical clients.</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="teamElectron" 
            year="2022" 
            title="Team Electron - Drexel Senior Design Project" 
            duration="September 2022 - May 2023" 
            imageSrc="/Electron.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["teamElectron"]}
          >
            <li>Designed CAD models for a multi-axis robot, demonstrating proof of concept for automated EV charging solutions.</li>
            <li>Developed multiple robot arm iterations, assessing feasibility across various environments and scenarios.</li>
            <li>Integrated and implemented a camera vision system, enabling robot arm simulation in static and dynamic
            environments.</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="nasa" 
            year="2022" 
            title="Founded NASA Lunabotics Club & Senior Design Project - Drexel University" 
            duration="September 2022 - May 2023" 
            imageSrc="/nasa.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["nasa"]}
          >
            <li>Established and led Drexel&apos;s first Lunabotics team for NASA&apos;s competition.</li>
            <li>Designed CAD models for a multi-axis robot for automated EV charging solutions.</li>
            <li>Integrated a camera vision system for real-time robot arm simulations.</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="cmustart" 
            year="2018" 
            title="Started Masters of Science in Mechanical Engineering - Carnegie Mellon University" 
            duration="August 2023" 
            imageSrc="/cmu.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={true} 
          />          

          <ExperienceEntry 
            id="cmu" 
            year="2023" 
            title="Graduate Researcher - Carnegie Mellon University" 
            duration="August 2023 - Present" 
            imageSrc="/cerlab.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["cmu"]}
          >
            <li>Developed a real-time CV algorithm for guidewire and catheter tracking in surgeries.</li>
            <li>Designed a backpropagation algorithm for 2D-3D medical image registration.</li>
            <li>Built a hybrid classical-deep learning model for unimodal medical image registration.</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="autonomousVehicle" 
            year="2023" 
            title="Autonomous Vehicle - Modern Control Theory Project" 
            duration="August 2023 - December 2023" 
            imageSrc="/mct.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["autonomousVehicle"]}
          >
            <li>Developed PID, LQR, and full-state controllers, improving autonomous navigation and stability.</li>
            <li>Implemented A* path planning and EKF-SLAM for collision-free navigation and real-time localization.</li>
            <li>Designed and validated state-space models to ensure controllability, stability, and accurate vehicle dynamics.</li>
            <li>Optimized Python-based controllers, integrating sensor fusion and data visualization for performance analysis</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="taMaterialsProcessing" 
            year="2024" 
            title="Graduate TA - Materials Processing" 
            duration="January 2024 - May 2024" 
            imageSrc="/engineeringMaterial.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["taMaterialsProcessing"]}
          />


          <ExperienceEntry 
            id="centrillion" 
            year="2024" 
            title="Machine Learning & Data Science Intern - Centrillion Technology" 
            duration="June 2024 - August 2024" 
            imageSrc="/centrillion.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["centrillion"]}
          >
            <li>Designed and implemented clean room automation procedures using mobile robotics and imitation learning.</li>
            <li>Doubled workflow efficiency in DNA silicon chip production by integrating robotic automation solutions.</li>
            <li>Built a CNN to automate heatmap threshold prediction, reducing manual labeling in mice brain studies.</li>
            <li>Led ML & data science interns, streamlining workflows and CEO communication, improving project deliverables.</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="taControlTheory" 
            year="2024" 
            title="Graduate TA - Modern Control Theory" 
            duration="August 2024 - December 2024" 
            imageSrc="/mct.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["taControlTheory"]}
          />

          <ExperienceEntry 
            id="hybridCNNTransformer" 
            year="2024" 
            title="Hybrid CNN-Transformer Model for Cancer Detection" 
            duration="August 2024 - December 2024" 
            imageSrc="/cnn.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["hybridCNNTransformer"]}
          >
            <li>Created a Hybrid CNN-Transformer achieving 91.4% validation accuracy for detecting cancer in Whole Slide Images (WSIs).</li>
            <li>Engineered a hierarchical feature extraction pipeline leveraging U-Net, Vision Transformers (ViTs), and multi-
            resolution patching for improved tissue structure analysis.</li>
            <li>Used data augmentation to enhance robustness against staining variability and morphological differences.</li>
            <li>Explored Swin Transformers, ensembles, and attention-based loss for better feature extraction and generalization.</li>
          </ExperienceEntry>

          <ExperienceEntry 
            id="proboundAI" 
            year="2024" 
            title="AI Researcher - ProBound AI" 
            duration="October 2024 - January 2025" 
            imageSrc="/probound.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["proboundAI"]}
          >
            <li>Researched OpenAI, Google Gemini, AWS, and Meta Conversational AI LLMs to inform development strategies.</li>
            <li>Built a Hugging Face sentiment analysis model for foreclosure calls, improving customer insights.</li>
            <li>Developed and deployed conversational AI agents using Bland.ai for business consultant appointment workflows.</li>
            <li>Analyzed conversational AI tools (Bland.ai, Vapi.ai) for developer integration and use cases.</li>
          </ExperienceEntry>          

          <ExperienceEntry 
            id="taMechanics" 
            year="2024 - Present" 
            title="Graduate TA - Mechanics 2: 3D Mechanics" 
            duration="January 2024 - Present" 
            imageSrc="/mechanics.png"
            expanded={expanded} 
            toggleExpand={toggleExpand} 
            visible={visible["taMechanics"]}
          />
        </div>
      </section>

      <footer className="bg-cmuRed text-white text-center py-6 w-full mt-12">
        <p>&copy; {new Date().getFullYear()} Yashraj Shanker. All rights reserved.</p>
      </footer>
    </div>
  );
}
