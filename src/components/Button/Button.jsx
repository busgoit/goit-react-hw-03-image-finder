import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button onClick={props.onLoadMoreBtnClick} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMoreBtnClick: PropTypes.func.isRequired,
};

export default Button;
