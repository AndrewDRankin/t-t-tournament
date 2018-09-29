import React from 'react';


const addName = (state, action) => {
    return {...state, names: state.names.push(state.name)}
};


const reducer = (state, action) => {
    switch(action.type) {
        case "addName": return addName(state, action);
        // case "createTournament": return randomBattle(state.)
    }
};


export default reducer;