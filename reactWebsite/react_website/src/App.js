import React from 'react';
import './Assets/css/default.min.css';

import{
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage  from './components/pages/homePage';
import Workhistory  from './components/pages/workHistory';
import Contact  from './components/pages/contact';

function App() {
  return (
    <Router>
    <div className="App">

      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/Workhistory' component={Workhistory} />
        <Route exact path='/Contact' component={Contact} />

      <Footer />



    </div>
    </Router>
  );
}

export default App;
