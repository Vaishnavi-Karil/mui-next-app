import Add from "@/components/Add";
import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";
import Sidebar from "@/components/Sidebar";
import { Box, Stack } from "@mui/material";
import React from "react";

export default function Home({ mode, setMode }) {
  return (
    <>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </>
  );
}
