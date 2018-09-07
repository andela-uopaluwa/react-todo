import React from 'react';

class CompletionCount extends React.Component {
    render() {
        let completed = this.props.todos.filter(todo => todo.completed).length;
        let total = this.props.todos.length;
        let status = total ? `${completed} of ${total}\n completed`: '';
        return (
            <div>
                <span>{status}</span>
            </div>
        )
    }
}

export default CompletionCount;