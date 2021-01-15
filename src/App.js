import './App.css';
import NavBar from './Components/NavBar/navbar'
import Footer from './Components/Footer/footer'
import Landing from './Components/LandingPage/landing'
import Services from './Components/Services/Services'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
