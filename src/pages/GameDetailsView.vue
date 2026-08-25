<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getGameDetails, getGameSeries } from "../services/rawg";

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

const {
  data: series,
  isPending: isSeriesPending,
  error: seriesError,
} = useQuery({
  queryKey: ["game-series", gameId],
  queryFn: () => getGameSeries(gameId.value),
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

      <p>{{ game.description_raw }}</p>

      <p>
        Developer:
        {{ game.developers.map((developer) => developer.name).join(", ") }}
      </p>

      <p>
        Publisher:
        {{ game.publishers.map((publisher) => publisher.name).join(", ") }}
      </p>

      <div>
        <p>Genre :</p>

        <span v-for="(genre, index) in game.genres" :key="genre.name">
          {{ genre.name }}{{ index < game.genres.length - 1 ? ", " : "" }}
        </span>
      </div>

      <div>
        <p>Platforms :</p>

        <span
          v-for="(platform, index) in game.platforms"
          :key="platform.platform.name"
        >
          {{ platform.platform.name
          }}{{ index < game.platforms.length - 1 ? ", " : "" }}
        </span>
      </div>

      <section>
        <h2>Related Games</h2>

        <p v-if="isSeriesPending">Loading series...</p>

        <p v-else-if="seriesError">
          Something went wrong: {{ seriesError.message }}
        </p>

        <div v-else-if="series?.length">
          <div v-for="seriesGame in series" :key="seriesGame.id">
            <h3>{{ seriesGame.name }}</h3>

            <img
              v-if="seriesGame.background_image"
              :src="seriesGame.background_image"
              :alt="seriesGame.name"
            />

            <p v-if="seriesGame.released">
              Released: {{ seriesGame.released }}
            </p>
          </div>
        </div>

        <p v-else>No other games in this series.</p>
      </section>
    </div>
  </main>
</template>
