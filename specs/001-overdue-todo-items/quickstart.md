# Quickstart: Overdue Todo Item Identification

## Prerequisites
- Node.js 18+
- npm (workspace enabled)

## Setup
1. Clone the repository and checkout the feature branch:
   ```sh
   git clone <repo-url>
   cd session6
   git checkout 001-overdue-todo-items
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the App
- Start both frontend and backend from the root:
  ```sh
  npm start
  ```
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Testing
- Run all tests:
  ```sh
  npm test
  ```
- Lint code:
  ```sh
  npm run lint
  ```

## Feature-Specific Notes
- Overdue todos are visually indicated in the UI with a purple border, icon, and accessible label (see spec).
- Overdue count summary appears at the top of the todo list and updates dynamically as todos change.
- All overdue logic is fully tested in both backend and frontend.
- Accessibility: Overdue indicators and summary use color and text, with ARIA labels for screen readers.
- See `specs/001-overdue-todo-items/research.md` for open questions and decisions.

## Validation Steps
- Run `npm test` to ensure all tests pass (backend and frontend).
- Manually verify:
  - Overdue indicator appears only for incomplete todos with past due dates
  - Overdue summary count matches the number of overdue todos
  - Indicators update immediately when marking todos complete or editing due dates
  - UI is accessible in both light and dark mode
