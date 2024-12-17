"use client";

import {
  Close as CloseIcon,
  Menu as MenuIcon,
  School,
} from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { baseURL } from "@/constants/baseURL";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "" },
    { text: "Courses", path: "courses" },
    { text: "Blog", path: "blog" },
    { text: "Contact", path: "contact" },
    { text: "Verify Certificate", path: "verify" },
  ];

  const drawerContent = (
    <div className="w-64">
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">Menu</span>
        <IconButton
          onClick={() => {
            setDrawerOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <List
        onClick={() => {
          setDrawerOpen(false);
        }}
        onKeyDown={() => {
          setDrawerOpen(false);
        }}
      >
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              window.location.href = `${baseURL}/${item.path}`;
            }}
            className="transition-colors duration-200 cursor-pointer"
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        <Button
          variant="contained"
          fullWidth
          className="bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700"
          onClick={() => {
            window.location.href = `${baseURL}/sign-in`;
          }}
        >
          Login / Register
        </Button>
      </List>
    </div>
  );

  return (
    <Fade direction="down" triggerOnce>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <School className="text-blue-600" />
          <span className="text-xl font-bold">Clarence Academy</span>
        </div>

        <div className="hidden items-center space-x-6 md:flex">
          {menuItems.map((item) => (
            <div
              key={item.text}
              onClick={() => {
                window.location.href = `${baseURL}/${item.path}`;
              }}
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              {item.text}
            </div>
          ))}
          <Button
            variant="contained"
            className="bg-blue-600 text-white"
            onClick={() => {
              window.location.href = `${baseURL}/sign-in`;
            }}
          >
            Login / Register
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <IconButton
            onClick={() => {
              setDrawerOpen(true);
            }}
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </Fade>
  );
};

export default Header;
