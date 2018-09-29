import React, { Fragment } from 'react';
import NameEntry from './components/NameEntry';
import Tournament from './containers/Tournament';
import { BrowserRouter as Router, Route, } from 'react-router-dom'; 


const App = ({names}) => {
    return (
        <Router>
            <Fragment>
                <p>
                    Table - Tennis - Tournament!
                </p>
                <Route exact path='/' component={NameEntry} />
                <Route exact path='/bracket' component={Tournament}/>
            </Fragment>
        </Router>
    )
};


export default App;