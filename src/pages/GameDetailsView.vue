<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import { getGameDetails, getGameSeries } from "../services/rawg";
import { useLibraryStore } from "../stores/library";

const library = useLibraryStore();

const currentStatus = computed(() => {
  if (!game.value) {
    return undefined;
  }

  return library.getGameStatus(game.value.id);
});

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
  <Header />
  <main class="details">
    <p v-if="isPending" class="status">Loading...</p>

    <p v-else-if="error" class="status error">
      Something went wrong: {{ error.message }}
    </p>

    <div v-else-if="game" class="details-content">
      <section class="game-header">
        <img
          v-if="game.background_image"
          :src="game.background_image"
          :alt="game.name"
          class="game-image"
        />

        <div class="game-info">
          <h1>{{ game.name }}</h1>

          <p class="release-date">
            {{ game.released }}
          </p>

          <div class="scores">
            <span v-if="game.rating"> ⭐ {{ game.rating }} </span>

            <span v-if="game.metacritic"> MC {{ game.metacritic }} </span>
          </div>

          <div class="metadata">
            <p>
              <strong>Genres:</strong>
              {{ game.genres.map((genre) => genre.name).join(" · ") }}
            </p>

            <p>
              <strong>Platforms:</strong>
              {{
                game.platforms
                  .map((platform) => platform.platform.name)
                  .join(" · ")
              }}
            </p>

            <section class="library-actions">
              <h2>My Library</h2>

              <button
                :class="{ active: currentStatus === 'backlog' }"
                @click="library.addGame(game, 'backlog')"
              >
                Backlog
              </button>

              <button
                :class="{ active: currentStatus === 'playing' }"
                @click="library.addGame(game, 'playing')"
              >
                Playing
              </button>

              <button
                :class="{ active: currentStatus === 'finished' }"
                @click="library.addGame(game, 'finished')"
              >
                Finished
              </button>

              <button
                :class="{ active: currentStatus === 'abandoned' }"
                @click="library.addGame(game, 'abandoned')"
              >
                Abandoned
              </button>
            </section>
          </div>
        </div>
      </section>

      <section class="description">
        <h2>Description</h2>

        <p>{{ game.description_raw }}</p>
      </section>

      <section class="credits">
        <p>
          <strong>Developer:</strong>
          {{ game.developers.map((developer) => developer.name).join(", ") }}
        </p>

        <p>
          <strong>Publisher:</strong>
          {{ game.publishers.map((publisher) => publisher.name).join(", ") }}
        </p>
      </section>

      <section class="series">
        <h2>Related Games</h2>

        <p v-if="isSeriesPending">Loading series...</p>

        <p v-else-if="seriesError" class="error">
          Something went wrong: {{ seriesError.message }}
        </p>

        <div v-else-if="series?.length" class="series-grid">
          <RouterLink
            v-for="seriesGame in series"
            :key="seriesGame.id"
            :to="{
              name: 'game-details',
              params: { id: seriesGame.id },
            }"
            class="series-card"
          >
            <img
              v-if="seriesGame.background_image"
              :src="seriesGame.background_image"
              :alt="seriesGame.name"
            />

            <h3>{{ seriesGame.name }}</h3>

            <p v-if="seriesGame.released">
              {{ seriesGame.released }}
            </p>
          </RouterLink>
        </div>

        <p v-else>No other games in this series.</p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.details {
  min-height: 100vh;
  padding: 40px 24px 80px;
}

.details-content {
  width: min(1200px, 100%);
  margin: 0 auto;
}

.status {
  padding: 40px;
  text-align: center;
}

.error {
  color: #ff7777;
}

.game-header {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 1fr);
  gap: 40px;
  align-items: center;
  margin-bottom: 50px;
}

.game-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
}

.game-info h1 {
  margin: 0 0 12px;
  font-size: 2.8rem;
}

.release-date {
  color: #aaa;
}

.scores {
  display: flex;
  gap: 16px;
  margin: 24px 0;
}

.metadata {
  color: #aaa;
  line-height: 1.6;
}

.metadata strong {
  color: #f5f5f5;
}

.description,
.credits,
.series {
  padding: 30px 0;
  border-top: 1px solid #333;
}

.description p {
  max-width: 900px;
  color: #bbb;
  line-height: 1.7;
}

.credits {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.series-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.series-card {
  overflow: hidden;
  border: 1px solid #333;
  border-radius: 10px;
  background: #1c1c1c;
  color: inherit;
  text-decoration: none;
}

.series-card img {
  display: block;
  width: 100%;
  height: 130px;
  object-fit: cover;
}

.series-card h3,
.series-card p {
  margin-left: 14px;
  margin-right: 14px;
}

.series-card h3 {
  margin-top: 14px;
  font-size: 1rem;
}

.series-card p {
  margin-bottom: 14px;
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 750px) {
  .game-header {
    grid-template-columns: 1fr;
  }

  .game-info h1 {
    font-size: 2.2rem;
  }
}

.library-actions {
  padding: 30px 0;
  border-top: 1px solid #333;
}

.library-actions h2 {
  margin-top: 0;
}

.library-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.library-actions h2 {
  width: 100%;
}

.library-actions button {
  padding: 10px 16px;
  border: 1px solid #444;
  border-radius: 6px;
  background: #1c1c1c;
  color: #f5f5f5;
  cursor: pointer;
}

.library-actions button:hover {
  background: #333;
}

.library-actions button.active {
  border-color: #aaa;
  background: #444;
}
</style>
