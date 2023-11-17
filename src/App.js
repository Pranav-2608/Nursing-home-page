import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <div>
          <Router/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
