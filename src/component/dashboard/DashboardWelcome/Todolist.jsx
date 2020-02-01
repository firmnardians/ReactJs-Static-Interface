import React, { Component, Fragment } from 'react'

class Todolist extends Component{

    constructor(){
        super();
        this.state = {
          todos: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
    
        const task = this.refs.task.value;
        this.state.todos.push({task, id: + new Date});
        this.setState({
          todos: this.state.todos
        });
        this.refs.task.value = "";
      }
    
      renderHasil(){
        if (this.state.todos.length){
          const todos = this.state.todos.map((todo, i) => {
            return <li className="liTodolist" key={i}>{todo.task}</li>
          });
          return (
            <ul>
              {todos}
            </ul>
          )
        }
        return null
      }

    render(){
        return(

            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputTodo" type="text" ref="task"/> 
                    <button className="btnTodo">Buat</button>
                </form>  
                
                {this.renderHasil()}
            </Fragment>
        )
    }
}

export default Todolist;