import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"
const Toolbar = (props) => {
  return <Stack spacing={2} direction="row" sx={{marginTop:"28px"}}>
          <Box>
             <Typography>Date: calender component</Typography>
          </Box>
          <Box>
             <Typography>Channel: Dropdown component</Typography>
          </Box>
        </Stack>;
};

Toolbar.propTypes = {};

export default Toolbar;
