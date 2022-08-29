const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="foot-block">
            <ul className="social social-foot">
              <li className="item">
                <a
                  href="https://www.linkedin.com/in/volodymyr-honcharov-69098615b/?locale=en_US"
                  target="_blank"
                  className="own-block__link"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li class="item">
                <a
                  href="https://www.instagram.com/vova__honcharov/"
                  target="_blank"
                  className="own-block__link"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.facebook.com/volodymyr.honcharov/"
                  target="_blank"
                  className="own-block__link"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="item">
                <a
                  href="https://github.com/vovgoncharov"
                  target="_blank"
                  className="own-block__link"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.codewars.com/users/vovgoncharov"
                  target="_blank"
                  className="own-block__link"
                  rel="noreferrer"
                >
                  Codewars
                </a>
              </li>
            </ul>
            <p className="year">2021</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
