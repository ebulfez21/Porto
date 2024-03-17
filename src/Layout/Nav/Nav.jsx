import "./style.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "../../components/Carusel/Carusel";
import Info from "../../components/Info";
import { MdOutlineShoppingBag } from "react-icons/md";

function BasicExample() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary  '>
        <Container >
          <Navbar.Brand href='/' className='NavBar'>
            <img
              src='https://portotheme.com/html/porto_ecommerce/assets/images/logo-black.png'
              alt=''
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='me-auto '>
              <Nav.Link className='NavLink' href='#home'>
                HOME
              </Nav.Link>
              <NavDropdown
                className='NavLink '
                title='CATAGORIES'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item className='NavLink' href='#action/3.1'>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavLink' href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavLink' href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavLink' href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className='NavLink'
                title='PRADUCTS'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item className='NavLink' href='#action/3.1'>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavLink' href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavLink' href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavLink' href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className='NavLink'
                title='PAGES'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item className='NavLink' href='#action/3.1'>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavLink' href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavLink' href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavLink' href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='NavLink' href='#link'>
                BLOG
              </Nav.Link>
              <Nav.Link className='NavLink' href='#link'>
                BY PORTO
              </Nav.Link>
            </Nav>
            <div className='iconContainer'>
              <CiSearch className='nav-icon' />
              <GrUserManager className='nav-icon' />
              <CiHeart className='nav-icon' />
              <MdOutlineShoppingBag className='nav-icon' />
              <Info className='nav-icon' />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel />
    </>
  );
}

export default BasicExample;
