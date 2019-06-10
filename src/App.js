
import React, { useState } from 'react';

import './App.css';
import logo from './logo.svg'

import Search from './Search';

const App = props => {

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />

            <Search />
        </div>
    );

};

export default App;
