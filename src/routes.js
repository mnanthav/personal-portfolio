//=========================================================================
// File: .../src/routes.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

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