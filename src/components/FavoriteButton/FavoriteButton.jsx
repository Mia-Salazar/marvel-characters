import React from 'react';

import { useFavorites } from '../../context/FavoritesContext';

import HeartFull from '../../assets/heart.svg';
import HeartEmpty from '../../assets/heart-light.svg';

import './FavoriteButton.styled.scss';
import { Link } from 'react-router-dom';

const Layout = ({ hasNumber, children, onClick }) => {
  if (hasNumber)
    return (
      <Link to="/favorites" className="favorite">
        {children}
      </Link>
    );

  return (
    <button className="favorite" onClick={onClick}>
      {children}
    </button>
  );
};

const FavoriteButton = ({ hasNumber = false, isList, item }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const hasFavorite =
    item?.id && favorites?.some((fav) => fav?.id === item?.id);

  const aria = hasNumber
    ? ''
    : hasFavorite
      ? 'Héroe seleccionado'
      : 'Héroe no seleccionado';

  return (
    <Layout onClick={() => toggleFavorite(item)} hasNumber={hasNumber}>
      <figure
        className={
          isList
            ? 'favorite__img-container favorite__img-container--is-list'
            : 'favorite__img-container'
        }
      >
        <img
          alt={aria}
          src={hasFavorite || hasNumber ? HeartFull : HeartEmpty}
          className="favorite__img"
        />
      </figure>
      {hasNumber && (
        <span className="favorite__favorite-number">{favorites.length}</span>
      )}
    </Layout>
  );
};

export default FavoriteButton;
