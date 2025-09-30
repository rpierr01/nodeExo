import React, { useEffect, useState } from 'react';
import CharactersList from '../components/CharactersList';
import { getCharacters } from '../api/characters-api';
import NumberOfCharacters from '../components/NumberOfCharacters';

const CharactersPage = () => {
  useEffect(() => {
    document.title = 'Characters | Marvel App';
  }, []);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let mounted = true;
    getCharacters()
      .then(data => {
        if (mounted && Array.isArray(data)) setCharacters(data);
      })
      .catch(err => {
        console.error('Failed to load characters:', err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <h2>Marvel Characters</h2>
      <CharactersList characters={characters} />
      <br />
      <NumberOfCharacters characters={characters} />
    </>
  );
};

export default CharactersPage;
