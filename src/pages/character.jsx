import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacterById } from '../api/characters-api';
import CharacterDetail from '../components/CharacterDetail';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getCharacterById(id)
      .then(data => { if (mounted) setCharacter(data); })
      .catch(err => { console.error('Failed to load character:', err); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);

  useEffect(() => {
    document.title = character ? `${character.name} | Marvel App` : 'Character | Marvel App';
  }, [character]);

  if (loading) return <div>Loading...</div>;
  if (!character) {
    return (
      <div>
        <h2>Character not found</h2>
        <Link to="/characters">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      {/* CharacterDetail affiche les champs et l'image si disponible */}
      <CharacterDetail character={character} />
      <br />
      <Link to="/characters">Back to list</Link>
    </div>
  );
};

export default CharacterPage;
