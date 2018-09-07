import React from 'react';


class Todo extends React.Component {
    render() {
        let { description, completed } = this.props;
        return (
            <div>
                <span>{description}</span><input type="checkbox" checked={completed} onChange={() => this.props.toggleCompletionStatus()}/>
            </div>
        )
    }
}

export default Todo;