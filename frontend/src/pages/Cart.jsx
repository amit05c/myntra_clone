import { Box, Flex,Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [data,setData]= useState([])
  const [total,setTotal]= useState(0)

  const token=JSON.parse(localStorage.getItem("token"))
  const getData= ()=>{
    axios.get(`https://odd-jade-fawn-toga.cyclic.app/cart/cartData`,{
      headers:{authorization: `bear ${token}`},  //authorization
    })
    .then(res=>{setData(res.data.data,setTotal(res.data.total))})
  }
  console.log(data)
  useEffect(()=>{
    getData()
  },[])
  return (
    <Box m={"1rem"}>
     {data?.map(el=>(
      <Box key={el._id}>
        <Flex justifyContent={"space-between"}>
          <Image src={el.image_url[0]} w={['50px', '80px', '100px' ]}/>
          <Box>{`Rate: ${el.rate}`}</Box>
          <Box>{`Qty: ${el.qty}`}</Box>
          <Box>{`Price: ${el.price}`}</Box>
          </Flex>
          </Box>
          ))}
          <Box>{`Total: ${total}`}</Box>
    </Box>
  )
}

export default Cart