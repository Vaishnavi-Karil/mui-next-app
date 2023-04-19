import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

export const route = [
  {
    id: "home",
    component: "a",
    icon: <Home />,
    path: "#home",
    text: "Homepage",
  },
  {
    id: "pages",
    component: "a",
    icon: <Article />,
    path: "#pages",
    text: "Pages",
  },
  {
    id: "groups",
    component: "a",
    icon: <Group />,
    path: "#pages",
    text: "Groups",
  },
  {
    id: "marketplace",
    component: "a",
    icon: <Storefront />,
    path: "#marketplace",
    text: "Marketplace",
  },
  {
    id: "friends",
    component: "a",
    icon: <Person />,
    path: "#friends",
    text: "Friends",
  },
  {
    id: "settings",
    component: "a",
    icon: <Settings />,
    path: "#settings",
    text: "Settings",
  },
  {
    id: "profile",
    component: "a",
    icon: <AccountBox />,
    path: "#profile",
    text: "Profile",
  },
  {
    id: "theme",
    component: "a",
    icon: <ModeNight />,
    path: "#theme",
    text: "Theme",
  },
];
