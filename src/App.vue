<!-- src/App.vue -->
<template>
  <div class="app">
    <header>
      <h1>Mon gestionnaire de tâches</h1>
      <p>Chapitre 3 : Réactivité et gestion d’état</p>
    </header>

    <main>
      <div class="stats">
        <p><strong>Total :</strong> {{ tasks.length }}</p>
        <p><strong>Terminées :</strong> {{ doneTasks.length }}</p>
      </div>

      <div class="task-list">
        <TaskCard 
          v-for="task in tasks" 
          :key="task.id"
          :title="task.title"
          :description="task.description"
          :status="task.status"
        />
      </div>
    </main>

    <footer>
      <p>Vue.js — Formation Chapitre 3</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TaskCard from './components/TaskCard.vue'

// Tableau de tâches réactif
const tasks = ref([
  { id: 1, title: 'Créer le composant TaskCard', description: 'Chapitre 2', status: 'done' },
  { id: 2, title: 'Gérer l’état avec ref()', description: 'Chapitre 3', status: 'todo' },
  { id: 3, title: 'Utiliser computed()', description: 'Chapitre 3', status: 'inprogress' }
])

// Computed : tâches terminées
const doneTasks = computed(() => {
  return tasks.value.filter(task => task.status === 'done')
})
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

header p {
  color: #666;
  font-size: 0.9rem;
}

.stats {
  background: #f0f0f0;
  color: #3e2aac;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

footer {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  color: #999;
}
</style>