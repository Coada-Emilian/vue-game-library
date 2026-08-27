<script setup lang="ts">
defineProps<{
  to: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <RouterLink :to="to" class="navigation-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </RouterLink>
</template>

<style scoped>
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
</style>
