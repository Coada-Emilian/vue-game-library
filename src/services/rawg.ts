import type { Game } from "../types/game";
import type { GameDetails } from "../types/gameDetails";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseUrl = "https://api.rawg.io/api";

const searchGames = async (query: string): Promise<Game[]> => {
  const response = await fetch(
    `${baseUrl}/games?key=${apiKey}&search=${encodeURIComponent(query)}&search_precise=true&page_size=50`,
  );

  const data = await response.json();

  return data.results;
};

const getGameDetails = async (id: number): Promise<GameDetails> => {
  const response = await fetch(`${baseUrl}/games/${id}?key=${apiKey}`);

  const data = await response.json();

  return data;
};

const getGameSeries = async (id: number): Promise<Game[]> => {
  const response = await fetch(
    `${baseUrl}/games/${id}/game-series?key=${apiKey}&search_precise=true&page_size=15`,
  );

  const data = await response.json();

  return data.results;
};

export { getGameDetails, getGameSeries, searchGames };
