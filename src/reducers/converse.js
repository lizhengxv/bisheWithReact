const initState =[]


export default function conserve( state=initState, action ){ 
    switch(action.type){
        case 'CONVERSE_ADD':
            state.unshift(action.data);
            return state
        case 'CONVERSE_REMOVE':
        // 过滤即删除
            return  state.filter( item =>{
                return item.id !== action.data.id 
            })
        case 'CONVERSE_UPDATA':
            return action.data
        default:
            return state;
    }
}