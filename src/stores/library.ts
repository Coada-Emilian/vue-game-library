import { defineStore } from "pinia";
import type { LibraryGame } from "../types/LibraryGame";
import type { Game } from "../types/game";
import type { GameStatus } from "../types/gameStatus";

export const useLibraryStore = defineStore("library", {
  state: () => ({
    games: JSON.parse(
      localStorage.getItem("library-games") ?? "[]",
    ) as LibraryGame[],
  }),

  getters: {
    getGameStatus: (state) => {
      return (gameId: number) => {
        return state.games.find((game) => game.id === gameId)?.status;
      };
    },
  },

  actions: {
    addGame(game: Game, status: GameStatus) {
      const existingGame = this.games.find(
        (libraryGame) => libraryGame.id === game.id,
      );

      if (existingGame) {
        existingGame.status = status;
        return;
      }

      this.games.push({
        ...game,
        status,
      });
    },
  },
});
