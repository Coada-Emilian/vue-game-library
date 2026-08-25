export interface Game {
  id: number;
  name: string;
  released: string | null;
  background_image: string | null;
  rating: number;
  metacritic: number | null;
  genres: { name: string }[];
  platforms: { platform: { name: string } }[];
}
