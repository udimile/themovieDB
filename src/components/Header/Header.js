import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from '../../routes/Coordinator'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



export default function Header() {
  const navigate = useNavigate()

  return (
    
      <AppBar onClick={() => navigate(goToHome)} position="static">
        <Toolbar variant="dense" color="primaryColor" onClick={() => navigate(goToHome)}>
          <Typography variant="h4" component="div" color="white">
            TMDB
          </Typography>
        </Toolbar>
      </AppBar>

  )
}