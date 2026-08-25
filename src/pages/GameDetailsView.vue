<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getGameDetails } from "../services/rawg";

const route = useRoute();

const gameId = computed(() => Number(route.params.id));

const {
  data: game,
  isPending,
  error,
} = useQuery({
  queryKey: ["game", gameId],
  queryFn: () => getGameDetails(gameId.value),
});
</script>

<template>
  <main>
    <p v-if="isPending">Loading...</p>

    <p v-else-if="error">Something went wrong: {{ error.message }}</p>

    <div v-else-if="game">
      <h1>{{ game.name }}</h1>

      <img
        v-if="game.background_image"
        :src="game.background_image"
        :alt="game.name"
      />

      <p>Released: {{ game.released }}</p>
      <p>Rating: {{ game.rating }}</p>
      <p>Metacritic: {{ game.metacritic }}</p>
    </div>
  </main>
</template>
