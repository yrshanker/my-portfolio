import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Ensure Navbar is Included */}
      <Navbar />

      <div 
        className="flex flex-col items-center py-12 flex-grow"
        style={{
          backgroundImage: "url('/resume-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1 className="text-5xl font-bold text-white bg-cmuRed px-6 py-3 rounded-md shadow-lg mb-8">
          My Resumes
        </h1>

        {/* Resume Section */}
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-10 items-center max-w-3xl">
          
          {/* AI & ML Resume */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full text-center">
            <h2 className="text-2xl font-semibold text-cmuDarkGray mb-4">AI & Machine Learning Resume</h2>
            {/* Mini PDF Viewer */}
            <iframe src="/Resume_AIML.pdf" className="w-full h-64 border border-gray-300 rounded-md mb-4"></iframe>
            <div className="flex justify-center gap-6">
              <Link href="/Resume_AIML.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-cmuRed text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800">
                  View Full Resume
                </button>
              </Link>
              <a href="/Resume_AIML.pdf" download="Yashraj_Shanker_AIML_Resume.pdf">
                <button className="bg-cmuDarkGray text-white px-6 py-3 rounded-lg shadow-md hover:bg-black">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          {/* Mechanical Engineering Resume */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full text-center">
            <h2 className="text-2xl font-semibold text-cmuDarkGray mb-4">Mechanical Engineering Resume</h2>
            {/* Mini PDF Viewer */}
            <iframe src="/Resume_Mech.pdf" className="w-full h-64 border border-gray-300 rounded-md mb-4"></iframe>
            <div className="flex justify-center gap-6">
              <Link href="/Resume_Mech.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-cmuRed text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800">
                  View Full Resume
                </button>
              </Link>
              <a href="/Resume_Mech.pdf" download="Yashraj_Shanker_Mech_Resume.pdf">
                <button className="bg-cmuDarkGray text-white px-6 py-3 rounded-lg shadow-md hover:bg-black">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
