import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import MenuBar from './components/MenuBar';

function App(props) {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      {menuOpen ? <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : ''}
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <ImageSlider />
    </div>
  );
}

export default App;
