import React, { Component, Fragment } from 'react';
import NameEntry from './NameEntry';


let uniqueId = "";
class TournamentBracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: this.props.names,
            history: [],
            reset: false,
        };
        this.pairPicker = this.pairPicker.bind(this);
        this.historyCheck = this.historyCheck.bind(this);
        this.goBack = this.goBack.bind(this);
    };
    
    // History array to avoid the same name being placed in bracketting twice
    historyCheck() {
        let players = this.state.players;
        let history = this.state.history;
        // let uniqueId = players.filter(val => [Math.floor(Math.random() *players.length)]
        // while (history.indexOf(uniqueId) !== -1) {
        //     uniqueId = players[Math.floor(Math.random() *players.length)]
        // }
        // history.push(uniqueId);
        // return uniqueId.name;
    };

    // Loop to run once per pair of names in the player array
    pairPicker() {
        let players = this.state.players;
        let pick = [];
        for (let i = 1; i <= players.length/2; i += 1) {
            pick.push(
                <p className="bracket" key={i}>
                    {this.historyCheck()} Vs. {this.historyCheck()}
                </p>
            )
        }
        return pick;
    };

    // Return to the previous component view, using ternary to toggle
    goBack() {
        this.setState ({
            reset: true,
        })
    };

    render() {
        let players = this.state.players;
        // If there is an odd number of players, an additional string is added in place
        players.length % 2 !== 0 ? players.push({"name": "(no opponent)", "id": 0}) : null; 
        return (
            <Fragment>
                {
                    this.state.reset ? <NameEntry /> : (
                        <Fragment>
                            <div>
                                Matches
                                {this.pairPicker()}
                            </div>
                            <div>
                                <button onClick={this.goBack} className="button">
                                    Go again!
                                </button>
                            </div>
                        </Fragment>
                    )
                }
            </Fragment>
        );
    }
};


export default TournamentBracket;