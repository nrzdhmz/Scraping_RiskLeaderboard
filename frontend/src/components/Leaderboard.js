import { useState } from 'react';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardTable from './LeaderboardTable';
import Pagination from './Pagination';
import useFavorites from '../hooks/useFavorites';

export default function Leaderboard({ data, isLoading }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  const filteredBySearch = data.filter(
    player => player.Player && player.Player.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const finalFilteredData = showFavoritesOnly
    ? filteredBySearch.filter(player => favorites.includes(player.Player))
    : filteredBySearch;

  const rowsPerPage = 100;
  const pageCount = Math.ceil(finalFilteredData.length / rowsPerPage);
  const offset = currentPage * rowsPerPage;
  const currentPlayers = finalFilteredData.slice(offset, offset + rowsPerPage);

  return (
    <div className="leaderboard-container">
      <LeaderboardHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
        showFavoritesOnly={showFavoritesOnly}
      />

      {isLoading ? (
        <div className="loading-message">Loading leaderboard data...</div>
      ) : (
        <div className='footer-wrapper'>
          <LeaderboardTable
            players={currentPlayers}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />

          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
