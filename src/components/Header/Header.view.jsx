import React from 'react';
import { useState } from 'react';

import './Header.styled.scss';

const Header = () => {
  const [count, setCount] = useState(0);

  return <header className='hola'>hola</header>;
};

export default Header;
