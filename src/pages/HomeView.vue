<script setup lang="ts"></script>

<template>
  <main class="home">
    <section class="hero">
      <h1>Game Library</h1>

      <p>
        Welcome to your game library. Discover new games and keep track of what
        you want to play.
      </p>
    </section>

    <section class="navigation">
      <RouterLink to="/explore" class="navigation-card">
        <h2>Explore</h2>
        <p>Search for games and discover new adventures.</p>
      </RouterLink>

      <RouterLink to="/my-games" class="navigation-card">
        <h2>My Games</h2>
        <p>Keep track of the games you want to play and finish.</p>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
}

.hero {
  text-align: center;
  max-width: 700px;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 16px;
}

.hero p {
  font-size: 18px;
  line-height: 1.6;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 24px;
  width: min(800px, 100%);
}

.navigation-card {
  padding: 32px;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.navigation-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.navigation-card h2 {
  margin-top: 0;
}

@media (max-width: 650px) {
  .navigation {
    grid-template-columns: 1fr;
  }
}
</style>
