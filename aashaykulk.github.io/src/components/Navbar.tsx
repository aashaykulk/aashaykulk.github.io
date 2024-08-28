// app/components/Navbar.tsx
import Link from "next/link";
import ProfileImage from "@/components/ProfileImage";

export default function Navbar() {
  return (
    <header className="w-full py-8 text-white">
      <nav className="container mx-auto flex flex-col items-center">
        {/* Container for Buttons and Line */}
        <div className="flex flex-col items-center">
        <ProfileImage className = "mt-5"></ProfileImage>
          {/* Buttons */}
          <div className="flex justify-center space-x-6">
            <Link href="/" className="px-3 py-2 text-blue-600 hover:bg-blue-800 rounded">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-green-600 hover:bg-green-800 rounded">
              About
            </Link>
            <Link href="/blog" className="px-3 py-2 text-red-600 hover:bg-red-800 rounded">
              Blog
            </Link>
            <Link href="/stuff" className="px-3 py-2 text-yellow-600 hover:bg-yellow-800 rounded">
              Stuff
            </Link>
          </div>
          {/* Centered Line */}
          <div className="border-t-2 border-white mt-4 w-80"></div> {/* Adjust width here */}
        </div>
      </nav>
    </header>
  );
}

