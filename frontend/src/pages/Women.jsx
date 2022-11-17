import { Box, Checkbox, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";

const Women = () => {
  const { data } = useSelector((store) => store.AppReducer);
  const [searchParams]= useSearchParams()
  const location= useLocation()



  const dispatch = useDispatch();
  let item= searchParams.getAll("item")
  let price= searchParams.getAll("price")
  console.log(price)
  useEffect(() => {
   
    if(item.length>0 || price.length>0){
      const queryParams={
        params:{
           category:['women'],
           item:item,
           price:price
        }
      }
      dispatch(getData(queryParams))
    }else{
      const queryParams={
        params:{
           category:['women'],
          
        }
      }
      dispatch(getData(queryParams));
    }
      
  }, [item.length,price.length,location]);
  console.log(data);
  

  
  
  return (
    <Flex height="80vh">
      <Filter/>

      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={['0.5rem','1rem','1rem']} m="2rem 2rem">
        {data?.map(el=>(
        
          <GridItem key={el._id}>
            <Image src={el.image_url} w="80%"/>
            <Text>{el.item}</Text>
            <Text>{el.brand}</Text>
            <Text>{el.brand}</Text>
            <Text>{el.title}</Text>
            <Text>{el.price}</Text>
            <Link to={`/product/${el._id}`}>View Details</Link>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Women;
