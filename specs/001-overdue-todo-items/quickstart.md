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
- Overdue todos are visually indicated in the UI (see spec).
- Overdue count summary appears at the top of the todo list.
- See `specs/001-overdue-todo-items/research.md` for open questions and decisions.
