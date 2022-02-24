import React from "react";
import { Course } from "../../app/models/course";

interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  return (
    <>
      <li>{course.name}</li>
    </>
  );
};

export default CourseCard;
