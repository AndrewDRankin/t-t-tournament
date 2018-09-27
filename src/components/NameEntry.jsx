import React, { Component, Fragment } from 'react';


class NameEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
        this.formInput = this.formInput.bind(this);
    }
    formInput(event) {
        const name = event.target.value;
        this.setState({
            name: name,
        }) 
    }

    render() {
        return (
            <Fragment>
                <form>
                    <input onChange={this.formInput} type="text" />
                    <button className="btn btn-primary">Add name</button>
                </form>
            </Fragment>
        )
    }
}


export default NameEntry;