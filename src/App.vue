<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create-blog">Create a new blog</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  padding: 1rem;
  border-bottom: 2px solid #333;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

nav a:hover {
  color: #00bcd4;
  transform: scale(1.05);
}

main {
  margin: 2rem;
}
</style>
