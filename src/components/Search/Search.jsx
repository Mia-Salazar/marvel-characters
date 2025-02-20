import React from 'react';

import SearchImage from '../../assets/search.svg';

import './Search.styled.scss';

const Search = ({ number, value, onChange, isFavorite }) => {
  const HeadingType = isFavorite ? 'p' : 'h1';
  return (
    <>
      <form className="search">
        <div className="search__input-container">
          <label className="search__label" htmlFor="search">
            Search a character
          </label>
          <figure className="search__img-container">
            <img alt="" src={SearchImage} />
          </figure>
          <input
            className="search__input"
            id="name"
            type="text"
            name="search"
            placeholder="Search a character..."
            value={value}
            onChange={(event) => onChange(event)}
          />
        </div>
      </form>
      <HeadingType className="search__title">{number} Results</HeadingType>
    </>
  );
};

export default Search;
