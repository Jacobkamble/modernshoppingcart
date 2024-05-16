import React, { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex' ,position:"absolute",top:"50%",left:"50%",justifyContent:"center",flexDirection:"column"}}>
    <CircularProgress size={100} />
  </Box>
  )
}

export default memo( Loading)
