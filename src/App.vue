<!-- src/App.vue -->
<template>
  <div class="app">
    <header>
      <h1>Mon gestionnaire de tâches</h1>
      <p>Chapitre 4 : Gestion des événements et formulaires</p>
    </header>

    <main>
      <!-- Formulaire d'ajout -->
      <form @submit.prevent="addTask" class="task-form">
        <div class="form-group">
          <label for="title">Titre de la tâche</label>
          <input
            id="title"
            v-model="newTaskTitle"
            placeholder="Ex: Apprendre Vue.js"
            required
            class="input-field"
            :class="{ 'error': titleError }"
          />
          <p v-if="titleError" class="error-message">{{ titleError }}</p>
        </div>

        <div class="form-group">
          <label for="description">Description (optionnelle)</label>
          <textarea
            id="description"
            v-model="newTaskDescription"
            placeholder="Décrivez la tâche..."
            class="textarea-field"
          ></textarea>
        </div>

        <button type="submit">Ajouter la tâche</button>
      </form>

      <!-- Statistiques -->
      <div class="stats">
        <p><strong>Total :</strong> {{ tasks.length }}</p>
        <p><strong>Terminées :</strong> {{ doneTasks.length }}</p>
      </div>

      <!-- Liste des tâches -->
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
      <p>Vue.js — Formation Chapitre 4</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TaskCard from './components/TaskCard.vue'

// États du formulaire
const newTaskTitle = ref('')
const newTaskDescription = ref('')
const titleError = ref('')

// Tableau de tâches
const tasks = ref([
  { id: 1, title: 'Créer le composant TaskCard', description: 'Chapitre 2', status: 'done' },
  { id: 2, title: 'Gérer l’état avec ref()', description: 'Chapitre 3', status: 'todo' },
  { id: 3, title: 'Utiliser computed()', description: 'Chapitre 3', status: 'inprogress' }
])

// Computed : tâches terminées
const doneTasks = computed(() => {
  return tasks.value.filter(task => task.status === 'done')
})

// Fonction d'ajout de tâche
function addTask() {
  const trimmedTitle = newTaskTitle.value.trim()
  
  if (trimmedTitle === '') {
    titleError.value = 'Le titre ne peut pas être vide !'
    return
  }

  // Réinitialiser l'erreur
  titleError.value = ''

  // Ajouter la tâche
  tasks.value.push({
    id: Date.now(), // ID unique
    title: trimmedTitle,
    description: newTaskDescription.value.trim(),
    status: 'todo'
  })

  // Réinitialiser les champs
  newTaskTitle.value = ''
  newTaskDescription.value = ''
}
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

.task-form {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  color: black;
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