import './App.css';
import NavBar from './Components/NavBar/navbar'
import Footer from './Components/Footer/footer'
import Landing from './Components/LandingPage/landing'
import Services from './Components/Services/Services'
import Success from './Components/SuccessStories/success'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Services />
      <Success />
      <Footer />
    </div>
  );
}

export default App;
