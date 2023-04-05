import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge, InputBase, styled } from "@mui/material";
import { Mail } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const Search = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 5,
    width: "40%",
    padding: "0px 4px",
  }));
  const User = styled(Box)(({ theme }) => ({}));

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Button
            startIcon={<AdbIcon />}
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            variant="h5"
          >
            LOGO
          </Button>
          <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search" />
          </Search>
          <User>
            <Badge>
              <Mail />
            </Badge>
          </User>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
