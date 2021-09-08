import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import { checkAuthentication } from './helpers/setAuthentication';

const UserRoute=({component:Component,...rest})=>{
    return(
        <Route
        {...rest}
       render={(props)=>{
           return(
               checkAuthentication()&&checkAuthentication().role===0?(<Component {...props}/>):(<Redirect to="/Signin"/>)

           )

       }}
        
        />

    )

}
export default  UserRoute;