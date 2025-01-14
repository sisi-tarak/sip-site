import { Container } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Container
      maxWidth="lg"
      className="flex justify-center items-center h-screen"
    >
      <div className="text-7xl text-headColor font-semibold font-ubuntu tracking-widest">
        Not Found
      </div>
    </Container>
  );
};

export default NotFound;
