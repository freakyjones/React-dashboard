import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
const Order = (props) => {
  return ( 
  <Paper varaiant="outlined" square sx={{marginTop:"28px",padding:"24px 24px 40px 24px"}}>
  <Stack direction="row" flex="1" >
          <Box flexBasis="100%" >
           <Typography variant="h5" component="h3">268910</Typography>
            <Typography variant="body2" component="p">All ORDERS</Typography>
         </Box>
         <Box flexBasis="100%" >
              <Typography variant="h5" component="h3">268910</Typography>
              <Typography variant="body2" component="p">Paid By User</Typography>
         </Box >
         <Box flexBasis="100%" >
              <Typography variant="h5" component="h3">268910</Typography>
              <Typography variant="body2" component="p">commission</Typography>
         </Box >
         <Box flexBasis="100%" >
               <Typography variant="h5" component="h3">268910</Typography>
                <Typography variant="body2" component="p">Govt.Tax</Typography>
         </Box>
           <Box flexBasis="100%" >
               <Typography variant="h5" component="h3">268910</Typography> 
              <Typography variant="body2" component="p">Net Payable</Typography> 
         </Box>
         </Stack> 
    </Paper>)
};

Order.propTypes = {};

export default Order;
