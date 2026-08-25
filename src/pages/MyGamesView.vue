<script setup lang="ts">
import { computed } from "vue";
import GameCard from "../components/GameCard.vue";
import Header from "../components/Header.vue";
import { useLibraryStore } from "../stores/library";

const library = useLibraryStore();

const backlog = computed(() =>
  library.games.filter((game) => game.status === "backlog"),
);

const playing = computed(() =>
  library.games.filter((game) => game.status === "playing"),
);

const finished = computed(() =>
  library.games.filter((game) => game.status === "finished"),
);

const abandoned = computed(() =>
  library.games.filter((game) => game.status === "abandoned"),
);
</script>

<template>
  <Header />
  <main class="my-games">
    <h1>My Games</h1>

    <section>
      <h2>Backlog</h2>

      <div v-if="backlog.length" class="game-grid">
        <GameCard v-for="game in backlog" :key="game.id" :game="game" />
      </div>

      <p v-else>No games in your backlog.</p>
    </section>

    <section>
      <h2>Playing</h2>

      <div v-if="playing.length" class="game-grid">
        <GameCard v-for="game in playing" :key="game.id" :game="game" />
      </div>

      <p v-else>No games currently being played.</p>
    </section>

    <section>
      <h2>Finished</h2>

      <div v-if="finished.length" class="game-grid">
        <GameCard v-for="game in finished" :key="game.id" :game="game" />
      </div>

      <p v-else>No finished games.</p>
    </section>

    <section>
      <h2>Abandoned</h2>

      <div v-if="abandoned.length" class="game-grid">
        <GameCard v-for="game in abandoned" :key="game.id" :game="game" />
      </div>

      <p v-else>No abandoned games.</p>
    </section>
  </main>
</template>
