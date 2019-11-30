import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos.js";
import Addtodo from "./components/Addtodo.js"
import uuid from 'uuid'

class App extends Component

{
  state = {
    todos: [
      {
        id: 1,
        title: "do_smth_1",
        completed: false
      },
      {
        id: 2,
        title: "do_smth_2",
        completed: true
      },
      {
        id: 3,
        title: "do_smth_3",
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delete = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) =>{
    const newTodo={
      id:uuid.v4, 
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos ,newTodo]});
  }

  render() {
    return (
      //  <div className="App">
      <div className="container">
        <Addtodo addTodo={this.addTodo}/>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delete={this.delete}
        />
      </div>    
    );
  }
}

export default App;
