import { Box, BreadcrumbLink, Divider, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, Breadcrumb, BreadcrumbItem, Button, useToast  } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch,useSelector } from 'react-redux';
import { login} from '../Redux/AuthReducer/action';
import { LOGIN_SUCCESS } from '../Redux/AuthReducer/action.type';
import { useNavigate } from 'react-router-dom';
const initialState = {
  name: "",
  email: "",
  password: ""
};
const Login = () => {
  const [data,setData]= useState(initialState)
  const state= useSelector((state)=>state.AuthReducer)
  const toast = useToast()
  const dispatch= useDispatch()
  const navigate= useNavigate()
  // console.log(state)
  const handleLogin= (e)=>{
    const {name,value}= e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const loginHandler= ()=>{
    // console.log(data)
    dispatch(login(data))
    .then(res=>{
      // console.log(res)
      if(res.type==LOGIN_SUCCESS){
        console.log(res.type)
        toast({
          title: 'Success',
          description: "Login Success",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        navigate("/")
      }else{
        toast({
          description: "Please enter correct credentials",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    })
  }
  return (
    <Box  bg="#ffffff" 
    // w={['60%','40%','30%']}
    mt="7rem"
    >
      {/* box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */}
    <Divider orientation="horizontal" />
    <Box
      // width="1150px"
      position="center"
      margin="auto"
      padding="20px 0px 80px 0px"
    
    >
      <Box width="20%" textAlign="left">
        <Breadcrumb fontWeight="light" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/signup">Sign-Up</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box width="100%" padding="20px 0px 20px">
        <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
          LOGIN
        </Heading>
      </Box>
      {/* <Divider orientation="horizontal" /> */}
      <Box w={['60%','50%','30%']} margin="0 auto" padding={['0.5rem','1rem','2rem']}
      shadow={"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}
      >
        <Stack spacing={4}>
          {/* <Box background="none" color="none">
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Full name</FormLabel>
              <Input
                focusBorderColor="#353535"
                errorBorderColor="red.300"
                type="text"
                size="lg"
                borderRadius="0px"
                name="name"
                value={data.name}
                onChange={handleSignup}
              />
            </FormControl>
          </Box> */}
          <Box >
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Email address</FormLabel>
              <Input
                focusBorderColor="black"
                errorBorderColor="red.300"
                type="email"
                value={data.email}
                name={"email"}
                onChange={handleLogin}
                size="lg"
                borderRadius="0px"
              />
            </FormControl>
          </Box>
          {/* <Box>
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Phone</FormLabel>
              <Input
                focusBorderColor="black"
                errorBorderColor="red.300"
                type="number"
                // value={state.mobile}
                // onChange={(e) =>
                //   setter({ type: "phone", payload: e.target.value })
                // }
                size="lg"
                borderRadius="0px"
              />
            </FormControl>
          </Box> */}
          <Box>
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Password</FormLabel>
              <InputGroup>
              <Input
                // type={showPassword ? "text" : "password"}
                value={data.password}
                
                name="password"
                onChange={handleLogin}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  // onClick={() =>
                  //   setShowPassword((showPassword) => !showPassword)
                  // }
                >
                  {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                </Button>
              </InputRightElement>
            </InputGroup>
            </FormControl>
          </Box>
        </Stack>
        <Box paddingTop="26px">
          Already a user?{" "}
          <Link color="teal.500" href="/signup">
            Sign Up
          </Link>
        </Box>
        <Button
          borderRadius="0px"
          width="180px"
          color="white"
          onClick={loginHandler}
          background="#302C26"
          padding="20px"
          marginTop="20px"
          _hover={{
            color: "#302C26",
            background: "#ffffff",
            border: "1px solid black",
          }}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  </Box>
  )
}

export default Login