import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { selectorCharacter } from '../character/character.selector';

const CreateComponent = () => {
  const character = useSelector(selectorCharacter);

  /** Looks like not so optimize, but okay for now */
  useEffect(() => {
    const stringifiedCharacter = JSON.stringify(character);

    localStorage.setItem('character', stringifiedCharacter);
  }, [character]);

  return <Outlet />;
};

export default CreateComponent;
