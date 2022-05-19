import logo from './logo.svg';
import './App.css';
import Header from './1_Header/Header';
import Carousel from './1_Header/Carousel';
import Smartphone from './2_Body/Smartphone';
import Laptop from './2_Body/Laptop';
import Promotion from './3_Footer/Promotion';
function App() {

  // JSX: Javascript XML - cho phép viết HTML trong javascript
  return (
    <div>
      <Header/>
      <div>
        <Carousel/>
        </div>
        <div>
          <Smartphone/>
        </div>
        <div>
          <Laptop/>
        </div>
        <div>
          <Promotion/>
        </div>
    </div>
  );
}

export default App;
