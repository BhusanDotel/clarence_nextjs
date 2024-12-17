"use client";

import {
  AttachMoney,
  OndemandVideoOutlined,
  Support,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Fade } from "react-awesome-reveal";

const FeatureCard = ({ icon: Icon, number, title, description }) => (
  <Fade cascade damping={0.1}>
    <div className="group relative">
      <div className="absolute left-5 z-10 rounded-b-lg bg-blue-600 px-2 py-1 text-white">
        {number}
      </div>
      <div className="relative flex flex-col items-center rounded-lg border border-transparent p-8 text-center shadow transition-all duration-300 group-hover:rounded-tr-[50px] group-hover:border-blue-600">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-100 opacity-0 duration-300 group-hover:opacity-20" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
            <Icon sx={{ fontSize: "3rem" }} className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </Fade>
);

const Features = () => {
  const features = [
    {
      icon: Support,
      number: "01",
      title: "Exclusive Advisor",
      description: "Get personalized advice from industry experts.",
    },
    {
      icon: OndemandVideoOutlined,
      number: "02",
      title: "Video Tutorial",
      description: "Access a rich library of video tutorials.",
    },
    {
      icon: AttachMoney,
      number: "03",
      title: "Affordable Price",
      description: "Learn without breaking the bank.",
    },
    {
      icon: SupportAgentOutlined,
      number: "04",
      title: "Lifetime Support",
      description: "We're here to help you every step of the way.",
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-16">
      <Fade direction="up">
        <div className="mb-12 text-center">
          <p className="mb-2 font-medium text-blue-600">Features</p>
          <h2 className="text-3xl font-bold">One Platform, Many Courses</h2>
        </div>
      </Fade>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            number={feature.number}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
