import "./header.css";
import Logo from "./../../assets/Banco_Pichincha_logo_2018.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="pichinca" />
      </nav>
    </header>
  );
};

export default Header;
