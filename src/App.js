import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import user from "./reducers/user";
import IndexScreen from "./components/IndexScreen";
import SignupScreen from "./components/SignupScreen";
import HomeScreen from "./components/HomeScreen";
import SetupScreen from "./components/SetupScreen/SetupScreen";

const reducer = combineReducers({user})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexScreen/>}/>
                <Route path="/signup" element={<SignupScreen/>}/>
                <Route path="/setup" element={<SetupScreen/>}/>
                <Route path="/home" element={<HomeScreen/>}/>
            </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
