To-Do Card – Stage 1 README

What changed from Stage 0
Stage 0 was a static, hard-coded card for display only. In Stage 1 the card is now interactive:

1. Editable fields – Task title, description, due date, and priority status can now be updated by the user instead of being hard-coded.
2. Due date logic – If the selected due date is in the past, the card shows an `Overdue` indicator.
3. Completion state – Added a checkbox to mark tasks complete. When ticked, the card displays a `Completed` state.
4. Priority indicators – Priority status can be changed and each level has a visual indicator: High, Medium, Low.
5. Toggle UI – Card view and edit form are mutually exclusive using CSS display. Clicking `Edit` hides the card and shows the form. Clicking `Save` hides the form and re-renders the updated card.

New design decisions
1. Single-view toggle – Choose to hide the card while editing to reduce visual clutter and focus user attention on the form. Uses `display: none/block` instead of routing or modals for simplicity.
2. Inline state indicators – `Overdue` and `Completed` are shown as badges/text on the card itself so status is obvious without extra clicks.


Any known limitations
1. No data persistence – Refreshing the page resets all edits to default values.
2. Basic validation – Empty title/description are currently allowed. No max length enforced.

Accessibility notes
1. Form labels – All inputs in the edit form have associated `<label>` elements for screen readers.
2. Keyboard access – `Edit` and `Save` buttons are real `<button>` elements and are reachable via Tab. Checkbox uses native `<input type="checkbox">` with label.
3. Status communication – `Overdue` and `Completed` states use text, not just color, so color-blind users get the info.
4. Focus management – When switching to edit mode, focus moves to the first input. On save, focus returns to the `Edit` button to avoid losing place.
