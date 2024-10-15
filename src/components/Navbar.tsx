import React from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Workout Tracker</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/workouts" className="hover:text-blue-200">Workouts</Link>
            <Link to="/exercises" className="hover:text-blue-200">Exercises</Link>
            <Link to="/progress" className="hover:text-blue-200">Progress</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar