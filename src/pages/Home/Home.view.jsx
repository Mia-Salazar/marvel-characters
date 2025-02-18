import React from 'react';
import { useState } from 'react';

import { useSearchCharacterQuery } from '../../services/hooks/character';

const Home = () => {
  const [count, setCount] = useState(0);

  const characterQuery = useSearchCharacterQuery();

  return <main>Hola</main>;
};

export default Home;
