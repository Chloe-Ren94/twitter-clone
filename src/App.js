import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./components/HomeScreen";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
