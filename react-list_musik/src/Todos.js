import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-song" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">MyPlaylist!</p>
  );
  return (
    <div className="playlist collection">
      {todoList}
    </div>
  )
}
export default Todos;