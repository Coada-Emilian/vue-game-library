<script setup lang="ts"></script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo-link">
      <img src="/logo.png" alt="Game Library" class="logo-image" />
    </RouterLink>

    <nav class="navigation">
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/my-games">My Games</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid #333;
  background: #1c1c1c;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  display: block;
  width: 140px;
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
  .header {
    padding: 12px 20px;
    flex-direction: column;
  }
}
</style>
