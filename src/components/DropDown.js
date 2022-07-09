import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { borderRadius } from '@mui/system';

export default function BasicSelect() {
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120,borderRadius:"none",marginLeft:"8px" }} >
      <FormControl fullWidth 
        sx={{
           '& .MuiFormControl-root':{
           },
         '& .MuiFormLabel-root':{
             display:"none",
             top:"-17px",
             borderRadius:"0px"
         }
        }}
      >
        <InputLabel id="demo-simple-select-label"
             sx={{
            '& .MuiInputLabel-root':{
               borderRadius:"0px"
           }
        }}
        >All</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={company}
          label="All"
          onChange={handleChange}
          sx={{ 
             'MuiSelect-root':{
                 borderRadius:"0px"
              },
             '& .MuiSelect-select': {
             padding:"0px 14px",
            borderRadius:"0px"
           },
           '&  .MuiInputBase-input':{
             borderRadius:"0px"
           }
           
        }}
        >
          <MenuItem value={`All`}>All</MenuItem>
          <MenuItem value={`Amazon`}>Amazon</MenuItem>
          <MenuItem value={`Swiggy`}>Swiggy</MenuItem>
          <MenuItem value={`Eatfit`}>Eatfit</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
