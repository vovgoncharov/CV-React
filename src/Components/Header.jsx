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
              <h1 className="header__title">
                Volodymyr
                <br />
                Honcharov
              </h1>
              <p className="header__discription">Junior Frontend Developer</p>
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
