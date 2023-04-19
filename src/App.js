import './App.css';
import About from './components/About';
import Navbar from './components/MyNavbar';
import TextForm from './components/MyTextForm';




function App() {

  const basic = {
    backgroundColor: '#c4acff80'
  }

  return (
    <>
      <div style={basic}>
        <Navbar title="TextUtils" />
        <TextForm heading="Enter the text to analyse below: " />
        <About />
      </div>

    </>
  );
}

export default App;
