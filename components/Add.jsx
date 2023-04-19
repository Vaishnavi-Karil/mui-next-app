import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import {
  DateRange,
  EmojiEmotions,
  Image as MuiImg,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
}));
export default function Add() {
  const [open, setopen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { mobile: "calc(45%)", tablet: 30 },
        }}
        onClick={(e) => setopen(true)}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzK_PsmrzIYiooqligLeL0GYQe7otAaorPg&usqp=CAU"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's in your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions />
            <MuiImg color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
