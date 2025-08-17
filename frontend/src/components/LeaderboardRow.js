export default function LeaderboardRow({ player, isFavorite, toggleFavorite }) {
  return (
    <div className="table-row">
      <div className="table-cell">{player.Rank}</div>
      <div className="table-cell">{player.Player}</div>
      <div className="table-cell">
        <img
          src={player.Image_URL}
          alt={`${player.Player} avatar`}
          className="player-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/40x40/374151/d1d5db?text=?';
          }}
        />
      </div>
      <div className="table-cell">
        <a
          href={player.Profile_Link}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile
        </a>
      </div>
      <div className="table-cell">{player.Stat}</div>
      <div className="table-cell">
        <button onClick={() => toggleFavorite(player.Player)} className="favorite-button">
          <span className={isFavorite ? 'favorite-star' : 'unfavorite-star'}>✩</span>
        </button>
      </div>
    </div>
  );
}
