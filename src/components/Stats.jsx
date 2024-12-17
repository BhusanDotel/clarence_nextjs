"use client";

import {
  Groups2Outlined,
  Person2Outlined,
  SchoolOutlined,
  ThumbsUpDownOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

const AnimatedNumber = ({ end, duration = 2000, suffix = "", start }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = parseInt(end);

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const easeOutQuad = (progress) => 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOutQuad(progress)
      );

      setCount(currentValue);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(updateCount);
      }
    };

    countRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, duration, start]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Stats = () => {
  const [visibleIndexes, setVisibleIndexes] = useState(Array(4).fill(false));

  const stats = [
    {
      icon: Groups2Outlined,
      number: "24",
      suffix: "k+",
      label: "Our Happy Students",
    },
    {
      icon: SchoolOutlined,
      number: "3",
      suffix: "k+",
      label: "Enrolled Learners",
    },
    {
      icon: Person2Outlined,
      number: "15",
      suffix: "k+",
      label: "Expert Instructor",
    },
    {
      icon: ThumbsUpDownOutlined,
      number: "98",
      suffix: "%",
      label: "Satisfaction Rate",
    },
  ];

  const handleVisibilityChange = (index, inView) => {
    setVisibleIndexes((prev) => {
      const updated = [...prev];
      updated[index] = inView;
      return updated;
    });
  };

  return (
    <div className="bg-gray-50 px-4 py-16">
      <Fade direction="up">
        <h2 className="mb-12 text-center">
          <span className="text-3xl font-bold">Trusted by </span>
          <span className="text-3xl font-bold text-blue-600">Companies</span>
          <span className="text-3xl font-bold"> Achievements</span>
        </h2>
      </Fade>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Fade
            key={index}
            delay={index * 200}
            onVisibilityChange={(inView) =>
              handleVisibilityChange(index, inView)
            }
          >
            <div className="relative rounded-lg border-2 border-dotted border-gray-300 p-6 text-center">
              <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-2 text-4xl font-bold text-gray-900">
                <AnimatedNumber
                  end={stat.number}
                  duration={2000}
                  suffix={stat.suffix}
                  start={visibleIndexes[index]}
                />
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};
export default Stats;
