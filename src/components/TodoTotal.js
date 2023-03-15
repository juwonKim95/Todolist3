import React,{ useState } from 'react';
import "./TodoTotal.css";

const TodoTotal = () => {
    //인풋의 값 관리, 버튼 클릭시 할일목록 추가
    //useState는 배열을 리턴
    //const [ inputText, setInputText ] = useState(""); 은 밑에있는걸 한 줄로 쓴것(구조분해할당)
    const inputTextArr = useState("");
    console.log(inputTextArr);
    const inputText = inputTextArr[0];
    const setInputText = inputTextArr[1];
    //이벤트 만들기
    //할일리스트 상태관리
    const [ todoLists, setTodoLists ] = useState([
        {id:1, text: "할일1"},
        {id:2, text: "할일2"},
    ])
    const onAddTodo = () => {
        const newTodolists = [
            //스프레드 구문은 배열을 펼쳐준다
            ...todoLists,
            { id: todoLists.length+1, text: inputText}
        ]
        setTodoLists(newTodolists);
        setInputText("");
    }
    //onChange는 내가 만들어준 변수의 이름, 그리고 괄호안에 함수
    const onChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }
    const delTodoLists = (id) => {
        const newTodolists = todoLists.filter(todo=> todo.id !== id);
        setTodoLists(newTodolists);
    }
    return (
        <div className='todo'>
            <div className='header'>
                <h2>To do List</h2>
                <div>
                    <input value={inputText} onChange={onChange} />
                    <button onClick={onAddTodo}>+</button>
                </div>
            </div>
            <div>
                <ul className='todoLists'>
                    {todoLists.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ccc' : '#333'}}>{todo.text}
                        <span>{todo.text}</span>
                    <button onClick={()=>delTodoLists(todo.id)}>X</button></li>)}
                </ul>
            </div>
        </div>
        
    );
};

export default TodoTotal;