import React from 'react'
import { Link } from 'react-router-dom'
import { PlusCircle, BarChart2, Dumbbell } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Workout Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/workouts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <PlusCircle className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Start Workout</h2>
          <p>Begin a new workout session</p>
        </Link>
        <Link to="/exercises" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Dumbbell className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Exercises</h2>
          <p>View and manage your exercises</p>
        </Link>
        <Link to="/progress" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <BarChart2 className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Progress</h2>
          <p>Track your fitness progress</p>
        </Link>
      </div>
    </div>
  )
}

export default Home