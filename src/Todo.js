import React from 'react';


class Todo extends React.Component {
    render() {
        let { description, completed, todoIndex, toggleCompletionStatus } = this.props;

        return (
            <div className={`todo ${completed ? 'completed' : 'pending'}`}>
                <span>{description}</span><input type="checkbox" checked={completed} onChange={() => toggleCompletionStatus(todoIndex)}/>
            </div>
        )
    }
}

export default Todo;