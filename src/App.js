import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <Todos />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));