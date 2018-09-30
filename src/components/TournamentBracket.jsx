import React, { Component, Fragment } from 'react';
import NameEntry from './NameEntry';


let uniquePlayer = "";
class TournamentBracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            history: [],
            reset: false,
        };
        this.pairPicker = this.pairPicker.bind(this);
        this.historyCheck = this.historyCheck.bind(this);
        this.goBack = this.goBack.bind(this);
    };
    
    historyCheck() {
        let players = this.state.players;
        let history = this.state.history;
        let uniquePlayer = players[Math.floor(Math.random() *players.length)]
        while (history.indexOf(uniquePlayer) !== -1) {
            uniquePlayer = players[Math.floor(Math.random() *players.length)]
        }
        history.push(uniquePlayer);
        return uniquePlayer;
    };

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

    goBack() {
        this.setState ({
            reset: true,
        })
    };

    render() {
        this.props.names.map((player, index) => {
            return this.state.players.push(player)
        });
        let players = this.state.players;
        players.length % 2 !== 0 ? players.push("No opponent! Default to next round") : null; 
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
                                <button onClick={this.goBack} className="btn btn-primary">
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