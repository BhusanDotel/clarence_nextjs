"use client";

import CourseCategories from "../components/CourseCategories";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <PopularCourses />
      <CourseCategories />
      <Footer />
    </main>
  );
}
