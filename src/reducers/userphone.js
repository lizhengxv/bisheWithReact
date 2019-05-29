import {  LOGOUT_USERINFO, SET_USER_INFO } from '../const/';

const initState = '';

export default function userInfo ( state = initState, action ){
    switch( action.type ){
        case SET_USER_INFO: 
            return action.data
        case LOGOUT_USERINFO:
            return null;
        default:
            return state;
    }
}