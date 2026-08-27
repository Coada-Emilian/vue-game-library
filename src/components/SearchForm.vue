<script setup lang="ts">
const searchTerm = defineModel<string>();

const emit = defineEmits<{
  search: [query: string];
}>();

const onSubmit = () => {
  emit("search", searchTerm.value ?? "");
};
</script>

<template>
  <form class="search-form" @submit.prevent="onSubmit">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search for a game..."
    />

    <button type="submit">Search</button>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  gap: 8px;
  margin-left: auto;
  margin-right: 20px;
}

.search-form input {
  width: 260px;
  padding: 9px 12px;
  border: 1px solid #444;
  border-radius: 6px;
  background: #111;
  color: #f5f5f5;
  font: inherit;
}

.search-form input::placeholder {
  color: #777;
}

.search-form input:focus {
  outline: none;
  border-color: #777;
}

.search-form button {
  padding: 9px 16px;
  border: 1px solid #444;
  border-radius: 6px;
  background: #333;
  color: #f5f5f5;
  font: inherit;
  cursor: pointer;
}

.search-form button:hover {
  background: #444;
}

@media (max-width: 700px) {
  .search-form {
    width: 100%;
  }

  .search-form input {
    flex: 1;
    width: auto;
  }
}
</style>
