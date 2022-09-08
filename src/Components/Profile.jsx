import Title from "./Title";
import { useState } from "react";
const Profile = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="profile">
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
            <Title className="title">Profile</Title>
            <p
              className={
                props.themeOwn ? "own-block__text" : "own-block__text shadow"
              }
            >
              I am actively searching for the position of Front-end developer.
              <br />
              I deal with such technologies as:
              <br />
              - HTML5
              <br />
              - CSS (Flexbox, CSS Grid, SCSS)
              <br />
              - JavaScript ES6 (React)
              <br />
              - React (Redux Toolkit)
              <br />
              - Git
              <br />
              - Photoshop
              <br />- Figma
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
