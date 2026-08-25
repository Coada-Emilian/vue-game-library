<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import GameCard from "../components/GameCard.vue";
import Header from "../components/header/Header.vue";
import { searchGames } from "../services/rawg";

const searchTerm = ref("");
const submittedSearchTerm = ref("");

const {
  data: games,
  isPending,
  error,
} = useQuery({
  queryKey: ["games", submittedSearchTerm],
  queryFn: () => searchGames(submittedSearchTerm.value),
  enabled: computed(() => submittedSearchTerm.value.length > 0),
});

const search = (query: string) => {
  submittedSearchTerm.value = query;
};

const router = useRouter();

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
    <Header v-model="searchTerm" @search="search" />

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
</style>
