
import { useState } from "react";
import React from 'react';

import './App.css';
import {  FaClock, FaCrown } from 'react-icons/fa';
import { FaCoins, FaRupeeSign } from 'react-icons/fa';


const players = [
  { name: 'Ashish', score: 198, prize: '₹11', image: 'https://via.placeholder.com/80' },
  { name: 'Mahek', score: 230, prize: '₹21', image: 'https://via.placeholder.com/80' },
  { name: 'Tejas', score: 82, prize: '₹10', image: 'https://via.placeholder.com/80' }
];

const Leaderboard = () => {
  const topPlayer = players.reduce((prev, current) => (prev.score > current.score ? prev : current));
  const [activeTab, setActiveTab] = useState("Daily");

  return (
    <div className="leaderboard-container">
      <header className="header d-flex justify-content-between">
        <h5 className="leaderboard-title">Leader Board</h5>
        <div className="score-info">
          <div className="score-points-wrapper">
            <FaCoins className="icon-score" />
            <span className="score-points">3982</span>
          </div>
          <div className="score-money-wrapper">
            <FaRupeeSign className="icon-money" />
            <span className="score-money">&#8377;2875.00</span>
          </div>
        </div>
      </header>

      <div className="tabs d-flex justify-content-center">
      <button
        className={`tab-btn ${activeTab === "Daily" ? "active" : ""}`}
        onClick={() => setActiveTab("Daily")}
      >
        Daily
      </button>
      <button
        className={`tab-btn ${activeTab === "Weekly" ? "active" : ""}`}
        onClick={() => setActiveTab("Weekly")}
      >
        Weekly
      </button>
      <button
        className={`tab-btn ${activeTab === "Monthly" ? "active" : ""}`}
        onClick={() => setActiveTab("Monthly")}
      >
        Monthly
      </button>
    </div>

      <div className="top-players">
        {players.map((player, index) => (
          <div key={index} className={`player-info ${player.name === topPlayer.name ? 'top-player' : ''}`}>
            <img
              src={player.image}
              alt={player.name}
              className={`player-image ${player.name === topPlayer.name ? 'large-image' : ''}`}
            />
            {player.name === topPlayer.name && <FaCrown className="crown-icon" />}
            <p className="player-name">{player.name}</p>
            <p className="player-score">{player.score}</p>
            <p className="player-prize">Prize: {player.prize}</p>
          </div>
        ))}
      </div>

      <div className="timer">
  <FaClock className="clock-icon" />  
  <p>Ends in 03h 47m 40s</p>
</div>

<div className="leaderboard-list">
  {[
    { name: 'Manoj', rank: 4, prize: '₹7', score: 81 },
    { name: 'Amit', rank: 5, prize: '₹6', score: 77 },
    { name: 'Karan', rank: 6, prize: '₹5', score: 75 },
    { name: 'JAGA', rank: 7, prize: '₹4', score: 62 },
    { name: 'Sathvik', rank: 8, prize: '₹3', score: 55 },
    { name: 'Tuyisenge', rank: 9, prize: '₹1', score: 35 },
  ].map((player, index) => (
    <div key={index} className="leaderboard-row">
      <span className="leaderboard-rank">Rank: {player.rank}</span> {/* Add rank */}
      <span className="leaderboard-name">{player.name}</span>
      <span className="leaderboard-prize">Prize: {player.prize}</span>
      <span className="leaderboard-score">{player.score}</span>
    </div>
  ))}
</div>

    </div>
  );
};

export default Leaderboard;
