<script setup lang="ts">
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <div v-if="active" class="loader">
    <div class="spinner"></div>
    <span>Loading games...</span>
  </div>
</template>

<style scoped>
.loader {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: #aaa;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid #333;
  border-top-color: #aaa;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
