import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function Post() {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        height="20%"
        component="img"
        image="https://lh3.googleusercontent.com/Qe5l-3WIN1RooQVLWuhNwEPdxI7RQHnv78yd-Lki-YdijwU1qMKpMZu6gj0RBdnWPxOQscTPF1lBkNcpd4nK4z9V_CObTx3gN2SHTUy3BZnRNFDOzO6om2S1RILHGdECP8ysy4gE3GawNVDfdfTJuuBPw4ZFxaOU-QUBNa4ee5zw8dccnm_opiBhBk4YIxXuDXKipt2WDyToPuGaq_zREtiY5JVtYREq4HojXCDBa2JU5PH3yoteZOqTdS5okTn7TWfgGLWnSWeHZ0pTPlMGGYpk6EuoXWVEOj0En7pCxZ7BMqYpzYvfuUqZT9R7YZcvJvczpbVvayVr5krVE6cqfzD3wZ_dfONLdh1LUea-oLs2osLwkK4WgwGY1s-CTGjlGivsDVn-uQbxY1vpKMmeGpn0gljcbkboEDwzrktDwM-EwpgxCcSBSEqz1a_Lgu6AzIHgSx3wGHed8qkSTYxf2nj-Cel0piXv0u5-JGmM9BEIJzl8XlI5DK54jFgbIkHhWI7qCXN94Lhx1BElEeyj2OIZK5y1HnAFU39p0kC54A6jhq5hipR4t9QjOHqCfc7hY2K8WnIyNDK6kf30rOWF-_zJTNqUIcrhNY3v2idAjbJuPluYWQb1I9DL4y9E_nKX16ITawrRRUuARpCZxPXfg3TeByjNTV0lL27nHWSGSHxdfq3jvoyTqCV9v7CgPOU7XlfewnQXNLYN56kMHqgAI-7QPHvpn-yjEMeaTKb8N0gbP6ivjut71DeM3cZ_l_TK1k0IQ1KH5dzqwd7GZ-DHGWz0g9vQFrkNnfXOTaQ4fxxfy27366TcxlsQm7eS98sevpkhsRXQME7TXN3KiRD4EkvgDTE9cy7PvHhSBwqMzZmYVx7yZd-O-yUIkBBowAzTMsmG2cuoakEv3S_Eh0Pxvn4YKl0-XMwZeE0YaYREw4b8BdcA=w399-h415-s-no?authuser=0"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <Favorite /> */}
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
