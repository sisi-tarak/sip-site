import React from "react";
import Cover from "../Cover/Cover";
import CourseCard from "../CourseCard/CourseCard";
import { Button } from "../ui/button";

const Homepage = () => {
  return (
    <>
      <Cover />
      <Button className="bg-headColor text-backgroundColor font-semibold text-xl px-8 py-6">
        View Button
      </Button>
      <CourseCard />
    </>
  );
};

export default Homepage;
