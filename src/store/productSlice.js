import { CAR_DATA } from '../assets/data/Cars_data'
// import data from '../data/products'
const { createSlice } = require('@reduxjs/toolkit');

export const STATUSES= Object.freeze({
    IDLE:'idle',
    ERROR:'error',
   LOADING :"loading"
})

const carSlice = createSlice({
    name: 'car',
    initialState: {
        data:[],
        status:STATUSES.IDLE
    },

    reducers: {
        setCars(state, action) {
            state.data=action.payload;
            // <------ don not call api here ---->
            // state.push(action.payload);
        },
        setStatus(state,action){
            state.status=action.payload
        },
       
      
    },
});

export const {setCars,setStatus } = carSlice.actions;
export default carSlice.reducer;



export function fetchProducts(){
    return async function fetchProducts(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING)) 
        try{
        // const res=  await fetch(data) 
        // console.log(res,"ressss")

        dispatch(setCars(CAR_DATA))
        dispatch(setStatus(STATUSES.IDLE)) 

    }catch(err){
        console.log(err,"err in thunk")
        dispatch(setStatus(STATUSES.ERROR ))
    }
    }
 
}