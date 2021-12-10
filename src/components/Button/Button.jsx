import PropTypes from 'prop-types';

import s from './Button.module.scss';

function Button({ onClick }) {
  return (
    <div className={s['Button-wrapper']}>
      <button className={s.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
