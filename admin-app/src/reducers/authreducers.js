import { authConstants } from "../actions/constants"

const initState={
authToken:null,
admin:{
     email:''
     
          
},
authenticate:false,
authenticating:false

};
export default(state=initState,action)=>
{
console.log(action);
switch(action.type){

        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
               authenticating:true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                admin:action.payload.admin,
                authToken:action.payload.authToken,
                authenticate:true,
                authenticating:false


            }

}
return state
}