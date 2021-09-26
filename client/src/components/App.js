import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header.js'
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NotFound from './NotFound';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import AdminEditProduct from './AdminEditProduct.js';
function App() {
  return (
    <div className="App">
<Router>
  <Header/>
  <main>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/SignUp" component={SignUp}/>
  <Route exact path="/SignIn" component={SignIn}/>
  <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
  <AdminRoute exact path="/admin/edit/:productId" component={AdminEditProduct}/>
  <UserRoute exact path="/user/dashboard" component={UserDashboard}/>
  <Route  path="*" component={NotFound}/>
</Switch>
  </main>
</Router>
    </div>
  );
}

export default App;
