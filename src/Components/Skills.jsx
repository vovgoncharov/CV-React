import Title from "./Title";
import { useState } from "react";
const Skills = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="skills">
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
            <Title className="title">Skills</Title>
            <div className="progress">
              <div
                className={
                  !theme ? "progress-bar skills-right" : "progress-bar"
                }
              >
                <div className="bar-block">
                  <p className="fast-text">Fast Learner</p>
                  <div
                    className={
                      props.themeOwn ? "fast theme-pro" : "fast theme-pro theme"
                    }
                  ></div>
                </div>
                <div className="bar-block">
                  <p className="fast-text">Effective Time Management</p>
                  <div
                    className={
                      props.themeOwn ? "time theme-pro" : "time theme-pro theme"
                    }
                  ></div>
                </div>
                <div className="bar-block">
                  <p className="fast-text">Adaptability</p>
                  <div
                    className={
                      props.themeOwn
                        ? "adapt theme-pro"
                        : "adapt theme-pro theme"
                    }
                  ></div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="bar-block">
                  <p className="fast-text">Ability to Work in a Team</p>
                  <div
                    className={
                      props.themeOwn ? "team theme-pro" : "team theme-pro theme"
                    }
                  ></div>
                </div>
                <div className="bar-block">
                  <p className="fast-text">Communication Skills</p>
                  <div
                    className={
                      props.themeOwn ? "com theme-pro" : "com theme-pro theme"
                    }
                  ></div>
                </div>
                <div className="bar-block">
                  <p className="fast-text">Computer Skills</p>
                  <div
                    className={
                      props.themeOwn ? "comp theme-pro" : "comp theme-pro theme"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
