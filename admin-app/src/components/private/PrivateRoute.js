import react from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const PrivateRoute=({component:Component,...props})=>{
    return <Route {...props} component={(p)=>{
    const authToken=window.localStorage.getItem('authToken');
    if(authToken){
                return <Component {...p} />
    }
    else{
                return <Redirect to='/signin' />
    }

    }}
     />
}
export default PrivateRoute