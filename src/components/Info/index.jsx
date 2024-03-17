import { useState, useEffect } from "react";
import "./index.css";
import { IoIosArrowBack } from "react-icons/io";





const Info = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      window.scrollTo(0, 0);
    }
  }, [isVisible]);


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button aria-label="Address Button" className='infoIcon' onClick={handleClick}>
    <IoIosArrowBack/>
      </button>
      {isVisible && (
        <div className="modalContainer">
          
         
        </div>
      )}
    </div>
  );
};

export default Info;
