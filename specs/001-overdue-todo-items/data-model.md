# Data Model: Overdue Todo Item Identification

## Entities

### Todo
- id: string
- title: string
- description: string (optional)
- dueDate: date (optional)
- completed: boolean
- createdAt: date
- updatedAt: date

## Relationships
- Each todo is independent (no parent/child or project grouping).

## Validation Rules
- title: required, non-empty
- dueDate: optional; if present, must be a valid date
- completed: boolean, default false

## State Transitions
- A todo is "overdue" if: `!completed && dueDate < today`
- A todo is "completed" if: `completed === true`
- A todo is "pending" if: `!completed && (dueDate === today || dueDate > today || !dueDate)`

## Notes
- Overdue status is derived, not stored.
- All date comparisons use local date (not time).
