import React ,{ Component } from 'react';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Portfolio from './Portfolio';
import  About from './About';
import  Services  from './Services';
import  Contact from './Contact';
import NoMatch  from './NoMatch';
import { Layout } from './components/Layout';
import  Jumbotron  from './components/Jumbotron';
import AppRouter  from './components/AppRouter';
import Footer from './components/Footer';
import { Nava } from './components/Nava';
import Process from './components/Process';
import NavgationBar from './components/NavgationBar';

class App extends Component{
  render(){
    return(
      <React.Fragment className="box">
    <Jumbotron />
      <About />
      <Services />
      <Process/>
       <Portfolio />
      <Contact />
      <Footer />
       </React.Fragment>
    );
  }

} 


export default App;