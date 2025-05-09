import { useEffect, useRef, useState } from "react"
import { useContextDetection } from "./useContextDetection"
import { ArrowRight, Trash, Send } from "lucide-react"

type ButtonType = "submit" | "delete" | "next" | "default"

interface ChameleonButtonProps {
  className?: string
  onClick?: () => void
}

export const ChameleonButton = ({ className = "", onClick }: ChameleonButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonType, setButtonType] = useState<ButtonType>("default")
  const { detectContext } = useContextDetection()

  useEffect(() => {
    if (!buttonRef.current) return

    const updateButtonType = () => {
      const context = detectContext(buttonRef.current!)
      setButtonType(context)
    }

    // Initial detection
    updateButtonType()

    // Set up mutation observer to detect DOM changes
    const observer = new MutationObserver(updateButtonType)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    // Set up resize observer to detect layout changes
    const resizeObserver = new ResizeObserver(updateButtonType)
    resizeObserver.observe(document.body)

    // Add a periodic check to handle any edge cases
    const intervalId = setInterval(updateButtonType, 1000)

    // Clean up
    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      clearInterval(intervalId)
    }
  }, [detectContext])

  const getButtonStyles = (): string => {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-all duration-200"

    switch (buttonType) {
      case "submit":
        return `${baseStyles} bg-green-600 hover:bg-green-700 text-white ${className}`
      case "delete":
        return `${baseStyles} bg-red-600 hover:bg-red-700 text-white ${className}`
      case "next":
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white ${className}`
      default:
        return `${baseStyles} bg-gray-600 hover:bg-gray-700 text-white ${className}`
    }
  }

  const getButtonContent = () => {
    switch (buttonType) {
      case "submit":
        return (
          <>
            <span>Submit</span>
            <Send className="ml-2 h-4 w-4" />
          </>
        )
      case "delete":
        return (
          <>
            <span>Delete</span>
            <Trash className="ml-2 h-4 w-4" />
          </>
        )
      case "next":
        return (
          <>
            <span>Next</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )
      default:
        return <span>Action</span>
    }
  }

  // Add debugging to help see what's happening
  console.log(`Button type: ${buttonType}`)

  return (
    <button
      ref={buttonRef}
      className={`flex items-center justify-center ${getButtonStyles()}`}
      type={buttonType === "submit" ? "submit" : "button"}
      onClick={onClick}
      data-context={buttonType}
    >
      {getButtonContent()}
    </button>
  )
}
