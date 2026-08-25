<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import GameCard from "../components/GameCard.vue";
import Header from "../components/header/Header.vue";
import searchGames from "../services/rawg";

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

const selectGame = (gameId: number) => {
  console.log("Selected game:", gameId);
};
</script>

<template>
  <main>
    <Header v-model="searchTerm" @search="search" />

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
  </main>
</template>

<style scoped>
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
