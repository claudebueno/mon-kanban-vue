<!-- src/App.vue -->
<template>
  <div class="app">
    <header>
      <h1>Mon gestionnaire de tâches</h1>
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/task/1">Voir tâche 1</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>Vue.js — Formation Chapitre 5</p>
    </footer>
  </div>
</template>

<script setup>
// Pas besoin de logique ici
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

header h1 {
  color: #42b983;
  margin: 0 0 0.5rem 0;
}

nav {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
}

nav a {
  color: #42b983;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 1rem 0;
}

footer {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  color: #999;
}
</style>