# Context Detection Logic

This document explains the detection logic used for the Chameleon Button component.

## Overview

The Chameleon Button changes its appearance and behavior based on its surrounding context without requiring explicit props. It uses DOM analysis to determine its context and adapts accordingly.

## Detection Methods

### 1. Trash Icon Proximity Detection

The button transforms into a "Delete" button when it's near a trash icon.

**Implementation:**
- Searches for elements with trash-related identifiers (SVG icons, class names)
- Calculates the Euclidean distance between the button and potential trash icons
- If any trash icon is within 150px, the button transforms into a "Delete" button

\`\`\`typescript
export const isNearTrashIcon = (element: HTMLElement): boolean => {
  // Find trash icons in the document
  const trashIcons = document.querySelectorAll(
    'svg[data-lucide="Trash"], .trash, .delete-icon, [class*="trash"], [class*="delete"]'
  )
  
  // Calculate distance between button and each trash icon
  // Return true if any trash icon is within 150px
}
\`\`\`

### 2. Form Context Detection

The button appears as a "Submit" button when placed inside a form.

**Implementation:**
- Traverses up the DOM tree from the button
- Checks if any ancestor element is a `<form>` tag
- If a form ancestor is found, the button transforms into a "Submit" button

\`\`\`typescript
export const isInForm = (element: HTMLElement): boolean => {
  // Traverse up the DOM tree
  // Return true if a form ancestor is found
}
\`\`\`

### 3. Card Context Detection

The button becomes a "Next" button when placed at the bottom of a card.

**Implementation:**
- Identifies potential card containers by looking for elements with card-related class names
- Calculates the button's position relative to the bottom of the card
- If the button is within 40px of the bottom of the card, it transforms into a "Next" button

\`\`\`typescript
export const isAtBottomOfCard = (element: HTMLElement): boolean => {
  // Find potential card containers
  // Calculate distance from bottom of card
  // Return true if button is near the bottom
}
\`\`\`

## Context Priority

When multiple contexts are detected, the following priority order is applied:

1. Trash Icon Proximity (highest priority)
2. Form Context
3. Card Context
4. Default (fallback)

This ensures consistent behavior when the button appears in ambiguous contexts.

## Dynamic Updates

The component uses:
- MutationObserver to detect DOM changes
- ResizeObserver to detect layout changes

This ensures the button updates its context when the surrounding DOM structure changes.

## Edge Cases Handled

1. **Multiple Trash Icons:** The button transforms if it's near any trash icon
2. **Nested Forms:** The button correctly identifies form context even in deeply nested structures
3. **Responsive Layout:** The context detection adapts to viewport size changes
4. **Dynamic Content:** The button updates when content is added or removed from the page
