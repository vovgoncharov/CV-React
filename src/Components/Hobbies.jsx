import Title from "./Title";
import { useState } from "react";
const Hobbies = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="hobbies">
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
            <Title className="title">hobbies</Title>
            <p
              className={
                props.themeOwn ? "own-block__text" : "own-block__text shadow"
              }
            >
              Travelling, Reading, Chess, Football, Computer games
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hobbies;
