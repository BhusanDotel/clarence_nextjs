"use client";

import {
  AccountCircle,
  SchoolOutlined,
  SubtitlesOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import heroImage from "../assets/homeImages/hero-section-image.jpg";
import Image from "next/image";

const Hero = () => (
  <Fade>
    <div className="bg-gray-900 px-4 pb-0 pt-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold">
              Creating a Better Future through Education
            </h1>
            <p className="mb-8 text-gray-300">
              Transform your career with our expert-led online courses
            </p>
            <div className="flex space-x-4">
              <Button variant="contained" className="bg-blue-600">
                All Courses
              </Button>
              <Button variant="outlined" className="border-white text-white">
                Contact Us
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-4">
                <AccountCircle
                  style={{ fontSize: 50 }}
                  className="text-gray-400"
                />
                <AccountCircle
                  style={{ fontSize: 50 }}
                  className="text-gray-300"
                />
                <AccountCircle
                  style={{ fontSize: 50 }}
                  className="text-gray-200"
                />
              </div>
              <span>24k+ Happy Students</span>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <Image
                src={heroImage}
                alt="Students learning"
                className="h-auto w-full rounded-tl-2xl rounded-tr-[13rem]"
              />

              <div className="absolute -top-6 left-4 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg p-1">
                    <SchoolOutlined
                      className="text-blue-600"
                      sx={{ fontSize: "3rem" }}
                    />
                  </div>
                  <div className="text-gray-900">
                    <p className="text-2xl font-bold">28k</p>
                    <p className="text-sm">Total Students</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-4 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg p-1">
                    <SubtitlesOutlined
                      className="text-blue-600"
                      sx={{ fontSize: "3rem" }}
                    />
                  </div>
                  <div className="text-gray-900">
                    <p className="text-2xl font-bold">529+</p>
                    <p className="text-sm">Total Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fade>
);

export default Hero;
