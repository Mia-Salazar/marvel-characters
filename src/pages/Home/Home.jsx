import React, { useEffect } from 'react';
import { useState } from 'react';

import { useSearchCharacterQuery } from '../../services/hooks/character';
import { CardList } from '../../components';
import { findCharacters } from '../../services/character';

import './Home.styled.scss';

const Home = () => {
  const { data, isLoading } = useSearchCharacterQuery();
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  const handleChangeName = async (event) => {
    const name = event.target.value;
    setName(name);

    if (name === '') {
      setCharacters(data.items);
      return;
    }

    const filteredCharacters = await findCharacters(name);
    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    if (data && characters.length === 0) {
      setCharacters(data.items);
    }
  }, [data, characters]);

  if (isLoading) return <p>...Loading</p>;

  return (
    <main className="home">
      <CardList
        characters={characters}
        name={name}
        onChangeName={handleChangeName}
      />
    </main>
  );
};

export default Home;
