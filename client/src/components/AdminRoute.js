import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkAuthentication } from "./helpers/setAuthentication";

const AdminRoute = ({ component: Component, ...rest }) => {
  return(
  <Route
{...rest}
render={(props)=>{
  return(
  (checkAuthentication()&&checkAuthentication().role===1?(<Component {...props} />):(<Redirect to="/Signin"/>))
  )
}}


  
  />
   
  )
};
export default AdminRoute;
