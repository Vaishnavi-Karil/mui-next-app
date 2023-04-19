import "@/styles/globals.css";
import { useTheme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const { mode, setMode, theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}
