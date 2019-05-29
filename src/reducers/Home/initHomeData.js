let initState = [];

export default function userInfo ( state = initState, action ){
    switch( action.type ){
        case 'GET_HOME_DATA_SUCCESS': 
            return {
                    data:initState.concat(action.data),
                    flag:action.flag
            } 
        default:
            return state;
    }
}