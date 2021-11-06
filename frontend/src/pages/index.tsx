// libraries
import React, { useEffect } from "react";
import { API } from "aws-amplify";

export default function Home() {
  const getTodosQuery = `{
    query GetTodos {
      getTodos {
        id
        title
        done
      }
    }
  }`;

  const addTodoMutation = `{
    query AddTodo($Todo: TodoInput!) {
      addTodo(todo: $todo) {
        id
        title
        done
      }
    }
  }`;

  const fetchTodos = async () => {
    try {
      const data = await API.graphql({
        query: getTodosQuery,
      });
      console.log(`GetTodos: ${data}`);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      const todo = {
        id: "123456789",
        title: "hey there!",
        done: false,
      };

      const data = await API.graphql({
        query: addTodoMutation,
        variables: {
          todo: todo,
        },
      });
      console.log(`AddTodo: ${data}`);
      fetchTodos();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => addTodo}>AddTodo</button>
    </div>
  );
}
