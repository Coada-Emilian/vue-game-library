<script setup lang="ts">
import type { Game } from "../types/game";

const props = defineProps<{
  game: Game;
}>();
</script>

<template>
  <div>
    <h2>{{ props.game.name }}</h2>

    <img
      v-if="props.game.background_image"
      :src="props.game.background_image"
      :alt="props.game.name"
    />

    <p>Released : {{ props.game.released }}</p>
    <p>Rating : {{ props.game.rating }}</p>

    <p>Metacritic : {{ props.game.metacritic }}</p>
  </div>
</template>
