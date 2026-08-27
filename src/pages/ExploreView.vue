<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ErrorMessage from "../components/ErrorMessage.vue";
import GameCard from "../components/GameCard.vue";
import Header from "../components/Header.vue";
import Loader from "../components/Loader.vue";
import { searchGames } from "../services/rawg";

const router = useRouter();
const route = useRoute();

const search = (query: string) => {
  submittedSearchTerm.value = query;

  router.push({
    name: "explore",
    query: {
      search: query,
    },
  });
};

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
      <Header :onSearch="search" :showSearch="true" />
    </div>

    <section class="content">
      <Loader v-if="isPending && submittedSearchTerm" :active="isPending" />

      <ErrorMessage
        v-else-if="error"
        :message="`Something went wrong: ${error.message}`"
      />

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
