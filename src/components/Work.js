import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import sal from 'sal.js'


export default class Work extends Component {

  componentDidMount() {
    sal({
      
      once: false,
    })
  }
    render() {
      
      return (
        
        <div >
    
        <Helmet>
        <link rel="stylesheet" href="Work.css" />
        </Helmet>

        <div className="containersnap">
        <div className="mainwrapper"
        >
          
          <div className="col1">
            
          <ul className="topleft">
         <li><Link to='./home' style={{ textDecoration: 'none' }} ><span className="active"  data-text="intro">intro</span></Link></li> 
         <li> <Link to='./users' style={{ textDecoration: 'none' }} ><span  data-text="work">work</span></Link></li> 
         <li><Link to='./team' style={{ textDecoration: 'none' }} ><span  data-text="team">team</span></Link></li> 
         <li><Link style={{ textDecoration: 'none' }} ><span  data-text="contact">contact</span></Link></li> 
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
                  <li><span onclick="transitionToPage('index.html')" data-text="intro">intro</span></li>
                  <li><span className="active"onclick="transitionToPage('work.html')" data-text="work">work</span></li>
                  <li><span onclick="transitionToPage('team.html')" data-text="team">team</span></li>
                  <li><span  onclick="transitionToPage('contact.html')" data-text="contact">contact</span></li>
                  <li><span onclick="transitionToPage('quote.html')">quote</span></li>
                </ul>
              </nav>
                  
            </div>
            
          </div>
          

          
          <div className="col2"> 
            <h1 className="mainbanner">work</h1>
            <div className="center-con">
              <div className="round">
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
              
          
          <div className="col3">
            <div  className="svg-wrapper">
              <svg height="60" width="225" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="225"></rect>
              </svg>
                <div className="quotes">
                  <span onclick="transitionToPage('quote.html')">free quote
                  </span>
                </div>
                
            </div>
            
          </div>
          
          </div>
      
    
      
      <div className="sectionsnap">
        <div className="contentsnap">
          <div id="text" data-text="Projects">Projects</div>
          <div className="containerpro">
            <div className="cardspro"
            
            >
              <div className="layerpro"></div>
              <div className="layerpro"></div>
              <div className="layerpro"></div>
              <div className="layerpro">
                <div className="contentpro">
                  <h2>Retail</h2>
                  <p>Create your own online retail / e-commerce experience.</p>
                </div>
                
              </div>
              
            </div>
            
            <div className="cardspro2"
            data-sal="fade" 
            >
              <div className="layerpro2"></div>
              <div className="layerpro2"></div>
              <div className="layerpro2"></div>
              <div className="layerpro2">
                <div className="contentpro2">
                  <h2>Entertainment</h2>
                  <p>Media and social apps created to build a community</p>
                </div>
                
              </div>
              
            </div>
           
            <div className="cardsprofin"
            data-sal="slide-left" 
            >
              <div className="layerprofin"></div>
              <div className="layerprofin"></div>
              <div className="layerprofin"></div>
              <div className="layerprofin">
                <div className="contentprofin">
                  <h2>Financial</h2>
                  <p>Payment and blockchain applications built for the future of finance. </p>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
              
          <div className="containerpro3"
           >
            <div className="cardspro3">
              <div className="layerpro3"></div>
              <div className="layerpro3"></div>
              <div className="layerpro3">
                <div className="contentpro3">
                  <h2>Our Services</h2>
                  <p data-sal="slide-down"
                  
                  data-sal-easing="easeInQuint">Designing and Building</p>
                  <p data-sal="slide-left"
                  
                  data-sal-easing="easeInQuint">Front-end / back-end development</p>
                  <p data-sal="slide-right"
                 
                  data-sal-easing="easeInQuint">Mobile app development</p>
                  <p data-sal="slide-up"
                  
                  data-sal-easing="easeInQuint"> Marketing + Branding</p>
                  
                </div>
              </div>
            </div>
          </div>
          
          <div className="arrow2 arrow-first"></div>
          <div className="arrow2 arrow-second"></div>
        </div>
        
      </div>
      

      
      <div className="sectionsnap">
        <div className="contentsnap">
          <div  id="textC" data-text="Our apps">Our apps</div>
          <div  id="textunder" data-text="Created + Launched + managed + updated by site ppl.">Created + Launched + managed + updated by site ppl.</div>
          <div id="textA" data-text="Project A"><a href='#'>Project A</a></div>
          <div id="textB" data-text="Project B"><a href='#'>Project B</a></div>
          
        </div>
        
      </div>
      
    </div>
        </div>
      )}}