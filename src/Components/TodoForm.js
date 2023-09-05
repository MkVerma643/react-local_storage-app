import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  Button,
  Form,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = (addTodos) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Enter Some Value");
    }
    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          ></Input>
          <div className="input-group-prepend">
            <Button color="success">Add Todo</Button>
          </div>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
