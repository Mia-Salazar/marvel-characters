import React from 'react';
import { Link } from 'react-router-dom';

import MarvelImage from '../../assets/marvel.svg';

import './Header.styled.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const Header = () => {
  return (
    <header className="header">
      <Link to="/characters">
        <figure className="header__img-container">
          <img alt="Marvel characters" src={MarvelImage} />
        </figure>
      </Link>
      <FavoriteButton hasNumber />
    </header>
  );
};

export default Header;
