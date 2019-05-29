const defaultState = {
    inputValue: 'hello react-redux',
    list      : [1]
}


export default (state=defaultState,action) =>{

    if(action.type === 'change_input-value'){
        const newState            = JSON.parse( JSON.stringify(state));
              newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'handle_btn'){
        const newState = JSON.parse( JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState

    }

    return state;
}