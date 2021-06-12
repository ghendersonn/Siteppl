import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'
import '../App.css'
import { motion, useViewportScroll, useTransform } from "framer-motion";







export default class Home extends Component {

  componentDidMount() {
    sal({
      threshold: 1,
      once: false,
    })
    
  }
  

    render() {
      
      return (
        <div >
        
       


    <body id="home">
    <div className="mainwrapper">
      
      <div className="col1">
        
        <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link to='./contact' style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
        </ul>
        
        <div className="screen">
          <header>
            
            <a className="target-burger">
              <ul className="buns">
                <li className="bun"></li>
                <li className="bun"></li>
              </ul>
              
            </a>
            
          </header>
          <nav className="lil-nav" role="navigation">
            <ul>
                    <li><span className="active"onclick="transitionToPage('index.html')" data-text="intro">intro</span></li>
                    <li><span onclick="transitionToPage('work.html')" data-text="work">work</span></li>
                    <li><span onclick="transitionToPage('team.html')" data-text="team">team</span></li>
                    <li><span  onclick="transitionToPage('contact.html')" data-text="contact">contact</span></li>
                    <li><span onclick="transitionToPage('quote.html')">quote</span></li>
            </ul>
          </nav>
          
        </div>
        
      </div>
      
      
      <div className="col2">
        <h1   className="mainbanner">site ppl</h1>
        
        <div className="center-con">
          <div className="round">
            <div id="cta">
              <span className="arrow primera next "></span>
              <span className="arrow segunda next "></span>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      <div className="colsvg">
        <div  className="svg-wrapper">
          <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="225"></rect>
          </svg>
            <div className="quotes">
              <Link to='./quote' style={{ textDecoration: 'none', color: 'white' }}><span>free quote
              </span></Link>
            </div>
            
        </div>
        
      </div>
      
    </div>

    <div className='body'>

  
      <div className="containerabout">
        <div className="cardabout">
          <div className="imgbx">
            <img src="Images\top.png" alt="Creator Image"/>
            <h3>A Digital Agency</h3>
          </div>
          
          <div className="contentabout">
            <p >We are builders of digital assets, including website, apps, libraries, and more. Get a quote on any design or development service, built for your needs.</p>
          </div>
          
        </div>
        
        
      </div>
      
    </div>
    
    <ul className='mid'>
    <hr  id='line1'/>
    <h2 id="textf">Creating, growing, and maintaining digital assets</h2>
    <hr  id='line1'/>



    </ul>

    <div className='body2'>
      <div  className="containerabout2">
        
            <h3 data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-out-back">Designers</h3>
            <img  src="Images\drip.svg" alt="Designer Image"/>
          
          
          <div className="contentabout">
            <p >As designers, we strive to build frameworks that can be easily transferred into real applications. We focus on making design clean, sleek, and intuitive to help firms differentiate from there competitors.</p>
          </div>
          
        
          </div>
        <div className="containerdesign">
          <a id='ux' data-text='UX & UX'>UI & UX</a>
                      
        </div>
        
        
        </div>
    
    
    

    
    <div className='bodys'>
      
        <div  className="containerdev">
          <div className="icondev" >
            <div className="contentdev">
              <a><i>Websites</i></a>
            </div>
           
          </div>
          
          <div className="icondev" >
            <div className="contentdev">
              <a><i className="">Security</i></a>
            </div>
            
          </div>
         
          <div className="icondev" >
            <div className="contentdev">
              <a><i className="">Apps</i></a>
            </div>
            
          </div>
          
          
        </div>
        
        <div className="containerabouts" >
            
            <h3>Developers</h3>
            <img src="../Images/box.svg" alt="Developer Image"/>
          
         
          <div className="contentabout">
            <p > As programmers, we are dedicated to creating applications that are fast and efficient. Our Integrations are unique and easy to adapt to. Let us handle the complex programming process for full stack apps </p>
          </div>
          
        
      
    </div>
    </div>





    <div className='body2'>
      <div className="containerabout2">
        
            <h3>Search Engine Optimization</h3>
            <img  src="Images\drip.svg" alt="Designer Image"/>
          
          
          <div className="contentabout">
            <p >As designers, we strive to build frameworks that can be easily transferred into real applications. We focus on making design clean, sleek, and intuitive to help firms differentiate from there competitors.</p>
          </div>
          
        
          </div>
        <div className="containerdesign">
          <a id='ux' data-text='SEO'>SEO</a>
                      
        </div>
        
        
        </div>
    

        <div className='bodys'>
      
      <div  className="containerdev">
        <div className="icondev" >
          <div className="contentdev">
            <a><i>Websites</i></a>
          </div>
         
        </div>
        
        <div className="icondev" >
          <div className="contentdev">
            <a><i className="">Security</i></a>
          </div>
          
        </div>
       
        <div className="icondev" >
          <div className="contentdev">
            <a><i className="">Apps</i></a>
          </div>
          
        </div>
        
        <h2 id='socialsdev'> + all digital services </h2>
      </div>
      
      <div className="containerabouts" >
          
          <h3>Marketing</h3>
          <img src="../Images/box.svg" alt="Developer Image"/>
        
       
        <div className="contentabout">
          <p > As programmers, we are dedicated to creating applications that are fast and efficient. Our Integrations are unique and easy to adapt to. Let us handle the complex programming process for full stack apps </p>
        </div>
        
      
    
  </div>
  </div>

        

    
    

    <div className="container">
      <div className="checkox">
        <p id='switch'>Work</p>
        <label>
          <input onclick="transitionToPage('work.html')" type="checkbox" name=""/>
          <span className="toggle"></span>
        </label>
      </div>
      
      <div className="checkox">
        <p id='switch'>Our Team</p>
        <label>
          <input onclick="transitionToPage('team.html')" type="checkbox" name=""/>
          <span  className="toggle"></span>
        </label>
      </div>
      
    </div>
    


    

    <div className='body1'
    data-sal="slide-up" data-sal-duration="1000">
      <div className="containersocial">
        <div className="iconsocial" >
          <div className="contentsocial">
            <a href="https://twitter.com/Siteppl"><i className="fa fa-twitter"></i></a>
          </div>
         
        </div>
        
        <div  className="iconsocial" >
          <div className="contentsocial">
            <a href="https://www.instagram.com/siteppl/"><i className="fa fa-instagram"></i></a>
          </div>
          
        </div>
        
        <div className="iconsocial" >
          <div className="contentsocial">
            <a href="https://www.linkedin.com/company/site-ppl"><i className="fa fa-linkedin"></i></a>
          </div>
          
        </div>
        
        <div className="iconsocial" >
          <div className="contentsocial">
            <a href="https://dribbble.com/Siteppl"><i className="fa fa-dribbble"></i></a>
          </div>
          
        </div>
        
        <h2 id='socials'>Follow Us</h2>
      </div>
     
    </div>
    

    <div className="quotes2">
      <span onclick="transitionToPage('quote.html')">get a free quote
      </span>
    </div>
    


    
    <section>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </section>
    

    
    </body>
        </div>



    
    )}}