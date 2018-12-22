import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Ed-sharen-prefect'},
      {id: 2, content: 'Bruno mars-Talking to do More'},
      {id: 3, content: 'Trio Lamtama-Anak Medan'},
      {id: 4, content: 'Noah-dara'},
      {id: 5, content: 'Judika-Aku yang tersakiti'},
      {id: 6, content: 'Panggoaran Band-Sayur kol'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">MyPlaylist's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
