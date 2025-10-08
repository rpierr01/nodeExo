// src/api/characters-api.js

import characters from '../data/characters.json'

/**
 * returns the list of characters
 * @returns 
 */
export async function getCharacters({ sortBy = 'name', order = 'asc' } = {}) {
  // 1) try server-side sorted endpoint
  try {
    const url = `/api/characters?sort=${encodeURIComponent(sortBy)}&order=${encodeURIComponent(order)}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) return data;
    }
  } catch (err) {
    // ignore network errors and continue to next fallback
  }

  // 2) try server-side unsorted endpoint
  try {
    const res2 = await fetch('/api/characters');
    if (res2.ok) {
      const list = await res2.json();
      if (Array.isArray(list)) return sortCharacters(list, sortBy, order);
    }
  } catch (err) {
    // ignore and fallback to local data
  }

  // 3) final fallback: local data (characters.json)
  const localList = Array.isArray(characters) ? characters : [];
  return sortCharacters(localList, sortBy, order);
}

/**
 * returns a character by id
 * @param {*} id 
 * @returns 
 */
export async function getCharacterById(id) {
  // try server-side single fetch
  try {
    const res = await fetch(`/api/characters/${encodeURIComponent(id)}`);
    if (res.ok) {
      const data = await res.json();
      if (data) return data;
    }
  } catch (err) {
    // ignore and fallback
  }

  // fallback to local data
  const localList = Array.isArray(characters) ? characters : [];
  const found = localList.find(c => String(c.id) === String(id));
  if (found) return found;

  // If not found, reject so callers/tests receive an error
  throw new Error('Character not found');
}

function sortCharacters(list, sortBy = 'name', order = 'asc') {
  const dir = order === 'desc' ? -1 : 1;
  return list.slice().sort((a, b) => {
    if (sortBy === 'modified') {
      const da = new Date(a.modified || a.modifiedDate || 0).getTime();
      const db = new Date(b.modified || b.modifiedDate || 0).getTime();
      return (da - db) * dir;
    }
    const na = (a.name || '').toString();
    const nb = (b.name || '').toString();
    return na.localeCompare(nb) * dir;
  });
}