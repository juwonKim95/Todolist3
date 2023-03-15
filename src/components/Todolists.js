import React from 'react';

//props로 받겠다(부모요소에서 자식요소로)
const Todolists = ({ todoLists, delTodoLists, onIsDoneToggle}) => {
    return (
        <div>
            <ul className='todoLists'>
                {todoLists.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ccc' : '#333'}}>
                    <span onClick={()=>onIsDoneToggle(todo.id)}>{todo.text}</span>
                <button onClick={()=>delTodoLists(todo.id)}>X</button></li>)}
            </ul> 
        </div>
    );
};

export default Todolists;