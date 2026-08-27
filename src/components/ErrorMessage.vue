<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<template>
  <div class="error-message">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.error-message {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 24px;
  color: #aaa;
  text-align: center;
}

.error-message p {
  margin: 0;
}
</style>
