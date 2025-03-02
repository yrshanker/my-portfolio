// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";

// const skillsData = [
//   { name: "Python", level: 90 },
//   { name: "TensorFlow / PyTorch", level: 85 },
//   { name: "Computer Vision (OpenCV, YOLO)", level: 88 },
//   { name: "Machine Learning", level: 80 },
//   { name: "Data Science & Analytics", level: 75 },
//   { name: "Robotics (ROS, Gazebo, MoveIt)", level: 82 },
//   { name: "Cloud & DevOps (AWS, Docker, Kubernetes)", level: 70 },
//   { name: "SQL & Databases", level: 65 },
// ];

// export default function SkillsSection() {
//   const [skills, setSkills] = useState(skillsData);

//   const handleSliderChange = (index, event) => {
//     const newSkills = [...skills];
//     newSkills[index].level = event.target.value;
//     setSkills(newSkills);
//   };

//   return (
//     <section className="container mx-auto px-6 py-12">
//       <h2 className="text-4xl font-bold text-center text-cmuRed mb-6">Skills & Proficiency</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {skills.map((skill, index) => (
//           <div key={index} className="flex flex-col">
//             {/* Skill Name & Level */}
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-lg font-semibold">{skill.name}</h3>
//               <span className="text-sm font-bold text-gray-700">{skill.level}%</span>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-300 rounded-full h-4 relative overflow-hidden">
//               <div
//                 className="bg-cmuRed h-4 rounded-full transition-all duration-500"
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>

//             {/* Slider to adjust skill level */}
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={skill.level}
//               className="mt-2 cursor-pointer"
//               onChange={(event) => handleSliderChange(index, event)}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }








// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";

// const skillsData = [
//   { name: "Python", level: 90 },
//   { name: "TensorFlow / PyTorch", level: 85 },
//   { name: "Computer Vision (OpenCV, YOLO)", level: 88 },
//   { name: "Machine Learning", level: 80 },
//   { name: "Data Science & Analytics", level: 75 },
//   { name: "Robotics (ROS, Gazebo, MoveIt)", level: 82 },
//   { name: "Cloud & DevOps (AWS, Docker, Kubernetes)", level: 70 },
//   { name: "SQL & Databases", level: 65 },
// ];

// export default function SkillsSection() {
//   const [skills, setSkills] = useState(skillsData);

//   const handleSliderChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
//     const newSkills = [...skills];
//     newSkills[index].level = parseInt(event.target.value, 10);
//     setSkills(newSkills);
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
//       {/* 🟥 Include Navbar for visibility */}
//       <Navbar />

//       {/* 🏆 Skills Section */}
//       <section className="container mx-auto px-6 py-12">
//         <h2 className="text-4xl font-bold text-center text-cmuRed mb-6">Skills & Proficiency</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className="flex flex-col">
//               {/* Skill Name & Level */}
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-lg font-semibold text-cmuDarkGray">{skill.name}</h3>
//                 <span className="text-sm font-bold text-cmuRed">{skill.level}%</span>
//               </div>

//               {/* 🎯 Progress Bar with CMU Theme */}
//               <div className="w-full bg-gray-300 rounded-full h-4 relative overflow-hidden">
//                 <div
//                   className="bg-cmuRed h-4 rounded-full transition-all duration-500"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>

//               {/* 🔧 Interactive Skill Slider */}
//               <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={skill.level}
//                 className="mt-2 cursor-pointer accent-cmuRed"
//                 onChange={(event) => handleSliderChange(index, event)}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }













"use client";

import Navbar from "@/components/Navbar";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 65 },
      { name: "R", level: 55 },
      { name: "SQL", level: 70 },
      { name: "C++", level: 55 },
      { name: "MATLAB", level: 70 },
      { name: "Bash", level: 75 }
    ],
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 88 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Pandas", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "CNNs & Deep Learning", level: 92 },
      { name: "Vision Transformers (ViTs)", level: 87 },
      { name: "NLP", level: 50 },
      { name: "Feature Engineering", level: 78 },
    ],
  },
  {
    category: "Robotics & Automation",
    skills: [
      { name: "ROS2 (Robot Operating System)", level: 80 },
      { name: "Motion Control", level: 85 },
      { name: "Imitation Learning", level: 75 },
      { name: "Mobile Robotics", level: 82 },
      { name: "Computer Vision for Autonomous Systems", level: 87 },
      { name: "PLC Programming", level: 70 },
      { name: "Mechatronics", level: 80 },
    ],
  },
  {
    category: "Mechanical Design & Simulation",
    skills: [
      { name: "SolidWorks", level: 85 },
      { name: "Fusion 360", level: 80 },
      { name: "Abaqus CAE", level: 78 },
      { name: "Ansys Workbench", level: 82 },
      { name: "AutoCAD", level: 75 },
      { name: "Finite Element Analysis (FEA)", level: 85 },
      { name: "GD&T", level: 80 },
      { name: "CNC Machining", level: 75 },
      { name: "3D Printing", level: 88 },
      { name: "Injection Molding", level: 72 },
    ],
  },
  {
    category: "Control Systems & Autonomous Vehicles",
    skills: [
      { name: "PID, LQR, Full-State Control", level: 88 },
      { name: "A* Path Planning", level: 85 },
      { name: "EKF-SLAM", level: 82 },
      { name: "Sensor Fusion", level: 80 },
      { name: "Real-Time Navigation", level: 85 },
    ],
  },
  {
    category: "Cloud Computing & Deployment",
    skills: [
      { name: "AWS (EC2, S3, RDS, Lambda)", level: 80 },
      { name: "Google Cloud Platform (GCP)", level: 75 },
      { name: "Docker", level: 85 },
      { name: "FastAPI", level: 78 },
    ],
  },
  {
    category: "Software & Tools",
    skills: [
      { name: "Ansys", level: 85 },
      { name: "Abaqus CAE", level: 80 },
      { name: "OpenCV", level: 90 },
      { name: "SQL Databases", level: 82 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      {/* 🟥 Include Navbar */}
      <Navbar />

      {/* 🏆 Skills Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-cmuRed mb-10">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category, catIndex) => (
            <div key={catIndex} className="bg-gray-100 shadow-lg p-6 rounded-lg">
              {/* 🏷 Category Title */}
              <h3 className="text-2xl font-bold text-cmuDarkGray mb-4">{category.category}</h3>

              {category.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  {/* Skill Name & Percentage */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold text-cmuRed">{skill.level}%</span>
                  </div>

                  {/* 🎯 Progress Bar */}
                  <div className="w-full bg-gray-300 rounded-full h-4 relative overflow-hidden">
                    <div
                      className="bg-cmuRed h-4 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
