import React, { Fragment } from 'react';
import NameEntry from './components/NameEntry';


const App = () => {
    return (
            <Fragment>
                <p>
                    Header text
                </p>
                <NameEntry />
                <p>
                    Footer text
                </p>
            </Fragment>
    )
};


export default App;