import Title from "./Title";
import { useState } from "react";

const Details = (props) => {
  const [theme, setTheme] = useState(true);
  const handleChangeEnter = () => {
    setTheme(false);
  };
  const handleChangeLeave = () => setTheme(true);
  return (
    <>
      <section className="details">
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
            <Title className="title">Details</Title>
            <a
              href="#"
              className={
                props.themeOwn
                  ? "details__gmail gmail-pro"
                  : "details__gmail gmail-pro gmail"
              }
            >
              deykdog@gmail.com
            </a>
            <p className="own-block__text phone">0686691755</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Details;
