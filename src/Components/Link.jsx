import Title from "./Title";
import links from "../links";
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
              {links.map((link) => (
                <li
                  key={link.id}
                  className={props.themeOwn ? "item" : "item shadow"}
                >
                  <a
                    href={link.link}
                    target="_blank"
                    className="own-block__link gmail-pro"
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Link;
