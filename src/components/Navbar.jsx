import "../assets/styles/styles.css";
import {
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="navbar-items">
          <div className="nav-top">
            <div className="nav-top-left">
              <div className="top-nav-item">
                <FaPhoneAlt />
                <span>+977 9898989898</span>
              </div>
              <div className="top-nav-item">
                <IoLocationSharp />
                <span>Pokhara Nepal</span>
              </div>
              <div className="top-nav-item">
                <MdEmail />
                <span>signup to newsletter</span>
              </div>
            </div>
            <div className="nav-top-right">
              <div className="nav-top-right-item">
                <FaFacebookF />
              </div>
              <div className="nav-top-right-item">
                <FaInstagram />
              </div>
              <div className="nav-top-right-item">
                <FaTwitter />
              </div>
              <div className="nav-top-right-item">
                <FaLinkedinIn />
              </div>
              <div className="nav-top-right-item login">
                <RxAvatar />
                <span>Login</span>
              </div>
            </div>
          </div>
          <div className="nav-bottom">
            <div className="nav-bottom-lists">
              <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/tour"> Tours </Link></li>
                <li>Pages</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
