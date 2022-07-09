import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch"
import OrderChart from "./charts/OrderChart";
import BrandChart from "./charts/BrandChart";
import ProductImg from "../assets/images/product.png"

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Distributions = (props) => {
  return (
     <Grid container mt={3} spacing={1}>
        <Grid item xs={12} md={6} lg={4}>
         <Paper sx={{padding:"8px 13px"}} variant="outlined" square >
          <Box sx={{width:"100%" ,height:"300px"}}>
           <Stack direction="row"  alignItems="center" justifyContent="space-between">
             <Box >
                <Typography variant="body2" component="p">Order Distribution</Typography>
            </Box>
            <Box >
        <Stack direction="row" spacing={0.5} alignItems="center">
       <Typography variant="body3" component="p">orders</Typography>
        <Switch {...label} defaultChecked size="small"/>
        <Typography variant="body3" component="p">amount</Typography>
      </Stack>
            </Box> 
          </Stack>
          <Box  sx={{width:"100%" ,height:"90%"}}>
           <OrderChart/>
          </Box>
        </Box>
        </Paper>
        </Grid>
          <Grid item xs={12} md={6} lg={4}>
         <Paper sx={{padding:"8px 13px"}} variant="outlined" square>
          <Box sx={{width:"100%" ,height:"300px"}}>
            <Box >
             <Typography variant="body2" component="p">Product Distribution</Typography>
            </Box>
            <Box sx={{width:"100%",height:"90%"}}>
              <img src={ProductImg} alt="product img" width="100%" style={{marginTop:"35px"}}  />
            </Box>
          </Box>
        </Paper>
        </Grid>
          <Grid item xs={12} md={6} lg={4}>
         <Paper sx={{padding:"8px 13px"}}   variant="outlined" square>
         <Box sx={{width:"100%" ,height:"300px",}}>
          <Box  >
             <Typography variant="body2" component="p">Brand Distribution</Typography>
          </Box>
          <Box sx={{width:"100%",height:"90%"}}>
           <BrandChart/>
          </Box>
         </Box>
        </Paper>
        </Grid>
    </Grid>
    )
       
};

Distributions.propTypes = {};

export default Distributions;
