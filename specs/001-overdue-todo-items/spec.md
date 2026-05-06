# Feature Specification: Overdue Todo Item Identification

**Feature Branch**: `001-overdue-todo-items`  
**Created**: 2026-05-06  
**Status**: Draft  
**Input**: User description: "Support for Overdue Todo Items — users need a clear, visual way to identify which todos have not been completed by their due date."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visual Overdue Indicator on Todo Cards (Priority: P1)

A user opens the todo list and immediately sees which incomplete todos have passed their due date,
without having to compare each due date manually against today's date.
The overdue state is communicated through a distinct visual treatment on the todo card —
different from both the default incomplete state and the completed state.

**Why this priority**: This is the core value of the feature. Every other enhancement
(e.g., counts, sorting) is worthless without this foundational visual signal.

**Independent Test**: Can be fully tested by creating an incomplete todo with a due date in the past,
loading the list, and confirming that the card displays the overdue visual treatment.
Delivers immediate value — users can spot overdue items at a glance.

**Acceptance Scenarios**:

1. **Given** an incomplete todo with a due date in the past, **When** the user views the todo list, **Then** that todo card is visually distinguished from non-overdue cards (e.g., via a color, label, or icon indicating it is overdue).
2. **Given** an incomplete todo with a due date of today, **When** the user views the todo list, **Then** the card is NOT shown as overdue (today's items are still on time).
3. **Given** an incomplete todo with a due date in the future, **When** the user views the todo list, **Then** the card shows no overdue indicator.
4. **Given** a completed todo with a past due date, **When** the user views the todo list, **Then** the card shows no overdue indicator (completed items are not overdue regardless of date).
5. **Given** a todo with no due date set, **When** the user views the todo list, **Then** the card shows no overdue indicator.

---

### User Story 2 - Overdue Count Summary (Priority: P2)

A user can see at a glance how many todos are currently overdue, surfaced as a summary near the top
of the list, so they can gauge the scale of their overdue workload before reviewing individual items.

**Why this priority**: Provides aggregate context that helps users prioritize. Valuable once the
visual indicator (P1) exists, but the list remains usable without the count summary.

**Independent Test**: Can be tested by creating multiple overdue and non-overdue todos and
confirming the displayed count matches the number of incomplete, past-due items.

**Acceptance Scenarios**:

1. **Given** two incomplete todos with past due dates and one with a future due date, **When** the user views the todo list, **Then** a summary shows "2 overdue" (or equivalent phrasing).
2. **Given** no overdue todos, **When** the user views the todo list, **Then** no overdue count is displayed (or the summary is hidden/shows zero).
3. **Given** an overdue todo that the user marks as complete, **When** the list updates, **Then** the overdue count decreases by one.

---

### Edge Cases

- What happens when a todo's due date is exactly midnight of the current day? — The todo is NOT overdue; only dates strictly before today are overdue.
- What happens when the user's system clock changes (e.g., timezone shift)? — Overdue determination always uses the current local date at the time the list is rendered.
- What happens when all todos are overdue? — All incomplete cards show the overdue indicator; the count summary reflects the total.
- What happens when a user edits a previously overdue todo's due date to be in the future? — The overdue indicator is removed immediately upon saving the updated date.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST display a distinct visual indicator on any todo card that is both incomplete and has a due date strictly before the current date.
- **FR-002**: The system MUST NOT display an overdue indicator on completed todo items, regardless of their due date.
- **FR-003**: The system MUST NOT display an overdue indicator on todos with no due date.
- **FR-004**: The system MUST NOT display an overdue indicator on todos whose due date is today or in the future.
- **FR-005**: The overdue visual treatment MUST be visually distinguishable from both the default incomplete state and the completed (strikethrough) state.
- **FR-006**: The overdue indicator MUST update in the current view when a user marks an overdue todo as complete (without requiring a page reload).
- **FR-007**: The overdue indicator MUST update in the current view when a user edits an overdue todo's due date to a future date.
- **FR-008**: The system MUST display a summary count of currently overdue todos when one or more overdue items exist.
- **FR-009**: The overdue count summary MUST update dynamically when todo completion status or due dates change.

### Key Entities

- **Todo Item**: An existing entity with title, optional due date, and completion status. This feature does not add new persistent fields; overdue state is derived at render time by comparing the due date to the current date.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user can identify all overdue todos in a list of 20 items within 5 seconds without reading individual dates.
- **SC-002**: The overdue indicator is accurate 100% of the time — no incomplete future-dated or undated todo is ever shown as overdue, and no incomplete past-dated todo is ever shown without the indicator.
- **SC-003**: The overdue count summary matches the true count of overdue items at all times, updating within one rendering cycle of any status or date change.
- **SC-004**: The feature introduces no visual regression to the existing UI for non-overdue todos (completed, in-progress, and undated items retain their current appearance).

## Assumptions

- Overdue state is a derived, display-only property — no new fields are stored in the backend. The due date and completion status already persisted are sufficient.
- "Overdue" means the due date is strictly before today's local calendar date (not time-of-day precise).
- The existing dark mode and light mode color palettes both support adding a distinct overdue color without redesigning the UI (assumed based on the existing Halloween-themed design system with a danger color already defined).
- The overdue summary count is displayed in the list header area, consistent with the existing single-column layout.
- No notification, alert, or email is sent for overdue items — this is a visual-only feature scoped to the list view.
- Sorting or filtering by overdue status is out of scope for this feature.
