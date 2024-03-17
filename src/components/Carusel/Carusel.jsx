import { Box, Image } from "grommet";
import { useState, useEffect } from "react";
import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = ["/img/slide2.jpg", "/img/slide1.jpg"];

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      goToNextImage();
    }, 10000);

    return () => clearInterval(imageChangeInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box className='Box'>
      <Image
        className='BoxImg'
        src={imageList[currentImageIndex]}
        alt='IMG'
        onError={(event) => {
          console.error("Image loading error:", event);
          event.target.src = "fallback-image.jpg";
        }}
      />
      <MdArrowBackIos className='Lefticon' onClick={goToPreviousImage} />
      <MdArrowForwardIos className='Righticon' onClick={goToNextImage} />
      <div className='CarouselText'>
        <h2>Winter Fashion Trends</h2>
        <p>GET UP TO 30% OFF</p>
        <p>on Jackets</p>
        <div className='Starting'>
          {" "}
          <p>Starting at </p>
          <p>
            $199 <sup>99</sup>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Carousel;
