import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Button,
    Divider,
    Text,
    
  } from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

const Mobileview = () => {
    const navigate= useNavigate()
    let token= JSON.parse(localStorage.getItem("token"))
  return (
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    position={"absolute"}
    zIndex={"2"}
    right={"10px"}
    top={'1rem'}
    bg="blue.500"
    overflow= "hidden"
  />
  <MenuList h={"100vh"}>
   
    <MenuItem >
    {/* icon={<ExternalLinkIcon />} */}
    {token ? <Button onClick={()=>{localStorage.removeItem("token");navigate("/login")}}>Logout</Button> : <Text onClick={()=>navigate("/login")}>Login</Text> }  
    </MenuItem>
    <Divider orientation="horizontal" />
    <MenuItem icon={<RepeatIcon />}>
      <Text onClick={()=>navigate("/men")}>Men</Text>
    </MenuItem>
    <MenuItem icon={<EditIcon />}>
    <Text onClick={()=>navigate("/women")}>Men</Text>
    </MenuItem>
    <MenuItem icon={<AddIcon onClick={()=>{token ? navigate("/cart") : navigate("/login")}} cursor={"pointer"} />}>
    Bag
    </MenuItem>
  </MenuList>
</Menu>
  )
}

export default Mobileview