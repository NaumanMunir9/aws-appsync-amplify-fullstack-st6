// libraries
import React from "react";
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

  const fetchTodos = async () => {
    try {
      const data = await API.graphql({
        query: getTodosQuery,
      });
      console.log(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return <div>Hello world!</div>;
}
