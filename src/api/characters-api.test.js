// src/api/characters-api.test.js

import { describe, expect, jest, test } from '@jest/globals'

import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// Mock the characters data for testing purposes
jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Character One' },
    { id: 2, name: 'Character Two' },
]);

// Test suite for characters-api.js
describe('characters-api', () => {

    // Test for getCharacters function
    describe('getCharacters', () => {

        // Test to check if the function returns the full list of characters
        test('should return the list of characters', async () => {
            const result = await getCharacters();
            expect(result).toEqual(characters);
        });
    });

    // Test for getCharacterById function
    describe('getCharacterById', () => {
        // Test to check if the function returns the correct character for a valid ID
        test('should return the correct character when a valid ID is provided', async () => {
            const result = await getCharacterById(1);
            expect(result).toEqual({ id: 1, name: 'Character One' });
        });

        // Test to check if the function returns the character for a valid id
        test('getCharacterById returns the character for a valid id', async () => {
            const chars = await getCharacters();
            const id = chars[0].id;
            const result = await getCharacterById(id);
            expect(result).toEqual(chars[0]);
        });

        // Test to check if the function throws when id is not found
        test('getCharacterById throws when id is not found', async () => {
            const chars = await getCharacters();
            // compose an id that won't exist by appending a suffix
            const missingId = String(chars[0].id) + '-missing';
            await expect(getCharacterById(missingId)).rejects.toThrow(/not found/i);
        });
    });

});