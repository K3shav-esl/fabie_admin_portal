import logo from './logo.svg';
import bootstrap from 'bootstrap';
import './App.css';
import Login from './screens/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import GraphPage from './screens/GraphPage/GraphPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/analytics' element={<GraphPage />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
