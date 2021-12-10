import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ webformatURL, tags, toggleModal, bigImg }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={() => {
          toggleModal();
          bigImg();
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  bigImg: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
