import { Box, BreadcrumbLink, Divider, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, Breadcrumb, BreadcrumbItem, Button, useToast, Flex, Text, RadioGroup, Radio, Image, Alert, AlertIcon, AlertTitle, AlertDescription  } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const toast = useToast()
    const navigate= useNavigate()
    const [Payemnt_method,setMethod]=useState(false)

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // console.log(windowDimensions)
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
    
    const [data,setData]= useState({
        name:"",
        state:"",
        pin:"",
        landmark:""

    })
    const handleCheckout= (e)=>{
        let {name,value}= e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const handlePayment= ()=>{
        // console.log(data)
        if(data.name==''){
          toast({
            position: 'top-center',
            description: "Enter name",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }else if(data.state==""){
          toast({
            position: 'top-center',
            description: "Enter state",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }else if(data.pin==""){
          toast({
            position: 'top-center',
            description: "Enter Pin",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }else if(data.pin.length != 6){
          toast({
            position: 'top-center',
            description: "Pin must be six digits",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }else if(data.landmark==""){
          toast({
            position: 'top-center',
            description: "Enter Lankmark",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }else if(Payemnt_method==false){
          toast({
            position: 'top-center',
            description: "Select paymentmethod",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
        
        else{
      
          let token= JSON.parse(localStorage.getItem("token"))
          axios.delete("https://odd-jade-fawn-toga.cyclic.app/cart/checkout",{
            headers:{authorization: `bear ${token}`},  
          }).then(res=>{if(res.data="Item deleted"){
                 
            toast({
              size:"500",
              position: 'top-center',
              title: "Order Placed.",
              description: "Thank you for shopping with us.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });  navigate("/")

          }})
          .catch((err)=> toast({
            position: 'top-center',
            description: "Enter Lankmark",
            status: err.message,
            duration: 2000,
            isClosable: true,
          }))


         
        }
    }
// useEffect(()=>{

// },[Payemnt_method])

const handleRadio= (e)=>{
setMethod(true)
}

  return (
    <Flex justifyContent={"space-around"} mt={windowDimensions.width>920 && "8rem"}>
        <Box w={['80%','70%','50%']}  padding={['0.5rem','1rem','2rem']}
      shadow={"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}>
        <Stack spacing={4}>
          <Box background="none" color="none">
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Full name</FormLabel>
              <Input
                focusBorderColor="#353535"
                errorBorderColor="red.300"
                type="text"
                size="lg"
                borderRadius="0px"
                name="name"
                // value={data.name}
                onChange={handleCheckout}
              />
            </FormControl>
          </Box>
          <Box >
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">State</FormLabel>
              <Input
                focusBorderColor="black"
                errorBorderColor="red.300"
                type="text"
                name={"state"}
                onChange={handleCheckout}
                size="lg"
                borderRadius="0px"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Pin</FormLabel>
              <Input
                focusBorderColor="black"
                errorBorderColor="red.300"
                type="number"
                name="pin"
                onChange={handleCheckout}
                size="lg"
                borderRadius="0px"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">Landmark</FormLabel>
              <InputGroup>
              <Input
                // type={showPassword ? "text" : "password"}
                // value={data.password}
                
                name="landmark"
                onChange={handleCheckout}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  
                >
                  {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                </Button>
              </InputRightElement>
            </InputGroup>
            </FormControl>
          </Box>
        </Stack>
        </Box>

        <Box w={['20%','30%','40%']}>
            <Text color="red.400">Select payment method</Text>
            <RadioGroup 
            // onChange={setValue} value={value}
            >
                  <Stack direction="column" textAlign={"start"}>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Cash on delivery" onChange={handleRadio}>Cash on delivery</Radio>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="pay with paytm" onChange={handleRadio}>
                        pay with paytm
                        <Image
                          src="https://www.uboric.com/wp-content/plugins/woo-paytm-payment-gateway/images/logo.gif"
                          width={"5rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Razorpay" onChange={handleRadio}>
                        Razorpay
                        <Image
                          src="https://cdn.razorpay.com/static/assets/logo/payment.svg"
                          width={"9rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="Simpl" onChange={handleRadio}>
                        Simpl
                        <Image
                          src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg"
                          width={"5rem"}
                          display="inline"
                          ml={"1rem"}
                        />
                      </Radio>
                    </Flex>
                  </Stack>
                </RadioGroup>

                <Box m={"1.5rem 0"}>
                
                <Button
                bgColor="black"
                color={"white"}
                size="lg"
                width={"100%"}
                borderRadius={"none"}
              
                  onClick={handlePayment}>
                  Place Order
                </Button>
              </Box>
        </Box>
    </Flex>
  )
}

export default Checkout