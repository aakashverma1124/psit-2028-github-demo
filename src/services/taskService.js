const { randomUUID } = require('crypto');

// In-memory data store to keep the example simple.
// In a real system this would be a database layer.
const tasks = [];

function listTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((task) => task.id === id) || null;
}

function createTask({ title }) {
  const newTask = {
    id: randomUUID(),
    title,
    completed: false
  };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, { title, completed }) {
  const task = getTaskById(id);
  if (!task) return null;

  if (typeof title === 'string') {
    task.title = title;
  }
  if (typeof completed === 'boolean') {
    task.completed = completed;
  }

  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = {
  listTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};

