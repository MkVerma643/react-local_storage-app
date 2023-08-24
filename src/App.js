import React, {useState, useEffect} from "react";
import {Container} form "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todos from "./Components/Todos"
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <Container fluid>
      <h1>Todo with local Storage using useEffect</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  )
}

export default App;
