import React, { useEffect, useState } from 'react';
import CharactersList from '../components/CharactersList';
import { getCharacters } from '../api/characters-api';
import NumberOfCharacters from '../components/NumberOfCharacters';
import { useSearchParams } from 'react-router-dom';

const CharactersPage = () => {
  useEffect(() => {
    document.title = 'Characters | Marvel App';
  }, []);

  const [characters, setCharacters] = useState([]);

  // read initial sort/order from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get('sort') || 'name';
  const initialOrder = searchParams.get('order') || 'asc';

  const [sortBy, setSortBy] = useState(initialSort);
  const [order, setOrder] = useState(initialOrder);

  // keep state in sync if URL changes externally
  useEffect(() => {
    const s = searchParams.get('sort') || 'name';
    const o = searchParams.get('order') || 'asc';
    if (s !== sortBy) setSortBy(s);
    if (o !== order) setOrder(o);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    let mounted = true;
    getCharacters({ sortBy, order })
      .then(data => {
        if (mounted && Array.isArray(data)) setCharacters(data);
      })
      .catch(err => {
        console.error('Failed to load characters:', err);
      });
    return () => {
      mounted = false;
    };
  }, [sortBy, order]);

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSortBy(newSort);
    setSearchParams({ sort: newSort, order });
  };

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
    setSearchParams({ sort: sortBy, order: newOrder });
  };

  return (
    <>
      <h2>Marvel Characters</h2>

      {/* contrôles de tri */}
      <div style={{ marginBottom: 12 }}>
        <label style={{ marginRight: 8 }}>
          Trier par:
          <select value={sortBy} onChange={handleSortChange} style={{ marginLeft: 8 }}>
            <option value="name">Name</option>
            <option value="modified">Modified</option>
          </select>
        </label>

        <label style={{ marginLeft: 16 }}>
          Ordre:
          <select value={order} onChange={handleOrderChange} style={{ marginLeft: 8 }}>
            <option value="asc">Ascendant</option>
            <option value="desc">Descendant</option>
          </select>
        </label>
      </div>

      <CharactersList characters={characters} />
      <br />
      <NumberOfCharacters characters={characters} />
    </>
  );
};

export default CharactersPage;
