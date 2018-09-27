import React, { Component, Fragment } from 'react';
import PrintName from './components/PrintName';
import NameEntry from './components/NameEntry';


const initial = [
    { name: "Aden Wells" },
    { name: "Ricky Mason" },
    { name: "Sam Maggs" },
    { name: "Kye Buffery" }
];

let nameList = [];

initial.map((object) => (
    nameList.push(Object.values(object))
));

// console.log(nameList);

class App extends Component {
    render() {
        return (
            <Fragment>
                <p>
                    {/* {nameList.map((value) => (
                        <PrintName />
                    ))}; */}
                </p>
                <NameEntry />
            </Fragment>
        );
    }
}


export default App;