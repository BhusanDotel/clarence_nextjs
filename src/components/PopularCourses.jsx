"use client";

import {
  Book,
  ChevronLeft,
  ChevronRight,
  LockClockOutlined,
  Star,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const courses = [
  {
    id: 1,
    title: "Basic Fundamentals of Interior & Graphics Design",
    price: 50.0,
    rating: 5,
    reviews: 21,
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "Laravel",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205456.jpg?t=st=1729677373~exp=1729680973~hmac=34f2136e2eafb3f16a1da8b6819fc49f15a26004442e946eab469fd44fb60970&w=1380",
  },
  {
    id: 2,
    title: "WordPress for Beginners – Master WordPress",
    price: 50.0,
    rating: 5,
    reviews: 21,
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "PHP",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205456.jpg?t=st=1729677373~exp=1729680973~hmac=34f2136e2eafb3f16a1da8b6819fc49f15a26004442e946eab469fd44fb60970&w=1380",
  },
  {
    id: 3,
    title: "Financial Security Thinking and Principles Theory",
    price: 50.0,
    rating: 5,
    reviews: 21,
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "WordPress",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205456.jpg?t=st=1729677373~exp=1729680973~hmac=34f2136e2eafb3f16a1da8b6819fc49f15a26004442e946eab469fd44fb60970&w=1380",
  },
  {
    id: 4,
    title: "Basic Fundamentals of Interior & Graphics Design",
    price: 50.0,
    rating: 5,
    reviews: 21,
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "Laravel",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205456.jpg?t=st=1729677373~exp=1729680973~hmac=34f2136e2eafb3f16a1da8b6819fc49f15a26004442e946eab469fd44fb60970&w=1380",
  },
  {
    id: 5,
    title: "Financial Security Thinking and Principles Theory",
    price: 50.0,
    rating: 5,
    reviews: 21,
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "WordPress",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205456.jpg?t=st=1729677373~exp=1729680973~hmac=34f2136e2eafb3f16a1da8b6819fc49f15a26004442e946eab469fd44fb60970&w=1380",
  },
  {
    id: 6,
    title: "WordPress for Beginners – Master WordPress",
    price: 50.0,
    rating: 5,
    reviews: 21,
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "PHP",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205456.jpg?t=st=1729677373~exp=1729680973~hmac=34f2136e2eafb3f16a1da8b6819fc49f15a26004442e946eab469fd44fb60970&w=1380",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="m-4 overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-blue-500 px-4 py-1 text-white">
          ${course.price.toFixed(2)}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center">
          {[...Array(course.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
          ))}
          <span className="ml-2 text-gray-600">({course.reviews})</span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
          {course.title}
        </h3>

        <div className="mb-4 flex items-center text-sm text-gray-600">
          <div className="mr-4 flex items-center">
            <Avatar className="mr-1 h-4 w-4" />
            <span>{course.students} Students</span>
          </div>
          <div className="mr-4 flex items-center">
            <Book className="mr-1 h-4 w-4" />
            <span>{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center">
            <LockClockOutlined className="mr-1 h-4 w-4" />
            <span>{course.hours} Hours</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-8 rounded-full bg-gray-200"></div>
            <span className="text-sm font-medium">{course.instructor}</span>
          </div>
          <span className="text-sm text-blue-500">{course.category}</span>
        </div>
      </div>
    </div>
  );
};

const PopularCourses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(courses.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const newTotalSlides = Math.ceil(courses.length / newItemsPerPage);

      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(newTotalSlides - 1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  const getVisibleCourses = () => {
    const startIdx = currentSlide * itemsPerPage;
    const visibleCourses = courses.slice(startIdx, startIdx + itemsPerPage);
    return visibleCourses;
  };

  return (
    <div className="mx-auto max-w-7xl px-8 py-8">
      <Fade direction="up">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h4 className="mb-2 text-blue-500">Our Courses List</h4>
            <h2 className="text-3xl font-bold">Most Popular Courses</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="rounded-full bg-blue-900 p-3 text-white transition-colors hover:bg-blue-600"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-blue-900 p-3 text-white transition-colors hover:bg-blue-600"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerPage)}%)`,
            }}
          >
            {getVisibleCourses().map((course, index) => (
              <div
                key={`${course.id}-${index}`}
                className="w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/3"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index ? "w-4 bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
};
export default PopularCourses;
