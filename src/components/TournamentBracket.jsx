import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';


class TournamentBracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            history: [],
        };
    }
    
    render() {
        this.props.names.map((player, index) => {
            return this.state.players.push(player)
        });
        let players = this.state.players;
        players.length % 2 !== 0 ? players.push("No opponent") : null; 
        console.log(players);
        return (
            <Fragment>
                <p>
                    Output
                </p>
            </Fragment>
        );
    }
};







// const TournamentBracket = ({names}) => {
//     return (
//         <Fragment>
//             <p>
//                 Tournament Time!
//             </p>
//             <p>
//                 {names}
//             </p>
//             {/* <Link to={'/'} className='btn btn-primary'>Start again!</Link> */}
//         </Fragment>
//     )
// };


export default TournamentBracket;