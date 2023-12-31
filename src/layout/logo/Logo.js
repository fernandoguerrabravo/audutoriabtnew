import React from "react";
//import LogoLight2x from "../../images/logo2x.png";
//import LogoDark2x from "../../images/logo-dark2x.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <img className="logo-light logo-img" src={`${process.env.PUBLIC_URL}/LogoBaker.png`} alt="logo" />
      <img className="logo-dark logo-img" src={`${process.env.PUBLIC_URL}/LogoBaker.png`} alt="logo" />
    </Link>
  );
};

export default Logo;
