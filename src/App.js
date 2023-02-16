
import './App.css';
import NavBar from './components/NavBar';
import InputText from './components/InputText';

function App() {
  return (
    <div className="App">
      <NavBar title={"Text-Editor"}/>
      <InputText heading={"Add your text here to edit it."}/>
      
    </div>
  );
}

export default App;
