import React, { Component, Fragment } from 'react';
import TournamentBracket from './TournamentBracket';


class NameEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            names: [],
            nameCheck: false,
            readyToPlay: false,
        }
        this.formInput = this.formInput.bind(this);
        this.addName = this.addName.bind(this);
        this.readyToPlay = this.readyToPlay.bind(this);
    };
    
    formInput(event) {
        const name = event.target.value;
        this.setState({
            name: name,
        }) 
    };

    addName(event) {
        event.preventDefault();
        this.state.names.push(this.state.name)
        this.setState({
            names: this.state.names,
            name: "",
        })
        let names = this.state.names
        let nameCheck = this.state.nameCheck
        names.length >= 2 ? nameCheck = true : nameCheck = false;
        this.setState({
            nameCheck: nameCheck,
        })
    };

    readyToPlay() {
        const readyToPlay = this.state.readyToPlay;
        const nameCheck = this.state.name.nameCheck;
        this.setState({
            readyToPlay: !readyToPlay,
            nameCheck: !nameCheck,
        })
    };

    render() {
        let names = this.state.names;
        return (
            <Fragment>
                {
                    this.state.readyToPlay ? <TournamentBracket names={names} /> : (
                        <Fragment>    
                            <p>
                                Please add some players for your tournament
                            </p>
                            <form>
                                <input onChange={this.formInput} type="text" value={this.state.name} />
                                <button onClick={this.addName} className="btn btn-primary">
                                    Add name
                                </button>
                            </form>
                            <div>
                                {
                                    this.state.nameCheck ? (
                                        <div className="spacing">
                                            <button onClick={this.readyToPlay} className="btn btn-primary">
                                                Create Tournament
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <p>Tournament entrants:</p>
                            <div className="nameDisplay">
                                {
                                    names.map((name, index) => {
                                        return (
                                            <p className="entrants" key={index}>* {name}</p>
                                        );
                                    })
                                }
                            </div>
                        </Fragment>
                    )
                }
            </Fragment>
        );
    }
};


export default NameEntry;