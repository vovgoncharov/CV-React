import Title from "./Title";
import { useState } from "react";
const Languages = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="languages">
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
            <Title className="title">languages</Title>
            <div className="progress-bar">
              <div className="bar-block">
                <p className="fast-text">Ukrainian</p>
                <div
                  className={
                    props.themeOwn ? "ua theme-pro" : "ua theme-pro theme"
                  }
                ></div>
              </div>
              <div className="bar-block">
                <p className="fast-text">English</p>
                <div
                  className={
                    props.themeOwn ? "en theme-pro" : "en theme-pro theme"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Languages;
