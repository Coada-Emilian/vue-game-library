import type { Game } from "./game";

export interface GameDetails extends Game {
  description_raw: string;
  developers: { name: string }[];
  publishers: { name: string }[];
}
