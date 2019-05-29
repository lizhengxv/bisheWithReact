

let initState = [];


export default ( state=initState, action )=>{
    switch (action.type){
        case 'GET_INFO_DBY_KEYWORD':
            return action.data
        default:
            return state
    }
}