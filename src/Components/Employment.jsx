import Title from "./Title";
import { useState } from "react";
const Employment = (props) => {
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
              <p
                className={
                  props.themeOwn ? "own-block__text" : "own-block__text shadow"
                }
              >
                Security Service, Smerch Private Security LLC
              </p>
              <p className="own-block__time-work">April 2019 - present</p>
            </div>
            <div className="time-work">
              <p
                className={
                  props.themeOwn ? "own-block__text" : "own-block__text shadow"
                }
              >
                Fitness Trainer, SportLife
              </p>
              <p className="own-block__time-work">
                September 2017 - April 2019
              </p>
            </div>
            <div className="time-work">
              <p
                className={
                  props.themeOwn ? "own-block__text" : "own-block__text shadow"
                }
              >
                Security Service, TSUM Kyiv Department Store
              </p>
              <p className="own-block__time-work">
                November 2016 - September 2017
              </p>
            </div>
            <div className="time-work">
              <p
                className={
                  props.themeOwn ? "own-block__text" : "own-block__text shadow"
                }
              >
                Police Officer, Ministry of Internal Affairs of Ukraine
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
