import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClickOpen } from "../../features/model-slice/ModelSlice";
import { AppBar, Toolbar, Box, Typography, Button, Grid } from "@mui/material";
import { logoutHandler } from "../../features/login-slice/LoginSlice";
import ConstructionIcon from "@mui/icons-material/Construction";
import LoginForm from "../dialog-model/LoginForm";

const Header = () => {
  const open = useSelector((state) => state.model.open);
  const dispatch = useDispatch();

  console.log(open);

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item lg={4}>
              <ConstructionIcon sx={{ mr: 2 }} />
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h6" component="div">
                React Redux Toolkit
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Button
                color="inherit"
                onClick={() => dispatch(handleClickOpen())}
              >
                Login
              </Button>
              <Button
                color="inherit"
                onClick={() => dispatch(logoutHandler())}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar>{open ? <LoginForm open={open} /> : null}</Toolbar>
    </Box>
  );
};

export default Header;
