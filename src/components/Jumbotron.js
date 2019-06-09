import React , { Component } from 'react';
import { Jumbotron as Jumbo , Container } from 'react-bootstrap';
import styled from 'styled-components';
import companyImage from '../Assets/companyImage.jpg';
import './Jumbotron.css';
import  NavgationBar  from './NavgationBar';
import './navBar.css';
import { Nav , Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Process from './Process';


const Styles = styled.div`
.jumbo{
    background: url(${companyImage}) no-repeat fixed bottom;
    background-size:100%;
    background-position: center;
    color: #efefef;
    height: 700px;
    position: relative;
    z-index: -2;
}

.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

`;

class Jumbotron extends Component{
    render(){
        return(
            <Styles>
    <div className="jumbomain">
<NavgationBar />
 <div fluid className="jumbo" id="jumbot" >
    <div ></div>
   <div className="container">
    <h1>we innovate next big thing</h1>
    <div><a className="contact" href="contacts">Contact Us</a></div>
    </div>
    </div>
    </div>
    
       </Styles>
        )
    }
    }
export default Jumbotron;