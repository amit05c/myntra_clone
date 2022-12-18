import { Box, Checkbox, Flex, Radio, RadioGroup, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../Redux/AppReducer/action';


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data } = useSelector((store) => store.AppReducer);
    const [filter,setFilter]= useState([])
    const [item,setItem]= useState([])
    const [price,setPrice]= useState([])
    const dispatch = useDispatch();
    useEffect(() => {
      // dispatch(getData());
        setSearchParams({  
          item: item,
          price: price
        })
    }, [item.length,price]);
    // console.log(data);
    for(let i=0; i<data.length; i++){
      if(!filter.includes(data[i].item)){
        setFilter(
         [ ...filter,
          data[i].item]
        )
      }
    }
  
    const handleChange= (e)=>{
      let newItem= e.target.value
      if(item.includes(newItem)){
     let updatedItem= item.filter(el=>el!=newItem)
     setItem(updatedItem)
      }else{
        setItem([...item,newItem])
      }
    }

    const handlePrice= (e)=>{
          let x=e.target.value.split(" ").map(Number)
          setPrice(x)
    }
  return (
    <Box h={"100%"}  mt={['1rem','2rem','2rem']} >
    <Text as="b" color={"gray"}>Categories</Text>
     <Flex  direction="column" p={['0.5rem','1rem','1.5rem']} > 
     
     
      {filter?.map((el,i)=>(
         
         
          <Checkbox ml="1rem" key={i} size="md" colorScheme="green" value={el} onChange={handleChange} >
          {el}
           </Checkbox>
          

      ))}
    </Flex>
    
    <Flex  direction="column" p={"1rem"} mt="1rem">
    {/* border={"1px solid red"} */}
        <Text as="b" color={"gray"}>Filter by price</Text>

<RadioGroup defaultValue='1'>
  <VStack>
    <Radio value='100 500' onChange={handlePrice} >
      100-500
    </Radio>
    <Radio value='501 1000' onChange={handlePrice}>501-1000</Radio>
    <Radio value='1001 1500' onChange={handlePrice}>1001-1500</Radio>
  </VStack>
</RadioGroup>


    </Flex>
      
  </Box>
  )
}

export default Filter