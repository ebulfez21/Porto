import "./style.css";
import {
  CiFacebook,
  CiHeadphones,
  CiInstagram,
  CiTwitter,
} from "react-icons/ci";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoArrowUndoOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div id='Footer'>
      <div className='container'>
        <hr />
        <div className='footerContainer'>
          <div className='infoContainer'>
            <CiHeadphones className='InfoIcon' />
            <h2>CUSTOMER SUPPORT</h2>
            <h4>Need Assistence?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='infoContainer'>
            <MdOutlineCreditCard className='InfoIcon' />
            <h2>SECURED PAYMENT</h2>
            <h4>Safe & Fast</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='infoContainer'>
            <IoArrowUndoOutline className='InfoIcon' />
            <h2>FREE RETURNS</h2>
            <h4>Easy & Free</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='infoContainer'>
            <LiaShippingFastSolid className='InfoIcon' />
            <h2>FREE SHIPPING</h2>
            <h4>Orders Over $99</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <hr />
        <div className=' Newsletter'>
          <div className=' Subscribe'>
            <div className='SubscribeText'>
              {" "}
              <p>SUBSCRIBE NEWSLETTER</p>
              <p>
                Get all the latest information on Events, Sales and Offers..
              </p>
            </div>
            <div className='InputField'>
              <input type='text' placeholder='Email adress...' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div>
            <CiFacebook className='SocialMedia Facebook' />
            <CiTwitter className='SocialMedia Twitter' />
            <CiInstagram className='SocialMedia Instagram' />
          </div>
        </div>
        <hr />
        <div className='FooterNav'>
          <div>
            <h2 className='HeadText'>CONTACT INFO</h2>
            <div className='LocationContainer'>
              <div className='LocationContex'>
                {" "}
                <div>
                  <p>ADDRESS:</p>
                  <p>1234 Street Name, City, England</p>
                </div>
                <div>
                  <p>EMAIL:</p>
                  <p>mail@example.com</p>
                </div>
              </div>
              <div className='LocationContex'>
                <div>
                  <p>PHONE:</p>
                  <p>(123) 456-7890</p>
                </div>
                <div>
                  <p>WORKING DAYS/HOURS:</p>
                  <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='HeadText'>MY ACCOUNT</h2>
            <div className='LocationContainer'>
              <div className='LocationContex'>
                {" "}
                <div>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>My Account</p>
                </div>
              </div>
              <div className='LocationContex'>
                <div>
                  <p>Orders History</p>
                  <p>Advanced Search</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='HeadText'>MAIN FEATURES</h2>
            <div className='LocationContainer'>
              <div className='LocationContex'>
                {" "}
                <div>
                  <p>Super Fast HTML Template</p>
                  <p>1st Fully working Ajax Theme</p>
                  <p> 33 Unique Shop Layouts</p>
                </div>
              </div>
              <div className='LocationContex'>
                <div>
                  <p>Powerful Admin Panel</p>
                  <p>Mobile & Retina Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='Rights'>
          <div>Porto eCommerce. © 2021. All Rights Reserved</div>
          <div className='PaymentIcon'>
            <FaCcVisa className='Icon-42' />
            <FaCcPaypal className='Icon-42' />
            <FaCcStripe className='Icon-42' />
            <FaCcMastercard className='Icon-42' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
