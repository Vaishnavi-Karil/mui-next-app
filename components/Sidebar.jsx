import { route } from "@/utils/routes";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

export default function Sidebar({ mode, setMode }) {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          mobile: "none",
          tablet: "block",
        },
      }}
    >
      <SidebarList mode={mode} setMode={setMode} />
    </Box>
  );
}

const SidebarList = ({ mode, setMode }) => {
  return (
    <Box position="fixed">
      <List>
        {route.map((element) => {
          const { id, component, icon, path, text } = element;
          return (
            <ListItem disablePadding key={id}>
              <ListItemButton component={component} href={path}>
                <ListItemIcon>{icon}</ListItemIcon>
                {text === "Theme" ? (
                  <Switch
                    onChange={(e) =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
                ) : (
                  <ListItemText primary={text} />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
