import Title from "./Title";
import { useState } from "react";
const Link = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => setTheme(false);
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section id="links">
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
            <Title className="title">links</Title>
            <ul className="social">
              <li className="item">
                <a
                  href="https://www.linkedin.com/in/volodymyr-honcharov-69098615b/?locale=en_US"
                  target="_blank"
                  className="own-block__link gmail-pro"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.instagram.com/vova__honcharov/"
                  target="_blank"
                  className="own-block__link gmail-pro"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.facebook.com/volodymyr.honcharov/"
                  target="_blank"
                  className="own-block__link gmail-pro"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="item">
                <a
                  href="https://github.com/vovgoncharov"
                  target="_blank"
                  className="own-block__link gmail-pro"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.codewars.com/users/vovgoncharov"
                  target="_blank"
                  className="own-block__link gmail-pro"
                  rel="noreferrer"
                >
                  Codewars
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Link;
