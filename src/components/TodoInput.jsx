import { useState } from "react";


const TodoInput = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleTodo = (e) => {
        if(e.key.toLowerCase() === 'enter') {
            addTodo(title);
            setTitle('');
        }
    }

    return(
        <div className="inputContainer">
            <input 
                type="text" 
                className="inputTarea"
                placeholder="Task Title"  
                value={title}
                onChange={e => setTitle(e.target.value)} 
                onKeyDown={e => handleTodo(e)}
                />
        </div>
    )
}

export default TodoInput;