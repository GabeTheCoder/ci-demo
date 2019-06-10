
import React, { useState } from 'react';

import languages from '../languages';
import search from '../utils/search';

const Search = props => {

    const [results, setResults] = useState(languages);

    const updateSearch = e => {
        const text = e.target.value;
        setResults(search(languages, text));
    };

    const suggestion = (result, index) => <li key={index}>{result}</li>;

    return (
        <div className="Search">
            <input placeholder="Search" onChange={updateSearch}></input>

            <ul className="suggestions">
                {results.map(suggestion)}
            </ul>
        </div>
    );

};

export default Search;