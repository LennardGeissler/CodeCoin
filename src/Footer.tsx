import React from "react";
import "./home.scss";

const Footer = () => {
  return (
    <footer>
      <div className="socialMedia">
        <a href="#"><img src="src/assets/twitter.png" alt="" /></a>
        <a href="#"><img src="src/assets/facebook.png" alt="" /></a>
        <a href="#"><img src="src/assets/instagram.png" alt="" /></a>
        <a href="#"><img src="src/assets/tiktok.png" alt="" /></a>
      </div>
      <div className="links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">AGB</a>
      </div>
    </footer>
  );
}

export default Footer;