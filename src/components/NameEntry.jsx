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
    
    // Reading as text is entered in the input
    formInput(event) {
        const name = event.target.value;
        this.setState({
            name: name,
        })
    };

    // Adding string from input field to the names array, preventing the same name being entered twice (not quite working as intended, but avoids crash)
    addName(event) {
        event.preventDefault();
        let name = this.state.name;
        let names = this.state.names;
        let nameCheck = this.state.nameCheck;
        if (names.indexOf(name) !== -1) {
            return name.concat(" 2");
        }
        console.log(names);
        names.push(name)
        this.setState({
            names: names,
            name: "",
        })
    // Only reveals tournament creation button when at least two strings have been entered
        names.length >= 2 ? nameCheck = true : nameCheck = false;
        this.setState({
            nameCheck: nameCheck,
        })
    };
    // Button toggles ready state with ternary, which hides this component's render, and shows the tournament component
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
                        <Fragment className="mainText">    
                            <p>
                                Please add players
                            </p>
                            
                            <form>
                                <input onChange={this.formInput} type="text" value={this.state.name} />
                                <button onClick={this.addName} className="button">
                                    Add name
                                </button>
                            </form>
                            
                            <p>Tournament entrants:</p>
                            
                            <section>
                                <div className="nameDisplay">
                                    {
                                        names.map((name, index) => {
                                            return (
                                                <p className="entrants" key={index}> {name}</p>
                                            );
                                        })
                                    }
                                </div>

                                <div>
                                    {
                                        this.state.nameCheck ? (
                                            <div className="spacing">
                                                <button onClick={this.readyToPlay} className="button">
                                                    Create Tournament
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </section>
                        </Fragment>
                    )
                }
            </Fragment>
        );
    }
};


export default NameEntry;