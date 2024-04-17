import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
    const [listTodos,setListTodos] = useState(false)

    const fetchTodos = useCallback(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setTimeout(()=>{
            setListTodos(data.map(todo=><li key={todo.id}>{todo.title}</li>))

        },5000)
    },[])

    useEffect(()=>{
        fetchTodos()
    },[])
    
    return (
        <>
            <ul>
                { listTodos ? listTodos : <h1>Loading...</h1> }
            </ul>

        </>
    )
}

export default App
