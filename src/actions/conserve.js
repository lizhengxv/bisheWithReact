import {CONVERSE_ADD} from '../const'

// 收藏
export function conserveAdd(data){
    return{
        type:CONVERSE_ADD,
        data
    }
}

// 取消收藏
export function conserveRemove(data){
    return{
        type:'CONVERSE_REMOVE',
        data
    }
}

// 更新 
export function conserveUpdata(data){
    return{
        type:'CONVERSE_UPDATA',
        data
    }
}