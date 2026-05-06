const TodoService = require('../src/services/todoService');
const Database = require('better-sqlite3');

describe('TodoService - Overdue Calculation', () => {
  let db, service;

  beforeEach(() => {
    db = new Database(':memory:');
    db.exec(`CREATE TABLE todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      dueDate TEXT,
      completed INTEGER DEFAULT 0,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
    )`);
    service = new TodoService(db);
  });

  afterEach(() => {
    db.close();
  });

  it('should identify overdue todos (dueDate < today, not completed)', () => {
    const today = new Date();
    const pastDate = new Date(today.getTime() - 86400000).toISOString().split('T')[0];
    service.createTodo('Past Due', pastDate);
    const todos = service.getAllTodos();
    // TODO: Add overdue calculation and assertion
    expect(todos.length).toBe(1);
     const isOverdue = TodoService.isOverdue(todos[0]);
     expect(isOverdue).toBe(true);
  });
});
