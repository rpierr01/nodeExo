// Remplacer l'implémentation CommonJS par une version ES module adaptée au front-end

// Importer directement le JSON (sera bundlé par l'outil de build)
import characters from '../data/characters.json';

// Retourne le tableau complet de personnages (API asynchrone pour compatibilité)
export async function getCharacters() {
  return characters;
}

// Retourne un personnage par id (id attendu comme string ou number)
export async function getCharacterById(id) {
  if (id === undefined || id === null) return null;
  const sid = String(id);
  return characters.find(c => String(c.id) === sid) || null;
}
