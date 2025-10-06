// src/api/characters-api.js

import characters from '../data/characters.json'

/**
 * returns the list of characters
 * @returns 
 */
export const getCharacters = async () => {
  return characters;
}

/**
 * returns a character by id
 * @param {*} id 
 * @returns 
 */
export const getCharacterById = async (id) => {
  const character = characters.find(character => character.id === id);
  if (!character) {
    throw new Error(`Character with id ${id} not found`);
  }
  return character;
}