export default function LeaderboardHeader({ searchTerm, setSearchTerm, toggleFavorites, showFavoritesOnly }) {
  return (
    <div className="leaderboard-header">
      <h1 className="leaderboard-title">Risk Leaderboard</h1>
      <div className="leaderboard-actions">
        <button
          onClick={toggleFavorites}
          className={`action-button ${showFavoritesOnly ? 'active' : ''}`}
        >
          Show Favourites
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search a username..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
