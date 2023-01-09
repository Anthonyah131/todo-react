import TodoFilters from "./TodoFilters";
import Todo from "./Todo";

const TodoList = ({ 
    todos,
    activeFilter,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos }) => {
    return(
        <div>
            <div className="todosContainer">
                {todos.map(todo => {
                    return(
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            handleSetComplete={handleSetComplete} 
                            handleDelete={handleDelete}
                        />
                    )
                })}
            </div>
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}
            />
        </div>
    )
}

export default TodoList;