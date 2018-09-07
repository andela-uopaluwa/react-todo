import React from 'react';


class Todo extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.description}</span>
            </div>
        )
    }
}

export default Todo;