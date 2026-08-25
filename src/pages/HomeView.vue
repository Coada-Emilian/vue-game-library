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
  .home {
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
