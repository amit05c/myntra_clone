import { Box, Button, color, Flex,Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [data,setData]= useState([])
  const [total,setTotal]= useState(0)
  const navigate= useNavigate()

  const token=JSON.parse(localStorage.getItem("token"))
  // console.log(token)
  const getData= ()=>{
    axios.get(`https://odd-jade-fawn-toga.cyclic.app/cart/cartData`,{
      headers:{authorization: `bear ${token}`},  //authorization
    })
    .then(res=>{setData(res.data.data,setTotal(res.data.total))})
  }
  // console.log(data)

  const handleDelete= (id)=>{
    console.log(id)
     axios.delete(`https://odd-jade-fawn-toga.cyclic.app/cart/delete/${id}`,{
      headers:{authorization: `bear ${token}`},  //authorization
     })
     .then(res=>console.log(res.data))
     .then(()=>getData())
     .catch(err=>console.log(err))
  }

  const handlePay= ()=>{
    navigate("/checkout")
  }

  useEffect(()=>{
    getData()
  },[])

  
  return (
    <Box mt="7rem">
     {data?.map(el=>(
      <Box key={el._id}>
        <Flex justifyContent={"space-around"} mt="1rem" shadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} alignItems="center">
          <Image src={el.image_url[0]} w={['50px', '80px', '100px' ]}/>
          <Box color={"gray"}>{`Rate: ${el.rate}`}</Box>
          <Box color={"gray"}>{`Qty: ${el.qty}`}</Box>
          <Box color={"red.300"}>{`Price: ${el.price}`}</Box>
          <Button bg={"red.500"} color={"white"} onClick={()=>handleDelete(el._id)}>Remove Item</Button>
          </Flex>
          </Box>
          ))}
          <Box ><Text as="b" color={"red.900"}>{`Total: ${total}`}</Text></Box>
          <Button bg={"black"} color={"white"} onClick={handlePay}>Pay now</Button>
    </Box>
  )
}

export default Cart