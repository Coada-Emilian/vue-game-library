import type { Game } from "../types/game";

const searchGames = async (query: string): Promise<Game[]> => {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
};

export default searchGames;
