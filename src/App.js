import './App.css';
import Typography from "@mui/material/Typography"
import ResponsiveAppBar from './components/AppBar';
import Container from "@mui/material/Container"
import Toolbar from './components/Toolbar';
import OrdersList from './components/OrdersList';
import Distributions from './components/Distributions';
import Trend from './components/Trend';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Container maxWidth="lg">
      <Toolbar/>
      <OrdersList/>
      <Distributions/>
      <Trend/>
      </Container>
    </div>
  );
}

export default App;
