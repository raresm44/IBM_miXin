import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    
    getStyle=()=>{
        return{
            border: '1px #ccc solid',
                textDecoration:this.props.todo.completed ? 'line-through' : 'none',
                backgroundColor:this.props.todo.completed ? '#CCFF00' : '#FFFFFF'
            }
    }

    render() {
        const{id, title} =this.props.todo;
        return (
            <div style ={this.getStyle()}>
                <p>
                    {title}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    <button onClick={this.props.delete.bind(this, id)} style={btnStyle}>delete</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
