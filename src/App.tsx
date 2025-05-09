import type React from "react"

import { useState } from "react"
import { ChameleonButton } from "./components/ChameleonButton"
import { Trash2 } from "lucide-react"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [cards, setCards] = useState([1, 2, 3])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Form submitted with: ${formData.name}, ${formData.email}`)
  }

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Chameleon Button Demo</h1>

      <div className="grid gap-8">
        {/* Form Context */}
        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Form Context</h2>
          <p className="mb-4 text-gray-600">
            The button below will appear as a "Submit" button because it's inside a form.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="pt-2">
              <ChameleonButton />
            </div>
          </form>
        </section>

        {/* Trash Icon Context */}
        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Trash Icon Context</h2>
          <p className="mb-4 text-gray-600">
            The button below will appear as a "Delete" button because it's near a trash icon.
          </p>

          <div className="flex items-center space-x-4">
            <Trash2 className="h-6 w-6 text-gray-500" data-lucide="trash-2" />
            <ChameleonButton />
          </div>
        </section>

        {/* Card Context */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card} className="card border rounded-lg p-4 bg-white shadow-sm flex flex-col">
              <h3 className="text-lg font-medium mb-2">Card {card}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                This is a sample card with content. The button at the bottom will appear as a "Next" button.
              </p>
              <ChameleonButton />
            </div>
          ))}
        </section>

        {/* Default Context */}
        <section className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Default Context</h2>
          <p className="mb-4 text-gray-600">
            The button below will appear as a default button because it doesn't match any special context.
          </p>

          <div className="py-2">
           <ChameleonButton/>
          </div>
        </section>
      </div>
    </main>
  )
}
