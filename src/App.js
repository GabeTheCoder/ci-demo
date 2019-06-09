
import React, { useState } from 'react';

import './App.css';
import logo from './logo.svg'

const App = props => {

    const [result, setResult] = useState(null);

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />

            {result}
            <button onClick={() => setResult('test')}>
                update
            </button>
        </div>
    );

};

export default App;
