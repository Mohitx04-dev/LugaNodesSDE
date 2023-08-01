import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/main';

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main></Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
