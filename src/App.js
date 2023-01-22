import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import MenuBar from './components/MenuBar';


function App(props) {

  const [accounts, setAccounts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  return (
    <div className="App">
      {menuOpen ? <MenuBar 
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen}
      accounts={accounts}
      setAccounts={setAccounts} 
      mintAmount={mintAmount}
      setMintAmount={setMintAmount}
      /> : ''}
      <NavBar 
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen}
      accounts={accounts}
      setAccounts={setAccounts}
      />
      <div id="image-slider-wrapper">
      <ImageSlider />
      </div>
    </div>
  );
}

export default App;
