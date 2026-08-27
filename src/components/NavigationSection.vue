<script setup lang="ts"></script>

<template>
  <div class="navigation">
    <slot></slot>
  </div>
</template>

<style scoped>
.navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 30px;
  width: min(900px, 100%);
}

@media (max-width: 700px) {
  .navigation {
    grid-template-columns: 1fr;
  }
}
</style>
