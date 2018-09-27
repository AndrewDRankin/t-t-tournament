import React, { Component, Fragment } from 'react';


class NameEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            names: [],
            nameCheck: false,
        }
        this.formInput = this.formInput.bind(this);
        this.addName = this.addName.bind(this);
        console.log(this.state.names);
    }
    formInput(event) {
        const name = event.target.value;
        this.setState({
            name: name,
        }) 
    }
    addName(event) {
        event.preventDefault();
        this.state.names.push(this.state.name) // Had this in the setState, which was setting state to nothing before pushing
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
    }
    // createTournament() {

    // }
    render() {
        return (
            <Fragment>
                <p>
                    Please add some players for your tournament
                </p>
                <b />
                <form>
                    <input onChange={this.formInput} type="text" value={this.state.name} />
                    <button onClick={this.addName} className="btn btn-primary">
                        Add name
                    </button>
                </form>
                <br />
                <p>Tournament entrants:</p>
                <div>
                    {this.state.names.map((name, id) => {
                        return (<p key={id}>Name: {name}</p>);
                    })}
                </div>
{/* Button only shows if there are two or more players */}
                <div>
                    {this.state.nameCheck ?
                        (<button className="btn btn-primary">
                            Create Tournament
                        </button>) : null
                    }
                </div>
            </Fragment>
        );
    }
};


export default NameEntry;