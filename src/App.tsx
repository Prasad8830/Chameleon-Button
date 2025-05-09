import { Trash } from "lucide-react"
import { ChameleonButton } from "@/components/ChameleonButton"

function App() {
  return (
    <div className="flex flex-col gap-12 bg-background text-foreground min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Context-Aware Chameleon Button</h1>

      {/* Form Context */}
      <section className="p-6 border border-border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Form Context</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-input rounded-md bg-background text-foreground"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-input rounded-md bg-background text-foreground"
              placeholder="Enter your email"
            />
          </div>
          <ChameleonButton />
        </form>
      </section>

      {/* Trash Context */}
      <section className="p-6 border border-border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Trash Context</h2>
        <div className="flex items-center gap-4">
          <Trash className="h-6 w-6" />
          <ChameleonButton />
        </div>
      </section>

      {/* Card Context */}
      <section className="p-6 border border-border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Card Context</h2>
        <div className="border border-border rounded-lg p-4 shadow-sm card">
          <h3 className="font-medium mb-2">Card Title</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This is a card with some content. The button at the bottom should become a "Next" button.
          </p>
          <div className="flex justify-end">
            <ChameleonButton />
          </div>
        </div>
      </section>

      {/* Multiple Contexts */}
      <section className="p-6 border border-border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Multiple Contexts</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="item" className="block text-sm font-medium">
              Item to Delete
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="item"
                className="w-full p-2 border border-input rounded-md bg-background text-foreground"
                placeholder="Enter item name"
              />
              <Trash className="h-5 w-5" />
            </div>
          </div>
          <ChameleonButton />
        </form>
      </section>

      {/* Neutral Context */}
      <section className="p-6 border border-border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Neutral Context</h2>
        <div className="flex justify-center">
          <ChameleonButton />
        </div>
      </section>
    </div>
  )
}

export default App
