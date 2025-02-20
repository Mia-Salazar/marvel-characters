import { useState } from 'react';

import { CardList } from '../../components';
import { useFavorites } from '../../context/FavoritesContext';

import './Favorites.styled.scss';

const Favorites = () => {
  const { favorites } = useFavorites();
  const [characters, setCharacters] = useState(favorites);
  const [name, setName] = useState('');

  const handleChangeName = async (event) => {
    const name = event.target.value;
    const filteredCharacters = favorites.filter((favorite) =>
      favorite.name.contains(name)
    );
    setName(name);
    setCharacters(filteredCharacters);
  };

  return (
    <main className="favorites">
      <h1 className="favorites__title">Favorites</h1>
      <CardList
        characters={characters}
        name={name}
        onChangeName={handleChangeName}
        isFavorite
      />
    </main>
  );
};

export default Favorites;
