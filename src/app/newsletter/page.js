'use client'
import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnnouncementList from "../announcements/AnnouncementList";
import AnnouncementForm from "../announcements/AnnouncementForm";
import './newsletter.css';
import Nav from '../Nav';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function Page(){
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [announcements, setAnnouncements] = useState([]);
  const [editAnnouncement, setEditAnnouncement] = useState(null);

  const addAnnouncement = (newAnnouncement) => {
    if (editAnnouncement !== null) {
      // If editing, update the existing announcement
      const updatedAnnouncements = announcements.map((announcement) =>
        announcement.id === editAnnouncement.id
          ? { ...announcement, ...newAnnouncement }
          : announcement
      );
      setAnnouncements(updatedAnnouncements);
      setEditAnnouncement(null);
    } else {
      // If not editing, add a new announcement
      setAnnouncements([
        ...announcements,
        { id: Date.now(), ...newAnnouncement },
      ]);
    }
  };

  const deleteAnnouncement = (id) => {
    const updatedAnnouncements = announcements.filter(
      (announcement) => announcement.id !== id
    );
    setAnnouncements(updatedAnnouncements);
  };

  const editAnnouncementHandler = (announcement) => {
    setEditAnnouncement(announcement);
  };

  const appBarHeight = 64; 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Nav open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

      <main
        style={{
          flexGrow: 1,
          padding: '20px',
          transition: 'margin-left 0.3s ease', 
          marginTop: `${appBarHeight}px`, 
          textAlign: 'left', 
        }}
      >
        <Typography variant="h4" gutterBottom sx={{display:'inline'}}>
        Newsletter
      </Typography>
        <div className="news">
        <Card sx={{ width: 800}} className='news1'>
        <CardMedia
          component="img"
          sx={{ height:200 }}
          image="https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"
          title="mountains"
        />
        <CardContent>
          <AnnouncementForm
              onSubmit={addAnnouncement}
              editAnnouncement={editAnnouncement}
            />
            <AnnouncementList
              announcements={announcements}
              onDelete={deleteAnnouncement}
              onEdit={editAnnouncementHandler}
            />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
        </div>
      </main>
    </Box>
  );
}