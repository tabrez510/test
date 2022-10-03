import './App.css';
import NavigationBar from './Components/Header/NavigationBar';
import Banner from './Components/Home/Banner';
import Products from './Components/Home/Products';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Banner/>
      <Products/>
      <Footer/> 
    </div>
  );
}

export default App;
