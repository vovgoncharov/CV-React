import myPhoto from "../assets/img/51455879.jpeg";
import theme from "../assets/img/theme.svg";
const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-block">
            <img src={myPhoto} alt="name" className="header__photo" />
            <div className="header-text">
              <h1
                className={
                  props.themeOwn ? "header__title" : "header__title shadow"
                }
              >
                Volodymyr
                <br />
                Honcharov
              </h1>
              <p
                className={
                  props.themeOwn
                    ? "header__discription"
                    : "header__discription shadow"
                }
              >
                Junior Front-end Developer
              </p>
            </div>
            <img
              onClick={props.onHandleChangeOwn}
              src={theme}
              alt="name"
              className="header__theme"
            />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
