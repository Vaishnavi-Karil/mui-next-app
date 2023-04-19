import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("tablet")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },
}));

export default function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { mobile: "none", tablet: "block" } }}
        >
          Fullstack Developer
        </Typography>
        <Pets sx={{ display: { mobile: "block", tablet: "none" } }} />
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setopen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://lh3.googleusercontent.com/Qe5l-3WIN1RooQVLWuhNwEPdxI7RQHnv78yd-Lki-YdijwU1qMKpMZu6gj0RBdnWPxOQscTPF1lBkNcpd4nK4z9V_CObTx3gN2SHTUy3BZnRNFDOzO6om2S1RILHGdECP8ysy4gE3GawNVDfdfTJuuBPw4ZFxaOU-QUBNa4ee5zw8dccnm_opiBhBk4YIxXuDXKipt2WDyToPuGaq_zREtiY5JVtYREq4HojXCDBa2JU5PH3yoteZOqTdS5okTn7TWfgGLWnSWeHZ0pTPlMGGYpk6EuoXWVEOj0En7pCxZ7BMqYpzYvfuUqZT9R7YZcvJvczpbVvayVr5krVE6cqfzD3wZ_dfONLdh1LUea-oLs2osLwkK4WgwGY1s-CTGjlGivsDVn-uQbxY1vpKMmeGpn0gljcbkboEDwzrktDwM-EwpgxCcSBSEqz1a_Lgu6AzIHgSx3wGHed8qkSTYxf2nj-Cel0piXv0u5-JGmM9BEIJzl8XlI5DK54jFgbIkHhWI7qCXN94Lhx1BElEeyj2OIZK5y1HnAFU39p0kC54A6jhq5hipR4t9QjOHqCfc7hY2K8WnIyNDK6kf30rOWF-_zJTNqUIcrhNY3v2idAjbJuPluYWQb1I9DL4y9E_nKX16ITawrRRUuARpCZxPXfg3TeByjNTV0lL27nHWSGSHxdfq3jvoyTqCV9v7CgPOU7XlfewnQXNLYN56kMHqgAI-7QPHvpn-yjEMeaTKb8N0gbP6ivjut71DeM3cZ_l_TK1k0IQ1KH5dzqwd7GZ-DHGWz0g9vQFrkNnfXOTaQ4fxxfy27366TcxlsQm7eS98sevpkhsRXQME7TXN3KiRD4EkvgDTE9cy7PvHhSBwqMzZmYVx7yZd-O-yUIkBBowAzTMsmG2cuoakEv3S_Eh0Pxvn4YKl0-XMwZeE0YaYREw4b8BdcA=w399-h415-s-no?authuser=0"
          />
        </Icons>
        <UserBox onClick={() => setopen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://lh3.googleusercontent.com/Qe5l-3WIN1RooQVLWuhNwEPdxI7RQHnv78yd-Lki-YdijwU1qMKpMZu6gj0RBdnWPxOQscTPF1lBkNcpd4nK4z9V_CObTx3gN2SHTUy3BZnRNFDOzO6om2S1RILHGdECP8ysy4gE3GawNVDfdfTJuuBPw4ZFxaOU-QUBNa4ee5zw8dccnm_opiBhBk4YIxXuDXKipt2WDyToPuGaq_zREtiY5JVtYREq4HojXCDBa2JU5PH3yoteZOqTdS5okTn7TWfgGLWnSWeHZ0pTPlMGGYpk6EuoXWVEOj0En7pCxZ7BMqYpzYvfuUqZT9R7YZcvJvczpbVvayVr5krVE6cqfzD3wZ_dfONLdh1LUea-oLs2osLwkK4WgwGY1s-CTGjlGivsDVn-uQbxY1vpKMmeGpn0gljcbkboEDwzrktDwM-EwpgxCcSBSEqz1a_Lgu6AzIHgSx3wGHed8qkSTYxf2nj-Cel0piXv0u5-JGmM9BEIJzl8XlI5DK54jFgbIkHhWI7qCXN94Lhx1BElEeyj2OIZK5y1HnAFU39p0kC54A6jhq5hipR4t9QjOHqCfc7hY2K8WnIyNDK6kf30rOWF-_zJTNqUIcrhNY3v2idAjbJuPluYWQb1I9DL4y9E_nKX16ITawrRRUuARpCZxPXfg3TeByjNTV0lL27nHWSGSHxdfq3jvoyTqCV9v7CgPOU7XlfewnQXNLYN56kMHqgAI-7QPHvpn-yjEMeaTKb8N0gbP6ivjut71DeM3cZ_l_TK1k0IQ1KH5dzqwd7GZ-DHGWz0g9vQFrkNnfXOTaQ4fxxfy27366TcxlsQm7eS98sevpkhsRXQME7TXN3KiRD4EkvgDTE9cy7PvHhSBwqMzZmYVx7yZd-O-yUIkBBowAzTMsmG2cuoakEv3S_Eh0Pxvn4YKl0-XMwZeE0YaYREw4b8BdcA=w399-h415-s-no?authuser=0"
          />

          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
