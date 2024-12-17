"use client";

import {
  AccountBalance,
  Brush,
  Business,
  Campaign,
  Code,
  DataArray,
  FitnessCenter,
  Person,
} from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const CourseCategories = () => (
  <div className="px-4 py-16">
    <Fade direction="up">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Explore Our Courses
      </h2>
    </Fade>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
      {[
        { icon: Code, title: "Web Development", count: "58 Courses" },
        { icon: Brush, title: "UI/UX Design", count: "87 Courses" },
        {
          icon: AccountBalance,
          title: "Finance & Account",
          count: "130 Courses",
        },
        { icon: Campaign, title: "Marketing", count: "65 Courses" },
        { icon: Person, title: "Personal Development", count: "36 Courses" },
        { icon: DataArray, title: "Data Science", count: "19 Courses" },
        { icon: Business, title: "Management", count: "42 Courses" },
        { icon: FitnessCenter, title: "Health & Fitness", count: "52 Courses" },
      ].map((category, index) => (
        <Fade key={index} delay={index * 100}>
          <Card className="p-6 shadow">
            <CardContent className="text-center">
              <category.icon className="mb-4 text-blue-600" fontSize="large" />
              <h3 className="mb-2 font-bold">{category.title}</h3>
              <p className="text-gray-600">{category.count}</p>
            </CardContent>
          </Card>
        </Fade>
      ))}
    </div>
  </div>
);

export default CourseCategories;
