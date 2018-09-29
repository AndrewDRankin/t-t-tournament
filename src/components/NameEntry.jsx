import React, { Component, Fragment } from 'react';


class NameEntry extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            names: [],
            playerCheck: false,
        }
        this.formInput = this.formInput.bind(this);
        this.addName = this.addName.bind(this);
    }
    
    formInput(event) {
        
        const name = event.target.value;
        
        this.setState({
            name: name,
        }) 
    }
    
    // addName(event) {
        
    //     event.preventDefault();
        
    //     this.state.names.push(this.state.name) // Had this in the setState, which was setting state to nothing before pushing
        
    //     this.setState({
    //         names: this.state.names,
    //         name: "",
    //     })



    //     let names = this.state.names
    //     let playerCheck = this.state.playerCheck
       
    //     names.length >= 2 ? playerCheck = true : playerCheck = false;
        
    //     this.setState({
    //         playerCheck: playerCheck,
    //     })
    // }

    render() {
        
        return (
            <Fragment>
                
                <p>
                    Please add some players for your tournament
                </p><b />

                <form>
                    <input onChange={this.formInput}
                        type="text"
                        value={this.state.name} />
                    
                    <button onClick={addName}
                        className="btn btn-primary">
                            Add name
                    </button>
                </form><br />

                <p>Tournament entrants:</p>
                
                <div>
                    {this.state.names.map((name, id) => {
                        return (<p key={id}>Name: {name}</p>);
                    })}
                </div>

                {/* <div>
                    {this.state.playerCheck ?
                        (<button
                            onCLick={}
                            className="btn btn-primary">
                                Create Tournament
                        </button>) : null
                    }
                </div> */}

            </Fragment>
        );
    }
};


export default NameEntry;