<!-- src/components/TaskCard.vue -->
<template>
    <div class="task-card" :class="status">
      <h3 class="task-title">{{ title }}</h3>
      <p class="task-description">{{ description }}</p>
      <span class="status-badge">{{ status }}</span>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: 'Aucune description'
    },
    status: {
      type: String,
      default: 'todo',
      validator: (value) => ['todo', 'inprogress', 'done'].includes(value)
    }
  })
  </script>
  
  <style scoped>
  .task-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin: 0.5rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.2s;
    position: relative;
  }
  
  .task-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .task-title {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 1.1rem;
  }
  
  .task-description {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .status-badge {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: bold;
    color: white;
  }
  
  .task-card.todo .status-badge {
    background: #e74c3c;
  }
  
  .task-card.inprogress .status-badge {
    background: #f39c12;
  }
  
  .task-card.done .status-badge {
    background: #2ecc71;
  }
  </style>