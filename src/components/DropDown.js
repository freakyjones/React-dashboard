import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {styled} from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { borderRadius, padding } from '@mui/system';
import { Translate } from '@mui/icons-material';


const CustomizedInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #DDDDDD',
    fontSize: 14,
    height:"25px",
    padding: '0 14px',
    marginBottm:"5px",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
  },
}));

export default function BasicSelect() {
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160,height:25,  borderRadius:"none",marginLeft:"8px" }} >
      <FormControl fullWidth  
        sx={{
        '& .MuiFormLabel-root':{
          transform:"translate(14px, 1px) scale(1)",
          borderRadius:"0"
        }
        }}
      >
        {company==='' && <InputLabel id="custom-select-label">All</InputLabel>}
        <Select
          labelId="custom-select-label"
          id="custom-select"
          value={company}
          label="All"
          onChange={handleChange}
          input={<CustomizedInput/>}
          sx={{
           '& .MuiSelect-select':{
                 borderRadius:"0",
                 padding:"0 14px" ,
                 boxSizing:"border-box" 
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
