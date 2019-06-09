import React from 'react';
import { BrowserRouter , Switch , Route , Nav , NavLink } from 'react-router-dom';
import Home from '../Portfolio';
import Services from '../Services';
import About from '../About';
import Contact from '../Contact';
import NoMatch from '../NoMatch';

const AppRouter = () =>{
    return(
<BrowserRouter>
<div>
<Switch>
<Route  exact path ="/"  component={Home} />
<Route   path ="/Services"  component={Services} /> 
<Route  path ="/about"  component={About} />

<Route   path ="/Contact"  component={Contact} />
<Route  component={NoMatch} />
</Switch>
</div>
</BrowserRouter>
    );
}

export default AppRouter;