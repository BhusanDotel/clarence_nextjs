"use client";

import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalPhoneOutlined,
  Mail,
  PinDrop,
  SchoolOutlined,
  Twitter,
} from "@mui/icons-material";
import { Button, Input } from "@mui/material";
import { Fade } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-16">
      <Fade cascade damping={0.1}>
        <div className="mx-auto mb-16 max-w-7xl px-4">
          <div className="rounded-2xl bg-blue-50 p-8">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-6 text-gray-600">
                Stay updated with our latest courses and educational content
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center">
                  <SchoolOutlined className="mr-2 h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold">Clarence Academy</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Empowering minds through quality education and innovative
                  learning experiences.
                </p>
                <div className="mt-6 flex space-x-4">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                  <LinkedIn className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                </div>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-gray-900">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Teachers & Staff
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Blog & News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-gray-900">
                  Popular Courses
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Mobile Development
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-gray-900">
                  Contact Info
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <PinDrop className="mr-2 h-5 w-5 text-blue-600" />
                    123 Education St, Learning City
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-blue-600" />
                    info@clarenceacademy.com
                  </li>
                  <li className="flex items-center">
                    <LocalPhoneOutlined className="mr-2 h-5 w-5 text-blue-600" />
                    +1 (555) 123-4567
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-6">
              <div className="flex flex-col items-center justify-between space-y-4 text-gray-600 md:flex-row md:space-y-0">
                <div>
                  © {new Date().getFullYear()} Clarence Academy. All rights
                  reserved.
                </div>
                <div className="flex space-x-6">
                  <div
                    onClick={() => {
                      window.location.href = `${baseURL}/terms-and-conditions`;
                    }}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    Terms and Conditions
                  </div>

                  <div
                    onClick={() => {
                      window.location.href = `${baseURL}/privacy`;
                    }}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    Privacy Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
