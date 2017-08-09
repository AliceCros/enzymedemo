import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component{
  
  render() {    
    let todos = this.props.todos.map( (todo) => ( <Todo key={todo.id} text={todo.text} onDeleteItem={ () => this.props.onDeleteItem(todo.id) } /> ))
    return (
      <div>
        <h2>Mes todos</h2>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }

}

export default Todos
