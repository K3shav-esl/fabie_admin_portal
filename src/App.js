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
import NewCategory from './screens/NewCategory/NewCategory';
import SelectTemplate from './screens/SelectTemplate/SelectTemplate';




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
          <Route path='/new-category' element={<NewCategory />} />
          <Route path='/select-template' element={<SelectTemplate />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
