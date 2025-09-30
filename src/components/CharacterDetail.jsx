import React from 'react';

export default function CharacterDetail({ character }) {
  if (!character) return null;

  // image peut être fournie sous différentes formes selon le JSON :
  // - character.image (url string)
  // - character.thumbnail: { path, extension } (Marvel API style)
  // - character.thumbnailUrl (autre variante)
  let imageUrl = null;
  if (character.image && typeof character.image === 'string') {
    imageUrl = character.image;
  } else if (character.thumbnail && character.thumbnail.path) {
    const ext = character.thumbnail.extension || character.thumbnail.ext || '';
    imageUrl = ext ? `${character.thumbnail.path}.${ext}` : character.thumbnail.path;
  } else if (character.thumbnailUrl) {
    imageUrl = character.thumbnailUrl;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p><strong>ID:</strong> {character.id}</p>

      {character.description ? (
        <p><strong>Description:</strong> {character.description}</p>
      ) : (
        <p><em>No description available.</em></p>
      )}

      {/* N'afficher l'image que si imageUrl n'est pas null/empty */}
      {imageUrl ? (
        // limites de style minimal pour éviter images trop grandes
        <div>
          <img src={imageUrl} alt={character.name} style={{ maxWidth: 300, height: 'auto' }} />
        </div>
      ) : null}

      {/* Afficher d'autres champs s'ils existent */}
      {character.comics && character.comics.length > 0 && (
        <div>
          <h4>Comics</h4>
          <ul>
            {character.comics.map((c, i) => <li key={c.resourceURI || c.name || i}>{c.name || c}</li>)}
          </ul>
        </div>
      )}

      {character.series && character.series.length > 0 && (
        <div>
          <h4>Series</h4>
          <ul>
            {character.series.map((s, i) => <li key={s.resourceURI || s.name || i}>{s.name || s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
