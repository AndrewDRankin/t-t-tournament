import React, { Component, Fragment } from 'react';


class TournamentBracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            history: [],
        };
        this.pairPicker = this.pairPicker.bind(this);
    }
    pairPicker() {
        let players = this.state.players;
        let pick = [];
        for (let i = 1; i <= players.length/2; i += 1) {
            pick.push(
                <p key={i}>
                    {
                        playerOne = players[Math.floor(Math.random() *players.length)]
                        while (history.indexOf(playerOne) !== -1) {
                            playerOne = players[Math.floor(Math.random() *players.length)]
                        };
                        history.push(playerOne);
                        return playerOne;
                    } - {
                        playerTwo = players[Math.floor(Math.random() *players.length)]
                        while (history.indexOf(playerTwo) !== -1) {
                            playerTwo = players[Math.floor(Math.random() *players.length)]
                        };
                        history.push(playerTwo);
                        return playerTwo;
                    }
                </p>
            )
        }
        return pick;
    };
    render() {
        this.props.names.map((player, index) => {
            return this.state.players.push(player)
        });
        let players = this.state.players;
        players.length % 2 !== 0 ? players.push("Default to next round") : null; 
        console.log(players);
        return (
            <Fragment>
                <div>
                    Pairings
                    {this.pairPicker()}
                </div>
            </Fragment>
        );
    }
};


// {history.push(player)}

// if index !== players.index


export default TournamentBracket;