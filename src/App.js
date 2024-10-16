import { lazy } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// components
const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Choices = lazy(() => import('./pages/Choices'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route path='/About' element={ <About />} />
        <Route path='/Choices' element={ <Choices />} />
        <Route path='/Settings' element={ <Settings />} />
      </Routes>
    </Router>
  );
}

export default App;