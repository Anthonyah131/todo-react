import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {

  const [todos, setTodos] = useState([
  ])

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
  
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    saveTodo([
			...todos,
			newTodo,
		]);

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if(todo.id == id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodos(updateList);
    saveTodo(updateList);
  }

  const handleDelete = (id)=> {
    const updateList = todos.filter(todo => todo.id !== id);
    setTodos(updateList);
    saveTodo(updateList);
  }

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.completed);
    setTodos(updateList);
    saveTodo(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('all');
  }

  const showActiveTodos = () => {
    setActiveFilter('active');
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed');
  }

  function saveTodo(todo) {
		localStorage.setItem('todos', JSON.stringify(todo));
	}

  function loadTodos() {
		let tasks = JSON.parse(localStorage.getItem("todos"));

		if (tasks) {
			setTodos(tasks);
		}
	}

  useEffect(() => {
		loadTodos();
	}, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => todo.completed === false);
        setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed === true);
        setFilteredTodos(completedTodos);
    }
    
  },[activeFilter, todos]);

  return (
    <div className="App">
      <div className="container">
        <Title/>
        <TodoInput addTodo={addTodo}/>
        <TodoList 
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
