import Title from "./Title";
import courses from "../cours";
import { useState } from "react";
const Courses = () => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="courses">
        <div className="container">
          <div
            className={
              theme
                ? `details-block own-block details-them`
                : `details-block own-block details-theme`
            }
            onMouseEnter={handleChangeEnter}
            onMouseLeave={handleChangeLeave}
          >
            <Title className="title">courses</Title>
            {courses.map((course) => {
              return (
                <div key={course.id} className="time-work">
                  <p className="own-block__text">{course.title}</p>
                  <p className="own-block__time-work">{course.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Courses;
