
import './App.css';
import Nav from './components/Navbar/Nav';
import Hero from './Pages/Hero/Hero';
import Movie from './Pages/MoviePage/Movie';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <Movie/>
    </div>
  );
}

export default App;
