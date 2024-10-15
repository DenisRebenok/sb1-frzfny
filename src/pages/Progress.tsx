import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Progress: React.FC = () => {
  // This is dummy data. In a real app, you'd fetch this from your backend or local storage
  const data = [
    { name: 'Week 1', weight: 150, reps: 8 },
    { name: 'Week 2', weight: 155, reps: 8 },
    { name: 'Week 3', weight: 160, reps: 9 },
    { name: 'Week 4', weight: 165, reps: 9 },
    { name: 'Week 5', weight: 170, reps: 10 },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Progress</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Bench Press Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="weight" fill="#8884d8" name="Weight (lbs)" />
            <Bar yAxisId="right" dataKey="reps" fill="#82ca9d" name="Reps" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Progress