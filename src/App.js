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
import AddTemplate from './screens/AddTemplate/AddTemplate';
import Customers from './screens/Customers/Customers';
import UploadFile from './screens/UploadFile/UploadFile';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/analytics' element={<GraphPage />}/>
          <Route path='/add-template' element={<AddTemplate />}/>
          <Route path='/customers' element={<Customers />} />
          <Route path='/upload' element={<UploadFile />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
