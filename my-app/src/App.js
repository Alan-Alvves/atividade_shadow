import React, { useState } from 'react';
import "./index.css"

function Lista() {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([{
      name: 'Lucas Matos'
  }, 
  {
      name: 'Giovana Andrade'
  }, 
  {
      name: 'Wilton Júnior'
  }]);

    function deletarTodo(deleteTodo){
      setTodos(atualizado => atualizado.filter((todos, i) => i !== deleteTodo))
    }
    return (
      
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            if (!!value) {
              setTodos([...todos, {name: value}]);
              setValue("");
            }
            return;
          }}
        >
          <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <button type="submit">adicionar</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.name}
            <button onClick={() => deletarTodo(index)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Lista