import React, { useState } from "react";
import ControlPanel from "./ControlPanel";
import View from "./View";
import { Box, Container, Grid } from "@mui/material";
const Playground = () => {
  const [messages, setMessages] = useState();

  return (
    <Grid
      container
      sx={{
        border: "2px solid whitesmoke",
      }}
    >
      <Grid
        item
        md={5}
        sx={{
          borderRight: "2px solid whitesmoke",
        }}
      >
        <ControlPanel />
      </Grid>
      <Grid
        item
        md={7}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <View mode={"mobile"} />
      </Grid>
    </Grid>
  );
};

export default Playground;
