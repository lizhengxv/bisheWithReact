import { UPDATE_USERINFO } from '../const/';

const initState = null;

export default function userInfo ( state = initState, action ){
    switch( action.type ){
        case UPDATE_USERINFO: 
            return action.data;
        default:
            return state;
    }
}