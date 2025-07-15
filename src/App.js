import { lazy, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
const Nav = lazy(() => import('./components/Nav'));
// pages
const Home = lazy(() => import('./pages/Home'));
const Story = lazy(() => import('./pages/Story'));
const About = lazy(() => import('./pages/About'));
const Choices = lazy(() => import('./pages/Choices'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  const [bgImage, setBgImage] = useState(() => {
    // Get the image name from localStorage or default to 'White'
    return localStorage.getItem('BgImage') || 'White';
  });

  useEffect(() => {
    // Listen to changes in localStorage in the same tab
    const interval = setInterval(() => {
      const stored = localStorage.getItem('BgImage');
      if (stored !== bgImage) {
        setBgImage(stored);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [bgImage]);

  const bgMap = {
    White: require('./assets/Butterfly-Effect-Bg-Light.png'),
    Black: require('./assets/Butterfly-Effect-Bg-Dark.png'),
  };

  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Nav />
        <div
          className='flex-grow bg-repeat-space'
          style={{
            backgroundImage: `url(${bgMap[bgImage]})`,
            backgroundSize: '150px',
            backgroundColor: bgImage,
          }}
        >
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
