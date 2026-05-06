<!--
SYNC IMPACT REPORT
==================
Version change: (none) → 1.0.0
Added sections: Core Principles (I–V), Technology Stack & Constraints, Development Workflow, Governance
Removed sections: N/A (initial fill from template)
Modified principles: N/A (first authored version)
Templates:
  ✅ .specify/templates/plan-template.md — Constitution Check gates align with principles I–V
  ✅ .specify/templates/spec-template.md — no constitution-specific references require update
  ✅ .specify/templates/tasks-template.md — task categories (test, UI, code-quality) align with principles
Deferred TODOs: none
-->

# Todo App Constitution

## Core Principles

### I. Test-First Development (NON-NEGOTIABLE)

All new functionality MUST be covered by tests before the implementation is considered complete.
Tests MUST be written to describe expected behavior, not implementation internals.
Target coverage is 80%+ across all packages (frontend and backend).
Unit tests MUST isolate the subject under test — all external dependencies MUST be mocked.
Integration tests MUST verify real interactions between units; only external systems may be mocked.
End-to-end tests are out of scope for initial development.
Tests MUST be independent: no shared mutable state between test cases; each test sets up and
tears down its own data.
Test files MUST be colocated under `__tests__/` directories adjacent to the source they cover,
named `{filename}.test.js`.

### II. Clean Code & Single Responsibility

Every module, component, and function MUST have one clearly defined responsibility.
Code MUST follow the DRY principle — repeated logic MUST be extracted into shared utilities
or components before a second usage is introduced.
The KISS principle governs all design choices: simple, readable solutions MUST be preferred
over clever or prematurely optimized ones.
Naming MUST be descriptive and follow project conventions:
`camelCase` for variables/functions, `PascalCase` for classes/components,
`UPPER_SNAKE_CASE` for constants.
All code MUST pass ESLint checks before being committed or opened as a pull request.
Imports MUST be ordered: external libraries → internal modules → styles, with a blank line
separating each group.

### III. Full-Stack Monorepo Architecture

The project MUST be maintained as a single npm-workspaces monorepo with exactly two packages:
`packages/frontend` (React) and `packages/backend` (Node.js/Express).
Frontend and backend MUST communicate exclusively via the HTTP REST API exposed by the backend.
Neither package MUST directly import from the other's source tree.
All root-level npm scripts (`start`, `test`) MUST delegate to both packages so the entire
application can be started and tested from the repository root.

### IV. Minimal Viable Feature Set

Features MUST map directly to the functional requirements defined in `docs/functional-requirements.md`.
Scope creep is not permitted: filtering, search, priorities, categories, multi-user support,
authentication, recurring todos, bulk operations, and undo/redo are explicitly out of scope.
Every new feature MUST be traceable to a user story with independently testable acceptance criteria.
The UI MUST remain simple and focused on core CRUD operations for todo items.

### V. Consistent, Accessible UI

The UI MUST implement the design system specified in `docs/ui-guidelines.md`:
8px grid spacing system, Material Design-inspired component style, and Halloween color theme.
Both light mode and dark mode MUST be supported and togglable at runtime.
All interactive elements MUST have visible focus indicators and pointer cursors.
Typography MUST use the system font stack; no external font dependencies are permitted.
Confirmation dialogs MUST be used for destructive actions (e.g., delete) to prevent
accidental data loss.

## Technology Stack & Constraints

- **Frontend**: React (with React DOM), CSS Modules or plain CSS for styling, Jest +
  `@testing-library/react` for tests.
- **Backend**: Node.js (v16+), Express.js for the REST API, Jest for tests.
- **Package Manager**: npm (v7+) with workspaces.
- **Language**: JavaScript (ES2020+); no TypeScript migration is in scope.
- **Persistence**: Backend in-memory or file-based storage; no external database is required.
- **No authentication**: Single-user application; user identification is out of scope.
- **No mobile optimization**: Desktop-focused layout (max-width 600px centered column).

## Development Workflow

- All work MUST occur on a feature branch; direct commits to `main` are not permitted.
- Pull requests MUST pass all automated tests (both packages) before merging.
- ESLint MUST report zero errors; warnings SHOULD be resolved before merging.
- Code coverage MUST NOT regress below 80% on any PR that touches source files.
- Commit messages SHOULD follow the Conventional Commits format
  (`feat:`, `fix:`, `test:`, `docs:`, `chore:`).
- Destructive actions (delete branch, force-push, drop data) MUST require explicit confirmation
  before execution.

## Governance

This constitution supersedes all informal practices. Any change to a Core Principle requires:
1. A written rationale explaining why the change is necessary.
2. An updated constitution file with an incremented version number following semantic versioning:
   MAJOR for principle removal or redefinition, MINOR for new principle or material expansion,
   PATCH for clarifications and wording fixes.
3. A review of all dependent templates (plan, spec, tasks) to propagate the change.

All pull request reviews MUST verify compliance with the five Core Principles.
The `docs/` folder is the authoritative source for functional requirements and UI guidelines;
the constitution defers to those documents for specifics.

**Version**: 1.0.0 | **Ratified**: 2026-05-06 | **Last Amended**: 2026-05-06
