const initState =[]


export default ( state=initState, action )=>{ 
    switch(action.type){
        case 'GET_ORDER_DATA_SUCCESS':
            return {
                    data:action.data,
                    flag:action.flag    
                }
        default:
            return state;
    }
}