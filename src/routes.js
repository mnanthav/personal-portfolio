//=========================================================================
// File: .../src/routes.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import HomePage from './components/Home';
import AboutPage from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const routes = [
   {
      path: '/',
      component: <HomePage />,
      exact: true
   }, 
   {
      path: '/about',
      component: <AboutPage />
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