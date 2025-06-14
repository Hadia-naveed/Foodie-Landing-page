import React, { useState } from 'react'
import Logo from "../assets/Logo.svg"

import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false)

  const menuoption = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
    { text: "Cart", icon: <ShoppingCartRoundedIcon /> },
  ]

  return (
    <>
      <nav className="flex sticky items-center justify-between px-6 py-4 top-0 left-0 w-full z-50">

        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-medium">
          <li><a href="#home" className="hover:text-amber-600">Home</a></li>
          <li><a href="#about" className="hover:text-amber-600">About</a></li>
          <li><a href="#testimonials" className="hover:text-amber-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
          <li><a href="#" className="hover:text-amber-600 text-xl"><BsCart2 /></a></li>
        </ul>

        {/* Booking Button (Hidden on Small Screens) */}
        <button className="hidden lg:inline-block bg-white text-amber-500 px-4 py-2 rounded-lg hover:bg-amber-800 transition">
          Book Now
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden text-2xl cursor-pointer">
          <HiOutlineBars3 onClick={() => setopenmenu(true)} />
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={openmenu} onClose={() => setopenmenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setopenmenu(false)}
          onKeyDown={() => setopenmenu(false)}
        >
          {menuoption.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Drawer>

    </>
  )
}

export default Navbar
