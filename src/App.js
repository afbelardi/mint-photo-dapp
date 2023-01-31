import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import AfbelardiPhotoNFT from './AfbelardiPhotoNFT.json';
import { ethers, BigNumber } from 'ethers';

function App(props) {

  const afbelardiContractAddress = '0xa8825A500863bbaAc13f5D15810BAf3Ea2463984';

  const [accounts, setAccounts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);

  const commenceMint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        afbelardiContractAddress,
        AfbelardiPhotoNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString())
        });
        console.log('response: ', response);
      } catch(error){
        console.error(error)
      }
    } 
  }

  return (
    <div className="App">
      {menuOpen ? <MenuBar 
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen}
      accounts={accounts}
      setAccounts={setAccounts} 
      mintAmount={mintAmount}
      setMintAmount={setMintAmount}
      commenceMint={commenceMint}
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
      <Footer mintAmount={mintAmount} setMintAmount={setMintAmount} accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
