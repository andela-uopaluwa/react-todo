import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="main-title">Todos</h1>
                <Todos />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));