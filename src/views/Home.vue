<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h2>Accueil</h2>

    <!-- Formulaire d'ajout -->
    <form class="task-form" @submit.prevent="addTask">
      <div class="form-group">
        <label for="title">Titre de la tâche</label>
        <input
            id="title"
            v-model="newTaskTitle"
            :class="{ 'error': titleError }"
            class="input-field"
            placeholder="Ex: Apprendre Vue.js"
            required
        />
        <p v-if="titleError" class="error-message">{{ titleError }}</p>
      </div>

      <div class="form-group">
        <label for="description">Description (optionnelle)</label>
        <textarea
            id="description"
            v-model="newTaskDescription"
            class="textarea-field"
            placeholder="Décrivez la tâche..."
        ></textarea>
      </div>

      <button type="submit">Ajouter la tâche</button>
    </form>

    <!-- Statistiques -->
    <div class="stats">
      <p><strong>Total :</strong> {{ taskStore.totalTasks }}</p>
      <p><strong>Terminées :</strong> {{ taskStore.doneTasks.length }}</p>
    </div>

    <!-- Liste des tâches -->
    <div class="task-list">
      <TaskCard
          v-for="task in taskStore.tasks"
          :key="task.id"
          :description="task.description"
          :status="task.status"
          :title="task.title"
          @click="goToTask(task.id)"
      />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useTaskStore} from '../stores/tasks'
import TaskCard from '../components/TaskCard.vue'

const router = useRouter()
const taskStore = useTaskStore()

// États du formulaire
const newTaskTitle = ref('')
const newTaskDescription = ref('')
const titleError = ref('')

// Fonction d'ajout de tâche
function addTask() {
  const trimmedTitle = newTaskTitle.value.trim()

  if (trimmedTitle === '') {
    titleError.value = 'Le titre ne peut pas être vide !'
    return
  }

  titleError.value = ''

  taskStore.addTask(trimmedTitle, newTaskDescription.value)

  newTaskTitle.value = ''
  newTaskDescription.value = ''
}

// Navigation vers la page de détail
function goToTask(id) {
  router.push({name: 'TaskDetail', params: {id}})
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.task-form {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input-field, .textarea-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.input-field.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin: 0.25rem 0 0 0;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #2ecc71;
}

.stats {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>