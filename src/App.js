import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>And we're off the ground!! <span role="img" aria-label="Rocket">🚀</span> </h1>
                <Todos />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));