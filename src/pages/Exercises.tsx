import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

interface Exercise {
  id: number
  name: string
  category: string
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [newExercise, setNewExercise] = useState({ name: '', category: '' })

  const addExercise = () => {
    if (newExercise.name && newExercise.category) {
      setExercises([...exercises, { id: Date.now(), ...newExercise }])
      setNewExercise({ name: '', category: '' })
    }
  }

  const removeExercise = (id: number) => {
    setExercises(exercises.filter(exercise => exercise.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Exercises</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Exercise</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Exercise name"
            value={newExercise.name}
            onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
            className="border rounded px-2 py-1 flex-grow"
          />
          <input
            type="text"
            placeholder="Category"
            value={newExercise.category}
            onChange={(e) => setNewExercise({ ...newExercise, category: e.target.value })}
            className="border rounded px-2 py-1 w-1/3"
          />
          <button onClick={addExercise} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <Plus size={20} className="mr-2" /> Add
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Exercise List</h2>
        <ul className="space-y-2">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
              <div>
                <span className="font-semibold">{exercise.name}</span>
                <span className="ml-2 text-gray-600">({exercise.category})</span>
              </div>
              <button onClick={() => removeExercise(exercise.id)} className="text-red-600">
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Exercises