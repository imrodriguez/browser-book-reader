import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = ():JSX.Element => (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CircularProgress />
    </Box>
);

export { Loading };