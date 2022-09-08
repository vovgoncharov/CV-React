import Title from "./Title";
import { useState } from "react";
const Education = () => {
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
              <p className="own-block__text">
                Bachelor's degree, Donbass State Pedagogical University
              </p>
              <p className="own-block__facult">Physical education</p>
              <p className="own-block__time-work">September 2014 - June 2018</p>
            </div>
            <div className="time-work">
              <p className="own-block__text">
                Junior Specialist, Bakhmut Industrial College
              </p>
              <p className="own-block__facult">
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
