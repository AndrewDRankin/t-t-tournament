import React, { Component, Fragment } from 'react';


class NameEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            names: [],
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
        this.state.names.push(this.state.name)
        this.setState({
            names: this.state.names,
            name: "",
        })
    }
    render() {
        return (
            <Fragment>
                <form>
                    <input onChange={this.formInput} type="text" value={this.state.name} />
                    <button onClick={this.addName} className="btn btn-primary">Add name</button>
                </form>
                <ul>
                    {this.state.names.map((name, id) => {
                        return (<li key={id}>{name}</li>);
                    })}
                </ul>
            </Fragment>
        )
    }
}


export default NameEntry;