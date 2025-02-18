import React from 'react';

import HeartImage from '../../assets/heart.svg';

import './FavoriteButton.styled.scss';

const FavoriteButton = ({ hasNumber }) => {
  return (
    <button className="favorite">
      <figure className="favorite__img-container">
        <img alt="" src={HeartImage} />
      </figure>
      {hasNumber && <span className="favorite__favorite-number">0</span>}
    </button>
  );
};

export default FavoriteButton;
