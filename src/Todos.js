import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [{description: 'make breakfast', completed: true}, {description: 'Stop at the bank', completed: false}]
        }
    }
    addTodoItem = event => {
        if(event.keyCode === 13 && event.target.value) {
            let todos = this.state.todos.slice();
            todos.push({description: event.target.value, completed: false});
            this.setState({
                todos: todos
            })
            event.target.value = '';
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="What would you like to do?" onKeyUp={this.addTodoItem} />
                {this.state.todos.map(todo => <Todo description={todo.description} completed={todo.completed} />)}
            </div>
        )
    }
}

export default Todos;