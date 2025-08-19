# Risk Leaderboard Scraper & Viewer

This project scrapes the **Risk leaderboard** from [Hasbro Risk](https://www.hasbrorisk.com/en/leaderboard/2/1/rankPoints) and displays it in a React web app. The leaderboard is automatically updated every hour using GitHub Actions, so the data on the website is always fresh.

## Features

* **Automated Scraping**: Uses Selenium to fetch the latest leaderboard data.
* **CSV Storage**: Data is saved to `frontend/public/leaderboard.csv`.
* **React Frontend**: Displays leaderboard in a clean, interactive UI.
* **Automatic Deployment**: GitHub Actions updates CSV and frontend is hosted via GitHub Pages.
* **No Backend Needed**: The frontend fetches the CSV directly, making it simple and lightweight.

## How It Works

1. **Scraper (`scraper.py`)**

   * Runs automatically via GitHub Actions.
   * Scrolls through leaderboard pages, fetches player info, rank, stats, and profile images.
   * Saves data to `leaderboard.csv`.

2. **React Frontend**

   * Fetches `leaderboard.csv` and parses it.
   * Displays the leaderboard in a table with rank, player name, profile link, stat, and image.

3. **Deployment**

   * Frontend is deployed on GitHub Pages.
   * CSV is automatically updated via GitHub Actions every hour.

## Live Demo

[Risk Leaderboard Live Site](https://nrzdhmz.github.io/Scraping_RiskLeaderboard/)

## Usage

1. Clone the repo:

   ```bash
   git clone https://github.com/nrzdhmz/Scraping_RiskLeaderboard.git
   ```
2. Navigate to the frontend folder and install dependencies:

   ```bash
   cd frontend
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```
4. Build and deploy (optional):

   ```bash
   npm run build
   npm run deploy
   ```

## Tech Stack

* Python + Selenium (scraper)
* React + Tailwind CSS (frontend)
* GitHub Actions (automation)
* GitHub Pages (hosting)

