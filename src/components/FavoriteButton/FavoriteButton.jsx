import React from 'react';

import { useFavorites } from '../../context/FavoritesContext';

import HeartFull from '../../assets/heart.svg';
import HeartEmpty from '../../assets/heart-light.svg';

import './FavoriteButton.styled.scss';

const FavoriteButton = ({ hasNumber, isList, item }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const hasFavorite =
    item?.id && favorites?.some((fav) => fav?.id === item?.id);

  console.log(hasFavorite, item?.id, favorites, 'aaa');

  return (
    <button className="favorite" onClick={() => toggleFavorite(item)}>
      <figure
        className={
          isList
            ? 'favorite__img-container favorite__img-container--is-list'
            : 'favorite__img-container'
        }
      >
        <img
          alt=""
          src={hasFavorite || hasNumber ? HeartFull : HeartEmpty}
          className="favorite__img"
        />
      </figure>
      {hasNumber && (
        <span className="favorite__favorite-number">{favorites.length}</span>
      )}
    </button>
  );
};

export default FavoriteButton;
