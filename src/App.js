import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Contact from "./Contact";
import Navbar from './Navbar';
import About from './About';
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  exact path = "/" component={Home} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/about" component = {About} />
      
        <Redirect to ="/"  />
        </Switch>
        <Footer />
     
    </div>
  );
}

export default App;
