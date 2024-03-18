
import PropTypes from 'prop-types';

function CarouselImage({ text }) {
  return (
    <img
      className='d-block w-100'
      src={`/public/img/slide1.jpg${text}.jpg`} 
      alt={text}
    />
  );
}

CarouselImage.propTypes = {
  text: PropTypes.string.isRequired 
};

export default CarouselImage;
