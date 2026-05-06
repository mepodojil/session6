---
description: "Task list for Overdue Todo Item Identification feature"
---

# Tasks: Overdue Todo Item Identification

**Input**: Design documents from `/specs/001-overdue-todo-items/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Create/verify project structure per plan.md (packages/frontend, packages/backend)
- [ ] T002 Initialize dependencies in both packages (React, Express, Jest, ESLint) via package.json
- [ ] T003 [P] Configure linting and formatting tools in both packages (ESLint, Prettier)
- [ ] T004 [P] Add scripts for start, test, lint at root and in both packages

---

## Phase 2: Foundational (Blocking Prerequisites)

- [ ] T005 Create/verify Todo entity in backend/src/models/todo.js
- [ ] T006 [P] Implement overdue status calculation utility in backend/src/services/todoService.js
- [ ] T007 [P] Expose overdue status in backend API response in backend/src/api/todo.js
- [ ] T008 [P] Sync frontend todo model with backend (add overdue field to service layer) in frontend/src/services/todoService.js
- [ ] T009 [P] Add/verify test coverage for overdue calculation in backend/__tests__/todoService.test.js
- [ ] T010 [P] Add/verify test coverage for overdue field in frontend/src/services/__tests__/todoService.test.js

---

## Phase 3: User Story 1 - Visual Overdue Indicator on Todo Cards (Priority: P1) 🎯 MVP

**Goal**: Users see a clear, accessible visual indicator on each overdue, incomplete todo card.

**Independent Test**: Create an incomplete todo with a past due date and confirm the card displays the overdue visual treatment.

### Tests for User Story 1

- [ ] T011 [P] [US1] Unit test: overdue indicator logic in frontend/src/components/__tests__/TodoCard.test.js
- [ ] T012 [P] [US1] Integration test: overdue indicator in frontend/src/__tests__/App.test.js

### Implementation for User Story 1

- [ ] T013 [P] [US1] Update TodoCard component to display overdue visual treatment in frontend/src/components/TodoCard.js
- [ ] T014 [P] [US1] Add overdue label/icon and accessible color in frontend/src/components/TodoCard.js, frontend/src/styles/theme.css
- [ ] T015 [US1] Ensure overdue indicator updates on completion or due date edit in frontend/src/components/TodoCard.js
- [ ] T016 [US1] Validate accessibility (color contrast, ARIA) for overdue indicator in frontend/src/components/TodoCard.js

---

## Phase 4: User Story 2 - Overdue Count Summary (Priority: P2)

**Goal**: Users see a summary count of overdue todos at the top of the list.

**Independent Test**: Create multiple overdue and non-overdue todos and confirm the displayed count matches the number of overdue items.

### Tests for User Story 2

- [ ] T017 [P] [US2] Unit test: overdue count calculation in frontend/src/components/__tests__/TodoList.test.js
- [ ] T018 [P] [US2] Integration test: overdue count summary in frontend/src/__tests__/App.test.js

### Implementation for User Story 2

- [ ] T019 [P] [US2] Add overdue count summary UI in frontend/src/components/TodoList.js
- [ ] T020 [US2] Ensure overdue count updates dynamically on todo changes in frontend/src/components/TodoList.js
- [ ] T021 [US2] Validate accessibility for overdue count summary in frontend/src/components/TodoList.js

---

## Final Phase: Polish & Cross-Cutting Concerns

- [ ] T022 [P] Documentation updates in docs/ and quickstart.md
- [ ] T023 Code cleanup and refactoring in both packages
- [ ] T024 [P] Additional unit/integration tests for edge cases in frontend/src/components/__tests__/ and backend/__tests__/
- [ ] T025 Performance optimization for overdue calculation and UI updates
- [ ] T026 Security review (no sensitive data in overdue logic)
- [ ] T027 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies
- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after Foundational (Phase 2); independently testable

### Parallel Execution Examples
- T003, T004 can run in parallel after T002
- T006, T007, T008, T009, T010 can run in parallel after T005
- T011, T012, T013, T014 can run in parallel after foundational phase
- T017, T018, T019 can run in parallel after US1 is complete

---

## Implementation Strategy
- Deliver MVP with User Story 1 (visual overdue indicator)
- Add User Story 2 (overdue count summary) as an incremental enhancement
- Each user story is independently testable and deliverable
