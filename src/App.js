import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
 
  const [todos, setTodos] = useState([]);
  let footerstyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
  };
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e.sno !== todo;
      })
    );
  
  };
  const addTodo = (title, des) => {
    let snoo = 0;
    todos.length === 0 ? (snoo = 0) : (snoo = todos[todos.length - 1].sno + 1);
    let todoObj = {
      sno: snoo,
      title: title,
      dis: des,
    };
    setTodos([...todos, todoObj]);
    console.log(todoObj);


  };
  
  // useEffect(() => {
  //   // effect
  //   localStorage.setItem("todos", JSON.stringify(todos));
  
  //   // return () => {
  //   //   // cleanup
  //   // }
  // }, [todos]);
  return (
    <div>
      <Navbar title="Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer style={footerstyle} />
    </div>
  );
}

export default App;
