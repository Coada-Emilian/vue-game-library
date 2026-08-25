<script setup lang="ts"></script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">Game Library</RouterLink>

    <nav class="navigation">
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/my-games">My Games</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  border-bottom: 1px solid #333;
  background: #1c1c1c;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 700px) {
  .header {
    padding: 20px;
    flex-direction: column;
  }
}

.navigation {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}

.navigation a {
  color: #aaa;
  text-decoration: none;
}

.navigation a:hover {
  color: #f5f5f5;
}

.navigation a.router-link-active {
  color: #f5f5f5;
}
</style>
