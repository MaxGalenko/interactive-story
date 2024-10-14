import { lazy } from 'react';
import './App.css';
// components
const Nav = lazy(() => import('./components/Nav'));

function App() {
  return (
    <Nav />
  );
}

export default App;