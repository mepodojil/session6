# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.

**Language/Version**: JavaScript (Node.js 18+, React 18+)  
**Primary Dependencies**: React, Express, Jest, ESLint, (NEEDS CLARIFICATION: UI library for overdue indicator?)  
**Storage**: In-memory (dev), file or simple DB (NEEDS CLARIFICATION: persistent storage for todos?)  
**Testing**: Jest (unit/integration), React Testing Library (frontend), (NEEDS CLARIFICATION: E2E?)  
**Target Platform**: Web (modern browsers), Node.js server  
**Project Type**: Full-stack monorepo (frontend: React SPA, backend: REST API)  
**Performance Goals**: <200ms UI update latency, (NEEDS CLARIFICATION: backend response time targets?)  
**Constraints**: Must follow monorepo, no cross-package imports, UI must support dark/light mode, (NEEDS CLARIFICATION: accessibility for overdue indicator?)  
**Scale/Scope**: Single-user, local dev, (NEEDS CLARIFICATION: expected todo volume?)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [ ] **I. Test-First**: Test tasks are included for every new unit and integration point.
- [ ] **II. Clean Code**: No repeated logic; naming conventions followed; ESLint passes.
- [ ] **III. Monorepo Architecture**: Changes stay within `packages/frontend` or `packages/backend`; no cross-package imports.
- [ ] **IV. Minimal Feature Set**: Feature maps to a user story in `docs/functional-requirements.md`; no out-of-scope additions.
- [ ] **V. Consistent UI**: UI changes follow the design system in `docs/ui-guidelines.md`; dark/light mode preserved.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: This project uses a monorepo with two packages:
- `packages/backend`: Express REST API, source in `src/`, tests in `__tests__/`
- `packages/frontend`: React SPA, source in `src/`, tests in `__tests__/`, components in `src/components/`, services in `src/services/`
All feature code and tests for overdue todo identification will be implemented within these directories, following the monorepo and package boundaries.
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
