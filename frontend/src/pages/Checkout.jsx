import { Box, BreadcrumbLink, Divider, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, Breadcrumb, BreadcrumbItem, Button, useToast, Flex, Text, RadioGroup, Radio, Image  } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const toast = useToast()
    const navigate= useNavigate()
  return (
    <Flex justifyContent={"space-around"} mt={"7rem"}>
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
                // onChange={handleSignup}
              />
            </FormControl>
          </Box>
          <Box >
            <FormControl isRequired>
              <FormLabel fontWeight="hairline">State</FormLabel>
              <Input
                focusBorderColor="black"
                errorBorderColor="red.300"
                type="email"
                // value={data.email}
                name={"email"}
                // onChange={handleLogin}
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
                // value={state.mobile}
                // onChange={(e) =>
                //   setter({ type: "phone", payload: e.target.value })
                // }
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
                
                name="password"
                // onChange={handleLogin}
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
        </Box>

        <Box w={['20%','30%','40%']}>
            <Text>Select payment method</Text>
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
                      <Radio value="Cash on delivery">Cash on delivery</Radio>
                    </Flex>

                    <Flex
                      alignItems={"center"}
                      border={"1px solid"}
                      borderColor="gray.300"
                      padding="0 1rem"
                      height={"4rem"}
                    >
                      <Radio value="pay with paytm">
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
                      <Radio value="Razorpay">
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
                      <Radio value="Simpl">
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
                _hover="none"
                  onClick={() =>{
                    toast({
                      size:"500",
                      position: 'top-center',
                      title: "Order Placed.",
                      description: "Thank you for shopping with us.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });navigate("/")}
                  }
                >
                  Place Order
                </Button>
              </Box>
        </Box>
    </Flex>
  )
}

export default Checkout