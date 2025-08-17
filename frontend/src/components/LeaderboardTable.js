import LeaderboardRow from './LeaderboardRow';

export default function LeaderboardTable({ players, favorites, toggleFavorite }) {
  return (
    <>
      <div className="table-header">
        <div className="table-header-item">Position</div>
        <div className="table-header-item">Username</div>
        <div className="table-header-item">Image</div>
        <div className="table-header-item">Profile Link</div>
        <div className="table-header-item">Points</div>
        <div className="table-header-item">Favourite</div>
      </div>

      <div className="table-body">
        {players.length > 0 ? (
          players.map(player => (
            <LeaderboardRow
              key={player.Rank}
              player={player}
              isFavorite={favorites.includes(player.Player)}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <div className="no-results-message">No players found.</div>
        )}
      </div>
    </>
  );
}
