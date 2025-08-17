import React, { useState, useEffect } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';
import parseCSV from './utils/parseCSV';

export default function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/leaderboard.csv`)
      .then(response => response.text())
      .then(csvText => {
        setLeaderboardData(parseCSV(csvText));
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching CSV:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="leaderboard-app">
      <Leaderboard data={leaderboardData} isLoading={isLoading} />
    </div>
  );
}
