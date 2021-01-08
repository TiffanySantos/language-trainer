import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './components/components.css';
import { Footer, Navigation, Testimonials, Contact, Information, Services, About, Home, Mobile, useMediaQuery } from './components/index.js';


function App () {

  const links = [
		{
			text: <FontAwesomeIcon icon={faHome} />,
			path: '/',
    },
    {
			text: 'About',
			path: '/about',
    },
    {
			text: 'Services',
			path: '/services',
		},
		{
			text: 'Information',
			path: '/information',
    },
    {
			text: 'Testimonials',
			path: '/testimonials',
		},
		{
			text: 'Contact',
			path: '/contact',
		},
  ]
  
  const isMobile = useMediaQuery('(max-width: 769px)');

  return (
    <Router>
      <div className='App'>
        <div className='header'>
          <div className='logo'>Rebecca Howles</div>
            {isMobile ? ( <Mobile links={links} /> ) : (
              <Navigation links={links} /> )}
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/information' component={Information} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
