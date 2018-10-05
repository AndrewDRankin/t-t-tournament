import React, { Component, Fragment } from 'react';
import TournamentBracket from './TournamentBracket';


class NameEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            names: {},
            minPlayers: false,
            readyToPlay: false,
            idKey: 1,
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
        let minPlayers = this.state.minPlayers;
        let idKey = this.state.idKey;
        names[idKey]=name;
        idKey += 1;
        this.setState({
            names: names,
            name: "",
            idKey: idKey,
        })
    // Only reveals tournament creation button when at least two strings have been entered
        names.length >= 2 ? minPlayers = true : minPlayers = false;
        this.setState({
            minPlayers: minPlayers,
        })
    };
    // Button toggles ready state with ternary, which hides this component's render,
    // and shows the tournament component. Also adds an item id so names can be duplicated
    readyToPlay() {
        // this.state.names.map((name, index) => {
        //     return name.id = index+1
        // });
        const readyToPlay = this.state.readyToPlay;
        const minPlayers = this.state.name.minPlayers;
        this.setState({
            readyToPlay: !readyToPlay,
            minPlayers: !minPlayers,
        })
    };

    render() {
        let names = this.state.names;
        return (
            <Fragment>
                {
                    this.state.readyToPlay ? <TournamentBracket names={names} /> : ( 
                        <Fragment>    
                            <main className="mainText">
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
                                        {/* {
                                            names.map((name, index) => {
                                                return (
                                                    <p className="entrants" key={index}>{name}</p>
                                                );
                                            })
                                        } */}
                                    </div>

                                    <div>
                                        {
                                            this.state.minPlayers ? (
                                                <div className="spacing">
                                                    <button onClick={this.readyToPlay} className="button">
                                                        Create<br />
                                                        Tournament
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </section>
                            </main>
                        </Fragment>
                    )
                }
            </Fragment>
        );
    }
};


export default NameEntry;