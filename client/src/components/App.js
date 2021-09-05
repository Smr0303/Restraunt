import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header.js'
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NotFound from './NotFound';
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
  <Route  path="*" component={NotFound}/>
</Switch>
  </main>
</Router>
    </div>
  );
}

export default App;