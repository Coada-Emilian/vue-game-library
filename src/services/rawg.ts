import type { Game } from "../types/game";
import type { GameDetails } from "../types/gameDetails";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseUrl = "https://api.rawg.io/api";

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(
      `RAWG API error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

const searchGames = async (query: string): Promise<Game[]> => {
  const response = await fetch(
    `${baseUrl}/games?key=${apiKey}&search=${encodeURIComponent(query)}&search_precise=true&page_size=50`,
  );

  const data = await handleResponse(response);

  return data.results;
};

const getGameDetails = async (id: number): Promise<GameDetails> => {
  const response = await fetch(`${baseUrl}/games/${id}?key=${apiKey}`);

  return handleResponse(response);
};

const getGameSeries = async (id: number): Promise<Game[]> => {
  const response = await fetch(
    `${baseUrl}/games/${id}/game-series?key=${apiKey}&search_precise=true&page_size=15`,
  );

  const data = await handleResponse(response);

  return data.results;
};

export { getGameDetails, getGameSeries, searchGames };
