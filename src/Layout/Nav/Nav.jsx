import  { useState, useEffect } from "react";
import "./style.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { CiHeart, CiSearch } from "react-icons/ci";
import Info from "../../components/Info";

function CustomNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-${scrolling ? 'white' : 'transparent'}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://portotheme.com/html/porto_ecommerce/assets/images/logo-black.png"
            alt=""
            width="120"
            height="auto"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownCategories"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownCategories">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownProducts"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PRODUCTS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownPages"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownPages">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BY PORTO
              </a>
            </li>
          </ul>
          <div className="iconContainer">
          <CiSearch className='nav-icon' />
              <GrUserManager className='nav-icon' />
              <CiHeart className='nav-icon' />
              <MdOutlineShoppingBag className='nav-icon' />
              <Info className='nav-icon' />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
