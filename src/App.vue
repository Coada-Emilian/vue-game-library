<script setup lang="ts">
import { onMounted, ref } from "vue";
import GameCard from "./components/GameCard.vue";
import searchGames from "./services/rawg";
import type { Game } from "./types/game";

const games = ref<Game[]>([]);

onMounted(async () => {
  games.value = await searchGames("witcher");
});
</script>

<template>
  <h1>Game Library</h1>

  <div class="game-grid">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<style scoped>
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
