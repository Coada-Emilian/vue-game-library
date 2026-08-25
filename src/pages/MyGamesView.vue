<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <Header />
  <main class="my-games">
    <section class="hero">
      <h1>My Games</h1>

      <p>
        Keep track of the games you want to play, are playing, have finished, or
        have abandoned.
      </p>
    </section>

    <section class="navigation">
      <RouterLink to="/my-games/backlog" class="navigation-card">
        <h2>Backlog</h2>
        <p>Games you want to play.</p>
      </RouterLink>

      <RouterLink to="/my-games/playing" class="navigation-card">
        <h2>Playing</h2>
        <p>Games you're currently playing.</p>
      </RouterLink>

      <RouterLink to="/my-games/finished" class="navigation-card">
        <h2>Finished</h2>
        <p>Games you've completed.</p>
      </RouterLink>

      <RouterLink to="/my-games/abandoned" class="navigation-card">
        <h2>Abandoned</h2>
        <p>Games you decided not to finish.</p>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.my-games {
  min-height: 100vh;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  max-width: 700px;
  margin-bottom: 60px;
  text-align: center;
}

.hero h1 {
  margin: 0 0 20px;
  font-size: 3.5rem;
}

.hero p {
  margin: 0;
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.6;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 30px;
  width: min(900px, 100%);
}

.navigation-card {
  padding: 35px;
  border: 1px solid #333;
  border-radius: 14px;
  background: #1c1c1c;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.navigation-card:hover {
  transform: translateY(-5px);
  border-color: #666;
}

.navigation-card h2 {
  margin: 0 0 12px;
}

.navigation-card p {
  margin: 0;
  color: #aaa;
  line-height: 1.5;
}

@media (max-width: 700px) {
  .my-games {
    padding: 50px 20px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .navigation {
    grid-template-columns: 1fr;
  }
}
</style>
