import React, { useEffect, useState } from "react";
import { Course } from "../../app/models/course";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/bootcamp")
      .then((response) => response.json())
      .then((data) => setCourses(data.data.bootcamps));
  }, []);

  return (
    <>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </ul>
    </>
  );
};

export default Courses;
