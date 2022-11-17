import { Box, Flex, Input, Text,Image } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GiEternalLove } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import { NavLink, useSearchParams,useNavigate } from "react-router-dom";
// import { Image } from "react-bootstrap";
import { IconContext } from "react-icons";
import styles from "./Navbar.model.css"
import { useState } from "react";


const Navbar = () => {
const [searchParams,setSearchParams]= useSearchParams()
const [category,setCategory]= useState([])
const navigate= useNavigate()
  const handleParams= (value)=>{
    //  setCategory()
    
    // setSearchParams({
    //   category:+value
    // })
    navigate(`/${value}`)
  }
  return (
    <Flex
      w="100%"
      bg={"white"}
      border="1px solid red"
      p="0.5rem"
      justify={"space-between"}
      boxSizing={"border-box"}
    >
      <Flex border="1px solid black" p={"0.5rem"} justifyContent={"space-between"} align="center" gap="0.5rem" w="40%">
        <NavLink to="/">
          <Box><Image src="https://www.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" boxSize={"2rem"}/></Box>
          </NavLink>
        <Text as="b" fontSize={['sm','md','lg','xl']} cursor={"pointer"} onClick={()=>handleParams("men")}>Men</Text>
        <Text  as="b" fontSize={['sm','md','lg','xl']} cursor={"pointer"} onClick={()=>handleParams("women")}>Women</Text>
        <Text  as="b" fontSize={['sm','md','lg','xl']} cursor={"pointer"} onClick={()=>handleParams("kids")}>Kid</Text>
        
      </Flex>

      <Flex m="1rem" boxSizing="border-box"  w={"30%"} border="1px solid black" mr="5rem" alignItems={"center"} justify="space-around" p={"1rem"}>
        <Input placeholder="Basic usage" w={"50%"} />
        <Box>

        {/* <CgProfile className={styles.logo} /> */}
        <IconContext.Provider value={{ size:'2em' }}>
  <div>
    <CgProfile />
  </div>
</IconContext.Provider>
        <Text>Profile</Text>
        </Box>

        <Box>
        {/* <GiEternalLove className={styles.logo}  /> */}

        <IconContext.Provider value={{ size:'2em' }}>
  <div>
    <GiEternalLove />
  </div>
</IconContext.Provider>
        <Text>Wishlist</Text>
        </Box>

        <Box>
        {/* <BsBagCheck className={styles.logo} /> */}
        <IconContext.Provider value={{ size:'2em' }}>
  <div>
    <BsBagCheck />
  </div>
</IconContext.Provider>
      <Text>Bag</Text>
        </Box>


      </Flex>
    </Flex>
  );
};

export default Navbar;
