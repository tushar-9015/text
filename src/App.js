
import './App.css';
import NavBar from './components/NavBar';
import InputText from './components/InputText';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState('false');

  const toggleDarkMode =() => {
    setDarkMode(darkMode => !darkMode)
    //  if(mode === 'light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor = 'black';
    //  }
    //  else {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //  }
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode': ''}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} title={"Text-Editor"} />
      <InputText isDarkMode={darkMode} heading={"Add your text here to edit it."}/>
      
    </div>
  );
}

export default App;
