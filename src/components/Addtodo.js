import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        title:'',
    }

    onSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        // this.props.addTodo(this.state.title);
        this.setState({title: e.target[0].value});
    }

    onChange= (e) =>{ 
        e.target.value= e.target.value
    }
     
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{dislay:'flex'}}>
                <input type="text" 
                name= "action_name"
                placeholder= "add todo"
                //value= {this.state.title}
                onChange= {this.onChange}
                style= {{
                    flex: '10',
                    padding: '5px'
                }}
                />
                <input
                type = "submit"
                value = "Submit"
                className = "btn"
                style = {{flex: '1'}}
                />
            </form>
        )
    }
}

export default Addtodo
