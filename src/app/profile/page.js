'use client'
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RsvpIcon from '@mui/icons-material/Rsvp';
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DataGrid, DataGridOverlay } from "@mui/x-data-grid";
import "./profile.css";
import { useState } from "react";
import Nav from "../Nav.js";
import Swal from "sweetalert2";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 1,
};
export default function Page() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this suggestion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "This suggestion has been deleted.", "success");
      }
    });
  };
  const deleteRow = (id) => {
    // Filter out the row with the specified ID
    const updatedRows = rows.filter((row) => row.id !== id);
    // Update the state with the new rows
    setRows(updatedRows);
  };

  const [isLoading, setIsLoading] = useState(true);
  const getRowClassName = (params) => {
    return params.id % 2 === 1 ? "alternateRow" : "";
  };

  const columns = [
    {
            field: "id",
            headerName: "ID",
            width: 150,
            headerClassName: "head1",
            headerAlign: "center",
          },
      
          {
            field: "propertyName",
            headerName: "Name",
            width: 230,
            headerClassName: "head1",
            headerAlign: "center",
          },
          {
            field: "age",
            headerName: "Age",
            width: 150,
            headerClassName: "head1",
            headerAlign: "center",
          },
          {
            field: "phone",
            headerName: "Phone Number",
            width: 280,
            headerClassName: "head1",
            headerAlign: "center",
          },
          {
            field: "email",
            headerName: "Email ID",
            width: 250,
            headerAlign: "center",
            headerClassName: "head1",
          },
          
 
    {
      field: "action",
      headerName: "Action",
      width: 320,
      headerAlign: "center",
      headerClassName: "head1",
      renderCell: (params) => {
        const active = () => {
          console.log("abc");
        };
        
        return (
          <div>
            <RsvpIcon fontSize="large" sx={{marginRight:"4px"}} />
             <EditSharpIcon onClick={handleOpen} style={{  cursor: 'pointer',color: "black", marginRight: '10px' }} />
             <a><DeleteIcon style={{ cursor: 'pointer', marginRight: '10px' }} onClick={handleDelete} /></a>
            <VisibilityIcon style={{ cursor: 'pointer'}}/>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 'auto', height: 'auto' }}>
                <div className="b1">
                  <div className="division1Head" sx={{ fontFamily: "Roboto" ,marginTop:0}}>
                    <h2  sx={{ fontFamily: "Roboto" ,}}>
                      Edit Member Details{" "}
                      <CloseIcon
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          margin: 0,
                          cursor:'pointer',
                        }}
                      />
                    </h2>
                  </div>
                </div>
                <div className="outside-contents">
                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Name
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Age
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Phone Number
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>
                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      EmailId
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>
                  <div className="contents">
                    <button
                      className="submit"
                      type="submit"
                      onClick={handleClose}
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        );
      },
    },
  ];
  const [rows, setRows] = useState([
    
    {
            connect: "Connect",
            id: "1",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "2",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "3",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "4",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "5",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "6",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "7",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "8",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "9",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
          {
            connect: "Connect",
            id: "10",
            propertyName: " John Doe",
            cincout: "21/09/2023 - 30/09/2023",
            age: "18",
            phone: "1234567890",
            email: "johndoe@gmail.com",
          },
        ]);

  const [open1, setOpen1] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen1(true);
  };

  const handleDrawerClose = () => {
    setOpen1(false);
  };

  const appBarHeight = 64; 

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Nav
        open={open1}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <main
        style={{
          // flexGrow: 1,
          padding: "0px",
          transition: "margin-left 0.3s ease",
          marginTop: `${appBarHeight}px`,
          textAlign: "left",
        }}
      >
        <div>
          <container className="extcont">
            <container className="cont1">Profile</container>
            <Box className="cont2" sx={{ height: 650, width: "auto" }}>
              {/* <DataGridOverlay loading={isLoading}> */}
              <DataGrid
                rows={rows}
                columns={columns}
                getRowClassName={getRowClassName}
                hideFooterPagination={true}
                sx={{
                  "& .MuiDataGrid-cell": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              />
              {/* </DataGridOverlay> */}
            </Box>
          </container>
        </div>
      </main>
    </Box>
  );
}
