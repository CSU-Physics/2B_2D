"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-14">
        {/* Logo / Title */}
        <Link
          href="https://csu-physics.github.io/"
          className="text-lg font-semibold text-blue-700 ml-2 select-none outline-none"
        >
          CSU Physics
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 mr-2">
          <Link
            href="#About"
            className="hover:text-blue-600 select-none outline-none"
          >
            About
          </Link>

          {/* Theory Dropdown on Hover */}
          <div className="relative group select-none outline-none">
            <div className="flex items-center cursor-pointer hover:text-blue-600 select-none outline-none">
              Theory <ChevronDown size={16} className="ml-1" />
            </div>
            <div
              className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 select-none outline-none"
              tabIndex="-1"
            >
              <Link
                href="#lps"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md select-none outline-none"
              >
                Lippmann–Schwinger Equation
              </Link>
              <Link
                href="#NumImp"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md select-none cursor-pointer"
              >
                Numerical Implementation
              </Link>
            </div>
          </div>

          {/* Cases Dropdown on Hover */}
          <div className="relative group select-none outline-none">
            <div className="flex items-center cursor-pointer hover:text-blue-600 select-none outline-none">
              Cases & Benchmarks <ChevronDown size={16} className="ml-1" />
            </div>
            <div
              className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 select-none outline-none"
              tabIndex="-1"
            >
              <Link
                href="#Hydro"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md select-none outline-none"
              >
                Hydrogen in 2D
              </Link>
              <Link
                href="#Deutro"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md select-none outline-none"
              >
                Deuteron in 2D
              </Link>
              <Link
                href="#Excit"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md select-none outline-none"
              >
                Exciton in 2D
              </Link>
            </div>
          </div>

          <Link
            href=""
            className="hover:text-blue-600 select-none outline-none"
          >
            Guide
          </Link>
          <Link
            href=""
            className="hover:text-blue-600 select-none outline-none"
          >
            Cite this work
          </Link>
        </div>
      </div>
    </nav>
  );
}
