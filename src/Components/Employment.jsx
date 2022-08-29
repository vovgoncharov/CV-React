import Title from "./Title";
import { useState } from "react";
const Employment = () => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="employment-history">
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
            <Title className="title">Employment history</Title>
            <div className="time-work">
              <p className="own-block__text">
                Security Service, Smerch Private Security LLC, Kyiv
              </p>
              <p className="own-block__time-work">April 2019 — present</p>
            </div>
            <div className="time-work">
              <p className="own-block__text">
                Fitness Trainer, SportLife, Kyiv
              </p>
              <p className="own-block__time-work">
                September 2017 - April 2019
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">
                Security Service, TSUM Kyiv Department Store, Kyiv
              </p>
              <p className="own-block__time-work">
                November 2016 - September 2017
              </p>
            </div>
            <div className="time-work">
              <p className="own-block__text">
                Police Officer, Ministry of Internal Affairs of Ukraine, Bakhmut
              </p>
              <p className="own-block__time-work">March 2012 - May 2015</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Employment;
