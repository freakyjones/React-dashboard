import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack"

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Order from "./Order";

// use json data insted
const Orders = [1,2,3,4,]
const OrdersList = (props) => {

  return (
    <Stack spacing={3} direction="column">  
        {
            Orders.map((item )=>{
             return <Order key={item}/>
            })
         }
    </Stack>
  ) ;
};

OrdersList.propTypes = {};

export default OrdersList;
