import React from 'react';
import characters from '../data/characters.json';

const CharactersList = () => (
  <ul>
    {characters.map(character => (
      <li key={character.id}>{character.name}</li>
    ))}
  </ul>
);

export default CharactersList;
