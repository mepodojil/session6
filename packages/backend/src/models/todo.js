// Todo model for backend
// Data model: see specs/001-overdue-todo-items/data-model.md

class Todo {
  constructor({ id, title, description = '', dueDate = null, completed = false, createdAt = null, updatedAt = null }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? new Date(dueDate) : null;
    this.completed = completed;
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
    this.updatedAt = updatedAt ? new Date(updatedAt) : new Date();
  }
}

module.exports = Todo;
