import type { Game } from "./game";
import type { GameStatus } from "./gameStatus";

export interface LibraryGame extends Game {
  status: GameStatus;
}
