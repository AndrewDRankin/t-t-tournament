import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducer';


const initial = []
//     { name: "Aden Wells" },
//     { name: "Ricky Mason" },
//     { name: "Sam Maggs" },
//     { name: "Kye Buffery" }
// ];

const store = createStore(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

const render = () => {
    let state = store.getState();
    console.log(state.value);

    ReactDOM.render(
        <App value={ state.name }
            upClick={ () => store.dispatch({ type: "addName", amount: 1 })}
        //     downClick={ () => store.dispatch({ type: "change", amount: -1 })}
        //     resetClick={ () => store.dispatch({ type: "reset" })}
         />,
        document.getElementById('root')
    );
};

store.subscribe(render);

render();

registerServiceWorker();