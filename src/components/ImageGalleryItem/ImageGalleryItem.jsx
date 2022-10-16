import PropTypes from 'prop-types';

const ImageGalleryItem = ({ picture }) => {
  return <img src={picture.webformatURL} alt={picture.tags} />;
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
