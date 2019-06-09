import React from 'react';
import styled from 'styled-components';
 const Wrapper =styled.div`
 background-color: #1d809f;
 padding-top: 120px;
 padding-bottom: 120px;
 text-align: center;`;
const Footer = () => {
    return(
        <Wrapper>
        <footer className="footer is-primary">
        </footer>
        <div className="container">
       <div className="columns">
       <div className="column">
       <p>this the company</p>
       </div> 
       <div className="column has-text-right">
       <a className="icon" href="#" ><ion-icon name="appstore"></ion-icon></a>
       <a className="icon" href ="#"><ion-icon name="appstore"></ion-icon></a>
       </div>
       </div> 
        </div>
        </Wrapper>
    )
}
export default Footer;