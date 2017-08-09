import React, { Component } from 'react';
import logo from './logo.svg';

import Todos from './Todos';
import TodoForm from './TodoForm'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      todos: [
        {
          id: 1, 
          text: 'Manger'
        },
        {
          id: 2, 
          text: 'Boire'
        },
        {
          id: 3, 
          text: 'Dormir'
        },

      ]
    };
  }

  deleteItem(id){
    let newTodos = [];

    this.state.todos.map( (todo) => {
      if( todo.id !== id){
        newTodos.push(todo)
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  submitTodo(text){
    let newTodos = this.state.todos.slice();

    newTodos.push({
      text, 
      id: newTodos.length + 1
    })

    this.setState({
      todos : newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <TodoForm onSubmitForm={(text) => this.submitTodo(text) } />

        <Todos todos={this.state.todos} onDeleteItem={ (id) => this.deleteItem(id) } />
      </div>
    );
  }
}

export default App;
