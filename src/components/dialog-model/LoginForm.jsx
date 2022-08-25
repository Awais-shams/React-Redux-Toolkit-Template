import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

import { handleClickClose } from "../../features/model-slice/ModelSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  passwordHandler,
  emailHandler,
  loginHandler,
} from "../../features/login-slice/LoginSlice";
const LoginForm = ({ open }) => {
  const login = useSelector((state) => state.login);

  console.log(login.email);

  const dispatch = useDispatch();
  return (
    <Box>
      <Dialog open={open}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            label="Email"
            type="text"
            value={login.email}
            onChange={(e) => dispatch(emailHandler(e.target.value))}
          />
          <TextField
            label="Password"
            type="password"
            value={login.password}
            onChange={(e) => dispatch(passwordHandler(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => dispatch(loginHandler())}>
            Login
          </Button>
          <Button onClick={() => dispatch(handleClickClose())} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LoginForm;
