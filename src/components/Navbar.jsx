import logo from "../assets/AA-Logo-2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6" mb-20>
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="Logo" />
        </div>
        <div className="text-white flex items-center gap-4 m-8 text-xl">
          <a href="https://www.linkedin.com/in/abdul-aziz-87296b179/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/abd-az1z">
            <FaGithub />
          </a>
          <a href="https://x.com/MdAbdul13067562">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.instagram.com/abd_az1z_/">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
