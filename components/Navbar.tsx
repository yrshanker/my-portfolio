import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-cmuRed text-white py-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Name on the left */}
        <h1 className="text-3xl font-bold">Yashraj Shanker</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link href="/experience" className="hover:text-gray-300">Experience</Link></li>
          <li><Link href="/skills" className="hover:text-gray-300">Skills</Link></li>
          <li><Link href="/resume" className="hover:text-gray-300">Resume</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
