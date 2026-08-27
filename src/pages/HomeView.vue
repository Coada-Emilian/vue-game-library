<script setup lang="ts">
import NavigationCard from "../components/NavigationCard.vue";
import NavigationSection from "../components/NavigationSection.vue";
</script>

<template>
  <main class="home">
    <section class="hero">
      <img src="/logo.png" alt="Game Library" class="logo" />

      <p>
        Welcome to your game library. Discover new games and keep track of what
        you want to play.
      </p>
    </section>

    <NavigationSection>
      <NavigationCard
        to="/explore"
        title="Explore"
        description="Search for games and discover new adventures."
      />

      <NavigationCard
        to="/my-games"
        title="My Games"
        description="Keep track of the games you want to play and finish."
      />
    </NavigationSection>
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

.logo {
  display: block;
  width: min(700px, 100%);
  height: auto;
  margin: 0 auto 20px;
}

.hero p {
  margin: 0;
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 700px) {
  .home {
    padding: 50px 20px;
  }
}
</style>
