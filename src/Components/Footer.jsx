import links from "../links";
const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="foot-block">
            <ul className="social social-foot">
              {links.map((link) => (
                <li key={link.id} className="item">
                  <a
                    href={link.link}
                    target="_blank"
                    className={
                      props.themeOwn
                        ? "own-block__link"
                        : "own-block__link shadow"
                    }
                    rel="noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className={props.themeOwn ? "year" : "year shadow"}>2021</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
