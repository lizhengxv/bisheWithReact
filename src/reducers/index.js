import { combineReducers } from 'redux';

import demo from './demo';
import userinfo from './userinfo';
import userphone from './userphone';
import converse from './converse'

import inithomedata from './Home/initHomeData'

import inituserorder from './inituserorder'

import getinfobykey from './Search/'

export default combineReducers({
    demo,
    userinfo,
    inithomedata,
    userphone,
    converse,
    inituserorder,
    getinfobykey
})