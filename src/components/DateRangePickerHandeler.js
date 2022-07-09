import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Modal from '@mui/material/Modal';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60vw",
  height:"60vh", 
  bgcolor: 'background.paper',
  boxShadow: 24,
  p:1
};
const DateRangePickerHandeler = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Dates, setDates] = React.useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
 const getDate=()=>{
   let newDate;
   Dates.forEach((date)=>{
       
       let srtDate = `${date.startDate}`;
       let enDate = `${date.endDate}`; 
       newDate = `${srtDate.slice(0,10)}-${enDate.slice(0,10)}`;
    })
    return newDate;
 }

  return(
    <>
    <Box sx={{border:"1px solid #DDDDDD",marginLeft:"8px",cursor:"pointer",padding:"3px 4px",background:"#fff"}} component="button" onClick={handleOpen}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="body3" component="p" >{getDate()}</Typography>
        <CalendarMonthIcon style={{color:"#666666"}} fontSize="small" />
     </Stack>
    </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <DateRangePicker
  onChange={item => setDates([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={Dates}
  direction="horizontal"
/>
        </Box>
      </Modal>

    </>
  )  
};

DateRangePickerHandeler.propTypes = {};

export default DateRangePickerHandeler;
