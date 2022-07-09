import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TrendChart from "./charts/TrendChart";

const Trend = (props) => {
  return (
    <Grid conatainer mt={3}>
       <Grid item xs={12}>
          <Paper variant="outlined" square>
             <Box sx={{padding:"8px 13px"}} >
             <Typography variant="body2" component="p">Daily Order Trand</Typography>
            </Box>
            <Box sx={{width:"100%" ,height:"400px"}}>
             <TrendChart/>
            </Box>
         </Paper>
      </Grid>
   </Grid>
  );
};

Trend.propTypes = {};

export default Trend;
