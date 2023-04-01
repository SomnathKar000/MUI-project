import React from "react";
import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      Right bar
    </Box>
  );
};

export default Rightbar;
