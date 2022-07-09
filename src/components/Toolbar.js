import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"
import BasicSelect from "./DropDown";
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/Input"
import OutlinedInput from "@mui/material/OutlinedInput"
import DateRangePickerHandeler from "./DateRangePickerHandeler";

const Toolbar = (props) => {
  return <Stack spacing={2} direction="row" sx={{marginTop:"28px"}}>
          <Box sx={{display:"flex",alignItems:"center"}} >
             <Typography variant="body4" component="h3">Date:</Typography>
             <DateRangePickerHandeler/>
           </Box>
          <Box sx={{display:"flex",alignItems:"center"}}>
             {/* <Typography variant="body4" component="h3">Channel:</Typography>
             <BasicSelect/> */}
          </Box>
        </Stack>;
};

Toolbar.propTypes = {};

export default Toolbar;
