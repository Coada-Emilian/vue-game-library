<script setup lang="ts"></script>

<template>
  <RouterLink to="/" class="logo-link">
    <img src="/logo.png" alt="Game Library" class="logo-image" />
  </RouterLink>

  <nav class="navigation">
    <RouterLink to="/explore">Explore</RouterLink>
    <RouterLink to="/my-games">My Games</RouterLink>
  </nav>
</template>

<style scoped>
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  display: block;
  width: 8.75rem;
  height: auto;
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

@media (max-width: 700px) {
  .logo-image {
    width: 12rem;
  }
}
</style>
