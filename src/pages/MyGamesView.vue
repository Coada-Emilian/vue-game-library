<script setup lang="ts">
import Header from "../components/Header.vue";
import NavigationCard from "../components/NavigationCard.vue";
import NavigationSection from "../components/NavigationSection.vue";
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

    <NavigationSection>
      <NavigationCard
        to="/my-games/backlog"
        title="Backlog"
        description="Games you want to play."
      />

      <NavigationCard
        to="/my-games/playing"
        title="Playing"
        description="Games you're currently playing."
      />

      <NavigationCard
        to="/my-games/finished"
        title="Finished"
        description="Games you've completed."
      />

      <NavigationCard
        to="/my-games/abandoned"
        title="Abandoned"
        description="Games you decided not to finish."
      />
    </NavigationSection>
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

@media (max-width: 700px) {
  .my-games {
    padding: 50px 20px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>
