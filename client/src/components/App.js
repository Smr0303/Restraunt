import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Header from './Header.js'
function App() {
  return (
    <div className="App">
<Router>
  <Header/>
</Router>
    </div>
  );
}

export default App;
