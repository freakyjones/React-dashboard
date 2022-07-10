import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography"
import Toolbar from '../Toolbar';
import OrdersList from '../OrdersList';
import Distributions from '../Distributions';
import Trend from '../Trend';
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
              },
               {
                 props:{
                   variant:"h6"
                 },
                 style:{
                    fontSize:24,
                    color: "#000000",
                    fontWeight:400
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
                    color: "#888888",
                    fontWeight:"400"
                 }
              },{
                  props:{
                   variant:"body3"
                 },
                 style:{
                    fontSize:12,
                    color: "#888888"
                 }
              },
              {
                  props:{
                   variant:"body4"
                 },
                 style:{
                    fontSize:12,
                    color: "#000"
                 }
              } 
           ]
       }
    }
})
const Dashboard = (props) => {
  return <div className="dashboard">
    <ThemeProvider theme={theme}>
      <Toolbar/>
      <OrdersList/>
      <Distributions/>
      <Trend/>
    </ThemeProvider>
  </div>;
};

Dashboard.propTypes = {};

export default Dashboard;
