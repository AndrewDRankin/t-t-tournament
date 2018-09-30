import React, { Component, Fragment } from 'react';

let uniquePlayer = "";
class TournamentBracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            history: [],
        };
        this.pairPicker = this.pairPicker.bind(this);
        this.historyCheck = this.historyCheck.bind(this);
    }
    historyCheck() {
        let players = this.state.players;
        let history = this.state.history;
        let uniquePlayer = players[Math.floor(Math.random() *players.length)]
        while (history.indexOf(uniquePlayer) !== -1) {
            uniquePlayer = players[Math.floor(Math.random() *players.length)]
        }
        history.push(uniquePlayer);
        console.log(players);
        console.log(history);
        console.log(uniquePlayer);
        return uniquePlayer;
    }
    pairPicker() {
        let players = this.state.players;
        let pick = [];
        for (let i = 1; i <= players.length/2; i += 1) {
            pick.push(
                <p key={i}>
                    {this.historyCheck()} - {this.historyCheck()}
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