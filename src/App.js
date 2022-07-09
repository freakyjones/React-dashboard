import './App.css';
import Typography from "@mui/material/Typography"
import ResponsiveAppBar from './components/AppBar';
import Container from "@mui/material/Container"
import Toolbar from './components/Toolbar';
import OrdersList from './components/OrdersList';
import Distributions from './components/Distributions';
import Trend from './components/Trend';
import {createTheme,ThemeProvider} from '@mui/material' 
import { fontWeight } from '@mui/system';
const theme= createTheme({
    components:{
       MuiTypography:{
           variants:[
            {
                 props:{
                   variant:"h5"
                 },
                 style:{
                    fontSize:36,
                    color: "#000",
                    fontWeight:700
                 }
              },{
                 props:{
                   variant:"body1"
                 },
                 style:{
                    fontSize:14,
                    color: "#555555",
                    fontWeight:700
                 }
              },{
                 props:{
                   variant:"body2"
                 },
                 style:{
                    fontSize:14,
                    color: "#888888"
                 }
              },{
                  props:{
                   variant:"body3"
                 },
                 style:{
                    fontSize:12,
                    color: "#888888"
                 }
              }
           ]
       }
    }
})
function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar/>
      <Container maxWidth="lg">
      <Toolbar/>
      <OrdersList/>
      <Distributions/>
      <Trend/>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
