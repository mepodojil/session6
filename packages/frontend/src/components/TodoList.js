import React from 'react';
import TodoCard from './TodoCard';


function TodoList({ todos, onToggle, onEdit, onDelete, isLoading }) {
  const overdueCount = todos.filter(todo => todo.overdue).length;

  if (todos.length === 0) {
    return (
      <div className="todo-list empty-state">
        <p className="empty-state-message">
          No todos yet. Add one to get started! 47b
        </p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {overdueCount > 0 && (
        <div className="overdue-summary" aria-live="polite" aria-atomic="true">
          <span className="overdue-summary-label" role="status">
            {overdueCount} overdue
          </span>
        </div>
      )}
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

export default TodoList;
