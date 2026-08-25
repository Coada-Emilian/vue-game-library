<script setup lang="ts">
import type { Game } from "../types/game";

defineProps<{
  game: Game;
}>();

const emit = defineEmits<{
  select: [gameId: number];
}>();
</script>

<template>
  <article class="game-card" @click="emit('select', game.id)">
    <img
      v-if="game.background_image"
      :src="game.background_image"
      :alt="game.name"
      class="game-image"
    />

    <div class="game-card-content">
      <h2>{{ game.name }}</h2>

      <div class="game-meta">
        <span v-if="game.released">
          {{ game.released }}
        </span>

        <span v-if="game.rating"> ⭐ {{ game.rating }} </span>

        <span v-if="game.metacritic"> MC {{ game.metacritic }} </span>
      </div>

      <p class="genres">
        {{ game.genres.map((genre) => genre.name).join(" · ") }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.game-card {
  overflow: hidden;
  border: 1px solid #333;
  border-radius: 10px;
  background: #1c1c1c;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  min-height: 300px;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: #555;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.game-image {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.game-card-content {
  min-height: 120px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.game-card h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  line-height: 1.3;
}

.game-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: #bbb;
  font-size: 0.9rem;
}

.genres {
  margin: 12px 0 0;
  color: #888;
  font-size: 0.9rem;
  margin-top: auto;
}
</style>
