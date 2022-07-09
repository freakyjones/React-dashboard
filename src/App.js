import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import Configuration from './components/Configuration/Configuration';
import ResponsiveAppBar from './components/AppBar';
import Container from "@mui/material/Container"
function App() {

  return (
    <div className="App">
     <Router>
     <ResponsiveAppBar/>
         <Container maxWidth="lg">
      
      <Routes>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/configuration" element={ <Configuration/>}/>
          <Route path="/" element={<Dashboard/>}>
          </Route>
        </Routes>
    
     </Container>
     </Router>
    </div>
  );
}

export default App;
