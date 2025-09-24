import React, { useEffect } from 'react';
import characters from '../data/characters.json';
import CharactersList from '../components/CharactersList';
import NumberOfCharacters from '../components/NumberOfCharacters';

function CharactersPage() {
  useEffect(() => {
    document.title = 'Characters Page';
  }, []);

  return (
    <div>
      <NumberOfCharacters characters={characters} />
      <CharactersList />
    </div>
  );
}

export default CharactersPage;
