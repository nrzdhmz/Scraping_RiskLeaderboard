import { useState, useEffect } from 'react';

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (player) => {
    setFavorites(prev =>
      prev.includes(player) ? prev.filter(fav => fav !== player) : [...prev, player]
    );
  };

  return { favorites, toggleFavorite };
}
