import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Helmet} from 'react-helmet';
import sal from 'sal.js'









export default class Team extends Component {

    componentDidMount() {
        sal({
          
          once: false,
        })
      }


    render() {
    return(
        <div>
            <Helmet>
            <link rel="stylesheet" href="Team.css" />
            </Helmet>

    <div  class="mainwrapper">
      <div class="col1">
        
      <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
        </ul>
        
        <div class="screen">
          <header>
           
            <a class="target-burger">
              <ul class="buns">
                <li class="bun"></li>
                <li class="bun"></li>
              </ul>
              
            </a>
            
          </header>
          
          <nav class="lil-nav" role="navigation">
            <ul>
              <li><span onclick="transitionToPage('index.html')" data-text="intro">intro</span></li>
              <li><span onclick="transitionToPage('work.html')" data-text="work">work</span></li>
              <li><span class="active"onclick="transitionToPage('team.html')" data-text="team">team</span></li>
              <li><span  onclick="transitionToPage('contact.html')" data-text="contact">contact</span></li>
              <li><span onclick="transitionToPage('quote.html')">quote</span></li>
            </ul>
          </nav>
          
        </div>
       
      </div>
      
      <div class="col2">
        <h1 class="mainbanner">team</h1>
        <div class="center-con">
          <div class="round">
            <div id="cta">
              <span class="arrow primera next "></span>
              <span class="arrow segunda next "></span>
            </div>
            
          </div>
          
        </div>
       
      </div>
     
      <div class="col3">
        <div class="svg-wrapper">
          <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="225"></rect></svg>
            <div class="quotes">
              <span onclick="transitionToPage('quote.html')">free quote
              </span>
            </div>
            
        </div>
    
      </div>
      
    </div>
   
    
    
    <div class='text'>
      <hr  id='line'/>
      <p  class='under'><span id="sizedup">We are digital asset creators.</span> This entails the creation of applications in the fields of full stack web and mobile apps, blockchain development, data science and analysis, and anything that can create wealth on the web.
       Our team creates and manages applications built by us, and built by our clients. We work to develop value within every pocket of the web today. 
      </p>
      <hr  id='line'/>
      
    </div>
    
    
    <div class="container2">
    <h2 id="textf">Architect</h2>


    <div id="nameg">
    <hr id='line1'/>


    <div id="socialsg">
    <h3  id="textg">Gavin Henderson / Co-founder</h3>
    <ul class="socials">
      
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
      <li data-sal="zoom-up"
     
      data-sal-easing="easeInQuint"><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
    </ul>
  </div>
  </div>


  <div id="undercontainer"> 
    <p class='underg'>A computer programmer and data scientist, Gavin builds efficient and complex codebases and algorithms for applications and programs.
      Working to provide out clients and applications with the best speeds and flow. An engineer geared for the digital age. 

      
      </p>
    </div>
      
      <h2  class="plussign">+</h2>
    </div>
 




<div class="container3">
  
  <h2 id="textk">Creator</h2>

  <div id="namet">

    <div id="socialst">
    <h3 id="textdesc">Tyler Smith / Co-founder</h3>
    <ul class="socials">
      
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="https://twitter.com/Smith_t7"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="https://tylersmith.digital"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="https://www.linkedin.com/in/tylersmith77/"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
      <li data-sal="zoom-up"
      
      data-sal-easing="easeInQuint"><a href="https://www.instagram.com/smith7t/"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
    </ul>
  </div>
  <hr  id='line2'/>
  
</div>



<div id="undercontainer"> 
  <p class='underg'>A Creator of code, design, and media.  
    I am a full stack programmer, working with the JavaScript language.
    
    
    </p>
  </div>
  </div>



  <div class="container4">
  
    <hr data-sal="slide-down"
    
     id='linedown'/>

    
    <div class="contactForm">
      <form netlify>
        <h2 id='textcomm'>Join the community</h2>
        
        <div class="inputBox">
          <input type="text" name="" required="required"/>
          <span>Email</span>
        </div>
        
        <div class="inputBox">
          <input type="submit" name="" value="Send"/>
        </div>
      </form>


      
    </div>
  
    <h2 id='textcomm'>Or</h2>

   
    <a href="" class="blockoPayBtn" data-toggle="modal" data-uid="f1d47c888bf211eb"><img width="100" src="images/bitcoin.png"/>Donate</a>
    
    
    </div>

    

    <section>
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>



        </div>
    )
    
    
    }


}