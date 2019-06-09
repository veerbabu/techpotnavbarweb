import  React  from 'react';
import { Nav , Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import './navBar.css';




export const Nava = () =>(
<div className="nav">
          <ul>
              <li className="logo">Design<span>Labs</span></li>
          </ul>
          
              <nav className="ml-auto">
              <Link  activeClass="active" 
              spy={true}
              smooth={true}
              offset={0}
              duration={500}> <Nav.Item><Nav.Link href="/contact"><p >Contact</p></Nav.Link></Nav.Item></Link>
              </nav>
          </div>
    )
    

