import React from 'react';
import Todo from './Todo';
import CompletionCount from './CompletionCount';

class Todos extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [{
                description: 'make breakfast',
                completed: true
            }, {
                description: 'meet with wedding planner',
                completed: false
            }]
        }
    }
    addTodoItem = event => {
        if (event.keyCode === 13 && event.target.value) {
            let todos = this.state.todos.slice();
            todos.push({
                description: event.target.value,
                completed: false
            });
            this.setState({
                todos: todos
            })
            event.target.value = '';
        }
    }
    toggleCompletionStatus = (index) => {
        let todos = this.state.todos.slice();
        todos[index].completed = !todos[index].completed;
        //QUE: isn't this still directly modifying state cos objects are passed by reference.
        //todos might be a copy but the objects in todos and state.todos are same
        this.setState({
            todos: todos
        })
    }
    render() {
        return (
            <div className = "container" >
                <input id="new-todo" type = "text" placeholder = "What would you like to do?" onKeyUp = {this.addTodoItem}/>
                { /* NB: It's not best practice to use index as key. index is used for key cos this is a rather trivial scenario. */}
                {
                    this.state.todos.map((todo, index) => {
                        return <Todo key = {index} todoIndex={index} description = {todo.description} completed = {todo.completed} toggleCompletionStatus = {this.toggleCompletionStatus} />
                    })
                }
                <CompletionCount todos = {this.state.todos} />
            </div>
        )
    }
}

export default Todos;