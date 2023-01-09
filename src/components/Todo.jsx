const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return(
        <div className="todoContainer">
            <div className="todoInfo">
                <button className="btnComplete" onClick={() => handleSetComplete(id)}>{!completed ? <img alt="r" lt src="./icons8-comprobado.svg"/> : <img alt="r" src="./icons8-comprobado (1).svg"/>}</button>
                
                <p className="todoTitle" style={{ textDecoration: (completed ? "line-through" : "none")}}>
                    {title}
                </p>
            </div>
            <button className="btn btnDelete" onClick={() => handleDelete(id)}><img alt="r" lt src="./icons8-borrar-para-siempre-48.png"/></button>
        </div>
    )
}

export default Todo;