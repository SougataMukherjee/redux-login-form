import {legacy_createStore} from 'redux';
import { Constants } from '../Constant';
const initialState={
    users: [{
        email:"user1@fireflink.com",
        password:"123"
    }],
    loggedInUser:null,
    products:[{
        id:1,
        name:'Product 1',
        price:1000
    },{
        id:2,
        name:'Product 2',
        price:5000
    },{
        id:3,
        name:'Product 3',
        price:1500
    }],
    cart:[]
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case Constants.REGISTER:
            return{
                ...state,
                loggedInUser:[action.payload]
            }
        case Constants.LOGOUT:
        return{
            ...state,
            loggedInUser:null
        }
        default:
            return state;
    }
}
export default legacy_createStore(reducer)