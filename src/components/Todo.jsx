import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, checkTodo } from "../features/todos";

const Todo = () => {
  // const dispatch = useDispatch();
  // const todosList = useSelector((state) => state.todo.todos);
  // const [inputVal, setInputVal] = useState("");
  // const onHandleInput = (e) => {
  //   setInputVal(e.target.value);
  // };

  // const onAddTodo = () => {
  //   dispatch(addTodo(inputVal));
  //   setInputVal("");
  // };

  const [inputVal, setInputval] = useState("");
  const onHandleInput = (e) => {
    setInputval(e.target.value);
  };
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todo.todos);
  const onAddTodo = () => {
    dispatch(addTodo(inputVal));
    setInputval("");
  };

  return (
    <div>
      <input value={inputVal} onChange={onHandleInput} />
      <button onClick={onAddTodo}>Add Todo</button>
      <ul>
        {todosList.map((todo) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "350px",
              listStyleType: "none",
              border: "1px solid red",
            }}
            key={todo.id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <input
                type="checkbox"
                checked={todo.isChecked || false}
                onChange={() => dispatch(checkTodo(todo.id))}
              />
              <p
                style={{
                  fontSize: "18px",
                  textDecoration: todo.isChecked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </p>
            </div>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
