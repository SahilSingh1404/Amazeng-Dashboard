'use client'
import React from 'react';
import Nav from './Nav';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function Home(){
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const appBarHeight = 64;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Nav open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

      {/* Content */}
      <main
        style={{
          flexGrow: 1,
          padding: '20px',
          transition: 'margin-left 0.3s ease', 
          marginTop: `${appBarHeight}px`, 
          textAlign: 'left', 
        }}
      >
        <div>
        {/* <Typography paragraph> */}
        YOUR CONTENT HERE
        </div>
      </main>
    </Box>
  );
}

