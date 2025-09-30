import React from 'react';
import { Link } from 'react-router-dom';

const CharactersList = ({ characters = [] }) => (
  <ul>
    {characters.map(character => (
      <li key={character.id}>
        <Link to={`/characters/${character.id}`}>{character.name}</Link>
      </li>
    ))}
  </ul>
);

export default CharactersList;
