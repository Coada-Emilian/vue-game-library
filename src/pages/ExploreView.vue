<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import GameCard from "../components/GameCard.vue";
import Header from "../components/Header.vue";
import SearchForm from "../components/SearchForm.vue";
import { searchGames } from "../services/rawg";

const search = (query: string) => {
  submittedSearchTerm.value = query;

  router.push({
    name: "explore",
    query: {
      search: query,
    },
  });
};

const router = useRouter();
const route = useRoute();

const searchTerm = ref(
  typeof route.query.search === "string" ? route.query.search : "",
);

const submittedSearchTerm = ref(searchTerm.value);
const {
  data: games,
  isPending,
  error,
} = useQuery({
  queryKey: ["games", submittedSearchTerm],
  queryFn: () => searchGames(submittedSearchTerm.value),
  enabled: computed(() => submittedSearchTerm.value.length > 0),
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
  <main class="explore">
    <div class="explore-header">
      <Header />

      <SearchForm v-model="searchTerm" @search="search" />
    </div>

    <section class="content">
      <p v-if="isPending && submittedSearchTerm">Loading...</p>

      <p v-else-if="error">Something went wrong: {{ error.message }}</p>

      <p v-else-if="!games?.length">Search for a game to get started.</p>

      <div v-else class="game-grid">
        <GameCard
          v-for="game in games"
          :key="game.id"
          :game="game"
          @select="selectGame"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.explore {
  min-height: 100vh;
}

.content {
  width: min(1800px, 100%);
  margin: 0 auto;
  padding: 24px;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.explore-header {
  display: flex;
  align-items: center;
  background: #1c1c1c;
  border-bottom: 1px solid #333;
}

.explore-header :deep(.header) {
  border-bottom: none;
}

.explore-header :deep(.search-form) {
  margin-left: auto;
  margin-right: 20px;
}
</style>
