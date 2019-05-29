import { UPDATE_USERINFO,LOGOUT_USERINFO } from '../const/';

export function updateUserInfo(data){
    return {
        type:UPDATE_USERINFO,
        data
    }   
}


export function logoutUserInfo(){
    return{
        type:LOGOUT_USERINFO
    }
}

