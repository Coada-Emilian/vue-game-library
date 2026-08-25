<script setup lang="ts">
import type { Game } from "../types/game";

defineProps<{
  game: Game;
}>();
</script>

<template>
  <div class="game-card">
    <img
      v-if="game.background_image"
      :src="game.background_image"
      :alt="game.name"
    />

    <div class="game-card-content">
      <h2>{{ game.name }}</h2>

      <p>Released: {{ game.released }}</p>
      <p>Rating: {{ game.rating }}</p>
      <p>Metacritic: {{ game.metacritic }}</p>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  width: 280px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.game-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.game-card-content {
  padding: 12px;
}
</style>
