

const initialState={
    email:'greisonsantos100@gmail.com',
    senha:'123456'
}

const AutReducer = (state=[], action)=>{
 
    if(state.length ==0){
         return initialState;
    }

  
    return state;
}

export default AutReducer;