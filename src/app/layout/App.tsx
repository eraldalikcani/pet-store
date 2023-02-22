import { Button, Container } from "@mui/material";
import path from "path";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Login from "../../features/account/Login";
import Catalog from "../../features/Catalog";
import agent from "../api/agent";
import { User } from "../models/user";
import Header from "./Header";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header handleClickOpen={handleClickOpen} />
      {null ? <Login handleClose={handleClose} open={open}/> : <Catalog />}
      <Container>
        <Routes>
          <Route path="/Pets" element={<Catalog />} />
          <Route path="/login" element={<Login handleClose={handleClose} open={open}/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
