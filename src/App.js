import { lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// assets
import BgImage from './assets/Butterfly-Effect-Bg.png';
// components
const Nav = lazy(() => import('./components/Nav'));
// pages
const Home = lazy(() => import('./pages/Home'));
const Story = lazy(() => import('./pages/Story'));
const About = lazy(() => import('./pages/About'));
const Choices = lazy(() => import('./pages/Choices'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Nav />
        <div className='flex-grow bg-repeat-space' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: '150px' }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Story' element={<Story />} />
            <Route path='/About' element={<About />} />
            <Route path='/Choices' element={<Choices />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;