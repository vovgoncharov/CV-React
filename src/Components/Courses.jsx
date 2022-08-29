import Title from "./Title";
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
            <div className="time-work">
              <p className="own-block__text">
                Completion of English Language Dynamics Course, Michael Gott
                International
              </p>
              <p className="own-block__time-work">
                F E B R U A R Y 2 0 1 8 — F E B R U A R Y 2 0 1 8
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">
                Personal Trainer, Gym Instructor, Star Fitness
              </p>
              <p className="own-block__time-work">
                J U N E 2 0 1 7 — J U L Y 2 0 1 7
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">Gym Instructor, Sport Life</p>
              <p className="own-block__time-work">
                O C T O B E R 2 0 1 8 — N OV E M B E R 2 0 1 8
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">
                Basics of Web UI development 2020, Lviv IT School
              </p>
              <p className="own-block__time-work">
                J U L Y 2 0 2 1 — A U G U S T 2 0 2 1
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">CSS course, Sololearn</p>
              <p className="own-block__time-work">
                A U G U S T 2 0 2 1 — A U G U S T 2 0 2 1
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">JavaScript cource</p>
              <p className="own-block__time-work">
                S E P T E M B E R 2 0 2 1 — S E P T E M B E R 2 0 2 1
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">React + Redux</p>
              <p className="own-block__time-work">
                S E P T E M B E R 2 0 2 1 — O K T O B E R 2 0 2 1
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Courses;
