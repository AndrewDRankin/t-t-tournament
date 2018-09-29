import React, { Fragment } from 'react';
import NameEntry from './components/NameEntry';
import TournamentBracket from './components/TournamentBracket';
import { BrowserRouter as Router, Route, } from 'react-router-dom'; 


const App = ({names}) => {
    return (
        <Router>
            <Fragment>
                <p>
                    Table - Tennis - Tournament!
                </p>
                <Route exact path='/' component={NameEntry} />
                <Route exact path='/bracket' component={() => <TournamentBracket names={names} />} />
            </Fragment>
        </Router>
    )
};


export default App;