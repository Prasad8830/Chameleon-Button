import { useCallback } from "react"
import { isNearTrashIcon, isInForm, isAtBottomOfCard } from "@/utils/contextHelpers"

type ButtonContext = "submit" | "delete" | "next" | "default"

export const useContextDetection = () => {
  const detectContext = useCallback((element: HTMLElement): ButtonContext => {
    // Check for trash icon proximity first (highest priority)
    if (isNearTrashIcon(element)) {
      return "delete"
    }

    // Check if button is in a form
    if (isInForm(element)) {
      return "submit"
    }

    // Check if button is at the bottom of a card
    if (isAtBottomOfCard(element)) {
      return "next"
    }

    // Default fallback
    return "default"
  }, [])

  return { detectContext }
}
