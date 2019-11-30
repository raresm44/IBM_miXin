import React , {Component} from 'react';
import Todoitem from "./Todoitem.js"

class Todos extends Component{
    render (){
        return this.props.todos.map((todo) => (
            <Todoitem 
                key={todo.id} 
                todo={todo}
                markComplete={this.props.markComplete}
                delete={this.props.delete}
            />
            ));
    }
}

export default Todos;