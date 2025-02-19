import React, { useEffect } from 'react';
import { useState } from 'react';

import { useSearchCharacterQuery } from '../../services/hooks/character';
import { CardList } from '../../components';
import { findCharacters } from '../../services/character';

import './Home.styled.scss';

const Home = () => {
  const { data } = useSearchCharacterQuery();
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  const handleChangeName = async (event) => {
    const name = event.target.value;
    const filteredCharacters = await findCharacters(name);
    setName(name);
    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    if (data) {
      setCharacters(data.items);
    }
  }, [data]);

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
