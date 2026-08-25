<script setup lang="ts">
import { onMounted, ref } from "vue";
import GameCard from "./components/GameCard.vue";
import Header from "./components/header/Header.vue";
import searchGames from "./services/rawg";
import type { Game } from "./types/game";

const searchTerm = ref("");

const games = ref<Game[]>([]);

const search = async () => {
  games.value = await searchGames(searchTerm.value);
};

onMounted(search);
</script>

<template>
  <Header v-model="searchTerm" @search="search" />

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
