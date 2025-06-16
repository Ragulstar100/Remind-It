import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './db/supabase'
import Todo from './data/Task'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase.from('TaskInfo').select('*');

      if (error) {
        console.error('Error fetching todos:', error.message);
      } else {
        setTodos(data || []);
      }

      setLoading(false);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

