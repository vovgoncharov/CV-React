import Title from "./Title";
import { useState } from "react";
const Education = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="education">
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
            <Title className="title">Education</Title>
            <div className="time-work">
              <p
                className={
                  props.themeOwn ? "own-block__text" : "own-block__text shadow"
                }
              >
                Bachelor's degree, Donbass State Pedagogical University
              </p>
              <p
                className={
                  props.themeOwn
                    ? "own-block__facult"
                    : "own-block__facult shadow"
                }
              >
                Physical education
              </p>
              <p className="own-block__time-work">September 2014 - June 2018</p>
            </div>
            <div className="time-work">
              <p
                className={
                  props.themeOwn ? "own-block__text" : "own-block__text shadow"
                }
              >
                Junior Specialist, Bakhmut Industrial College
              </p>
              <p
                className={
                  props.themeOwn
                    ? "own-block__facult"
                    : "own-block__facult shadow"
                }
              >
                Installation and operation of electrical equipment of
                enterprises and civil structures
              </p>
              <p className="own-block__time-work">September 2006 - July 2010</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Education;
