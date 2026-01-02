<!-- src/views/TaskDetail.vue -->
<template>
  <div class="task-detail">
    <h2>Détail de la tâche</h2>

    <div v-if="task" class="task-info">
      <h3>{{ task.title }}</h3>
      <p><strong>Description :</strong> {{ task.description }}</p>
      <p><strong>Status :</strong> <span :class="task.status">{{ task.status }}</span></p>
      <p><strong>ID :</strong> {{ task.id }}</p>
    </div>

    <div v-else class="not-found">
      <p>❌ Tâche non trouvée.</p>
      <router-link to="/">Retour à l'accueil</router-link>
    </div>

    <div class="actions">
      <router-link to="/">← Retour à la liste</router-link>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useTaskStore} from '../stores/tasks'

const route = useRoute()
const taskStore = useTaskStore()
const task = ref(null)

// Observer les changements dans le store
watch(() => taskStore.tasks, (tasks) => {
  const id = Number(route.params.id)
  task.value = tasks.find(t => t.id === id)
}, {immediate: true}) // Exécuter immédiatement au montage
</script>

<style scoped>
.task-detail {
  padding: 2rem;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #42b983;
  margin-bottom: 1rem;
}

.task-info {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.task-info h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.task-info p {
  margin: 0.5rem 0;
  color: #666;
}

.task-info .done {
  color: #2ecc71;
  font-weight: bold;
}

.task-info .todo {
  color: #e74c3c;
}

.task-info .inprogress {
  color: #f39c12;
}

.not-found {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.not-found p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.not-found a {
  color: #42b983;
  text-decoration: none;
}

.not-found a:hover {
  text-decoration: underline;
}

.actions {
  margin-top: 1.5rem;
  text-align: center;
}

.actions a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.actions a:hover {
  text-decoration: underline;
}
</style>