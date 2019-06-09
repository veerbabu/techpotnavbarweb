import React , { Component } from 'react';

import './Services.css';


class Services extends Component{
    render(){
        return(
            <div className="services" id="service">
            <h1>SERVICES</h1>
            <h2>what we offer</h2>
            <div className="row">
            <div>
            <span>
            <ion-icon name="phone-portrait"></ion-icon>
            </span>
            <h4>
           react
            </h4>
            <p>
            best app web development
            </p>
            </div>
            <div>
            <span>
            <ion-icon name="appstore"></ion-icon>
           
            </span>
            <h4>
           react
            </h4>
            <p>
            best app web development
            </p>
            </div>
            <div>
            <span>
            <ion-icon name="alarm"></ion-icon>
           
            </span>
            <h4>
           react
            </h4>
            <p>
            best app web development
            </p>
            </div>
            <div>
            <span>
            <ion-icon name="beer"></ion-icon>
           </span>
            <h4>
           react
            </h4>
            <p>
            best app web development  
              <ion-icon name="heart-half"></ion-icon> 
                         </p>
            </div>
            </div>
            </div>

        );
    }
}

export default Services;
