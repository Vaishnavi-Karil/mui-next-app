import { createTheme } from "@mui/material";
import { useState } from "react";
export const useTheme = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#1760a9",
        light: "skyblue",
      },
      secondary: {
        main: "#15c630",
      },
      otherColor: {
        main: "#999",
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 900,
    //     lg: 1200,
    //     xl: 1536,
    //   },
    // },
  });

  return { mode, setMode, theme };
};
