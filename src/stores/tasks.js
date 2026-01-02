// src/stores/tasks.js
import {defineStore} from 'pinia'

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: [
            {id: 1, title: 'Créer le composant TaskCard', description: 'Chapitre 2', status: 'done'},
            {id: 2, title: 'Gérer l’état avec ref()', description: 'Chapitre 3', status: 'todo'},
            {id: 3, title: 'Utiliser computed()', description: 'Chapitre 3', status: 'inprogress'}
        ]
    }),
    actions: {
        addTask(title, description = '') {
            this.tasks.push({
                id: Date.now(),
                title: title.trim(),
                description: description.trim(),
                status: 'todo'
            })
        },
        updateTask(id, updates) {
            const task = this.tasks.find(t => t.id === id)
            if (task) {
                Object.assign(task, updates)
            }
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id)
        }
    },
    getters: {
        doneTasks: state => state.tasks.filter(t => t.status === 'done'),
        totalTasks: state => state.tasks.length
    }
})