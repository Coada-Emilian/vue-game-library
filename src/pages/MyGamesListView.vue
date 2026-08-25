<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import GameCard from "../components/GameCard.vue";
import { useLibraryStore } from "../stores/library";

const route = useRoute();
const router = useRouter();
const library = useLibraryStore();

const status = computed(() => route.params.status as string);

const games = computed(() =>
  library.games.filter((game) => game.status === status.value),
);

const title = computed(() => {
  switch (status.value) {
    case "backlog":
      return "Backlog";
    case "playing":
      return "Playing";
    case "finished":
      return "Finished";
    case "abandoned":
      return "Abandoned";
    default:
      return "My Games";
  }
});

const description = computed(() => {
  switch (status.value) {
    case "backlog":
      return "Games you want to play.";
    case "playing":
      return "Games you're currently playing.";
    case "finished":
      return "Games you've completed.";
    case "abandoned":
      return "Games you decided not to finish.";
    default:
      return "Your game library.";
  }
});

const selectGame = (gameId: number) => {
  router.push({
    name: "game-details",
    params: {
      id: gameId,
    },
  });
};
</script>

<template>
  <main class="my-games-list">
    <header class="page-header">
      <div>
        <RouterLink to="/my-games" class="back-link"> ← My Games </RouterLink>

        <h1>{{ title }}</h1>

        <p>
          {{ description }}
        </p>
      </div>
    </header>

    <section class="content">
      <div v-if="games.length" class="game-grid">
        <GameCard
          v-for="game in games"
          :key="game.id"
          :game="game"
          @select="selectGame"
        />
      </div>

      <div v-else class="empty-state">
        <h2>No games here yet</h2>
        <p>Games you add to this category will appear here.</p>

        <RouterLink to="/explore" class="explore-link">
          Explore games
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.my-games-list {
  min-height: 100vh;
  padding: 50px 40px;
}

.page-header {
  width: min(1400px, 100%);
  margin: 0 auto 40px;
  padding-bottom: 25px;
  border-bottom: 1px solid #333;
}

.page-header h1 {
  margin: 15px 0 8px;
  font-size: 2.5rem;
}

.page-header p {
  margin: 0;
  color: #aaa;
  font-size: 1rem;
}

.back-link {
  color: #aaa;
  text-decoration: none;
  font-size: 0.9rem;
}

.back-link:hover {
  color: #f5f5f5;
}

.content {
  width: min(1800px, 100%);
  margin: 0 auto;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.empty-state {
  max-width: 600px;
  margin: 80px auto;
  padding: 50px;
  text-align: center;
  border: 1px solid #333;
  border-radius: 14px;
  background: #1c1c1c;
}

.empty-state h2 {
  margin: 0 0 12px;
}

.empty-state p {
  margin: 0 0 25px;
  color: #aaa;
}

.explore-link {
  display: inline-block;
  padding: 10px 18px;
  border: 1px solid #444;
  border-radius: 6px;
  background: #333;
  color: #f5f5f5;
  text-decoration: none;
}

.explore-link:hover {
  background: #444;
}

@media (max-width: 700px) {
  .my-games-list {
    padding: 35px 20px;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .empty-state {
    padding: 35px 20px;
  }
}
</style>
