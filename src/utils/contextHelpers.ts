/**
 * Checks if an element is near a trash icon
 */
export const isNearTrashIcon = (element: HTMLElement): boolean => {
  // Look for elements with trash icon (either SVG or elements with trash-related classes)
  const trashIcons = document.querySelectorAll(
    'svg[data-lucide="Trash"], .trash, .delete-icon, [class*="trash"], [class*="delete"]',
  )

  if (!trashIcons.length) return false

  // Check proximity (within 100px)
  const elementRect = element.getBoundingClientRect()

  for (const icon of trashIcons) {
    const iconRect = icon.getBoundingClientRect()

    // Calculate distance between centers
    const distance = Math.sqrt(
      Math.pow(elementRect.left + elementRect.width / 2 - (iconRect.left + iconRect.width / 2), 2) +
        Math.pow(elementRect.top + elementRect.height / 2 - (iconRect.top + iconRect.height / 2), 2),
    )

    // If within 100px, consider it "near" (reduced from 150px)
    if (distance < 100) {
      return true
    }
  }

  return false
}

/**
 * Checks if an element is inside a form
 */
export const isInForm = (element: HTMLElement): boolean => {
  let current: HTMLElement | null = element

  // Traverse up the DOM tree to find a form ancestor
  while (current && current !== document.body) {
    if (current.tagName === "FORM") {
      // Make sure it's not near a trash icon
      const trashIcons = current.querySelectorAll(
        'svg[data-lucide="Trash"], .trash, .delete-icon, [class*="trash"], [class*="delete"]',
      )

      if (trashIcons.length === 0) {
        return true
      }
    }
    current = current.parentElement
  }

  return false
}

/**
 * Checks if an element is at the bottom of a card-like container
 */
export const isAtBottomOfCard = (element: HTMLElement): boolean => {
  // Look for parent elements that might be cards
  const potentialCards = [
    element.closest(".card"),
    element.closest('[class*="card"]'),
    element.closest('[class*="box"]'),
    element.closest('[class*="container"]'),
  ].filter(Boolean) as HTMLElement[]

  if (!potentialCards.length) return false

  const card = potentialCards[0]
  const cardRect = card.getBoundingClientRect()
  const elementRect = element.getBoundingClientRect()

  // Check if the element is in the bottom portion of the card
  const distanceFromBottom = cardRect.bottom - elementRect.bottom

  // If the element is within 40px of the bottom of the card
  // and not near a trash icon
  if (distanceFromBottom >= 0 && distanceFromBottom <= 40) {
    // Make sure it's not near a trash icon
    const trashIcons = card.querySelectorAll(
      'svg[data-lucide="Trash"], .trash, .delete-icon, [class*="trash"], [class*="delete"]',
    )

    if (trashIcons.length === 0) {
      return true
    }
  }

  return false
}
