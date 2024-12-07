//=========================================================================
// File: .../src/routes.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const routes = [
   {
      path: '/',
      component: <Home />,
      exact: true
   }, 
   {
      path: '/about',
      component: <About />
   }, 
   {
      path: '/projects',
      component: <Projects />
   }, 
   {
      path: '/skills',
      component: <Skills />
   }, 
   {
      path: '/contact',
      component: <Contact />
   }
];

export default routes;