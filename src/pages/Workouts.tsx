import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

interface Exercise {
  id: number
  name: string
  sets: number
  reps: number
  weight: number
}

interface Workout {
  id: number
  date: string
  exercises: Exercise[]
}

const Workouts: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [newWorkout, setNewWorkout] = useState<Exercise[]>([])

  const addExercise = () => {
    setNewWorkout([...newWorkout, { id: Date.now(), name: '', sets: 0, reps: 0, weight: 0 }])
  }

  const updateExercise = (index: number, field: keyof Exercise, value: string | number) => {
    const updatedWorkout = [...newWorkout]
    updatedWorkout[index] = { ...updatedWorkout[index], [field]: value }
    setNewWorkout(updatedWorkout)
  }

  const removeExercise = (index: number) => {
    setNewWorkout(newWorkout.filter((_, i) => i !== index))
  }

  const saveWorkout = () => {
    if (newWorkout.length === 0) return
    const workout: Workout = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      exercises: newWorkout
    }
    setWorkouts([...workouts, workout])
    setNewWorkout([])
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Workouts</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">New Workout</h2>
        {newWorkout.map((exercise, index) => (
          <div key={exercise.id} className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              placeholder="Exercise name"
              value={exercise.name}
              onChange={(e) => updateExercise(index, 'name', e.target.value)}
              className="border rounded px-2 py-1 w-1/4"
            />
            <input
              type="number"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) => updateExercise(index, 'sets', parseInt(e.target.value))}
              className="border rounded px-2 py-1 w-16"
            />
            <input
              type="number"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) => updateExercise(index, 'reps', parseInt(e.target.value))}
              className="border rounded px-2 py-1 w-16"
            />
            <input
              type="number"
              placeholder="Weight"
              value={exercise.weight}
              onChange={(e) => updateExercise(index, 'weight', parseFloat(e.target.value))}
              className="border rounded px-2 py-1 w-20"
            />
            <button onClick={() => removeExercise(index)} className="text-red-600">
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button onClick={addExercise} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <Plus size={20} className="mr-2" /> Add Exercise
        </button>
        <button onClick={saveWorkout} className="bg-green-600 text-white px-4 py-2 rounded mt-4">
          Save Workout
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Previous Workouts</h2>
        {workouts.map((workout) => (
          <div key={workout.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Workout on {workout.date}</h3>
            <ul>
              {workout.exercises.map((exercise) => (
                <li key={exercise.id} className="mb-2">
                  {exercise.name}: {exercise.sets} sets x {exercise.reps} reps @ {exercise.weight} lbs
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Workouts