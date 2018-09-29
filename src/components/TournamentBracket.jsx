import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const TournamentBracket = ({names}) => {
    return (
        <Fragment>
            <p>
                Tournament Time!
            </p>
            <p>
                {names}
            </p>
            <Link to={'/'} className='btn btn-primary'>Start again!</Link>
        </Fragment>
    )
};
console.log(names);


export default TournamentBracket;