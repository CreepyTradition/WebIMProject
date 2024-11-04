import { useState, useEffect } from 'react'
import supabase from './supbaseClient'

function Page() {
  const [todos, setTodos] = useState<any[]>([])  // Set the state type to any[] to avoid TypeScript errors

  useEffect(() => {
    // Make the function async
    async function getTodos() {
      // Await for the supabase response
      const { data: todos, error } = await supabase.from('todos').select()

      if (error) {
        console.error('Error fetching todos:', error)
        return
      }

      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>{JSON.stringify(todo)}</li>  // Use index as key and stringify to properly display object values
      ))}
    </div>
  )
}
export default Page
