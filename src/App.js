import './App.css';
import Header from './Home/Header';
import Main from './Home/Main';
import Footer from './Home/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;