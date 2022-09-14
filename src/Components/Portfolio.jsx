import Title from "./Title";
import images from "../img";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <Title className="title">Portfolio</Title>
        <div className="portfolio-wrap">
          <ul className="menu-portfolio">
            {images.map((img) => (
              <li key={img.id} className="portfolio-item">
                <a href={img.link} target="_blanck" className="portfolio-link">
                  <img src={img.image} alt="" className="portfolio-img" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
