import { Box, Checkbox, Flex, Grid, GridItem, Image, Text,Button, Spinner  } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import { FilterSlider } from "../components/FilterSlider";
const Men = () => {
  const { data,isLoading } = useSelector((store) => store.AppReducer);
  const [searchParams]= useSearchParams()
  const filter =["Shirt","T-Shirt"]
const location= useLocation()

  const dispatch = useDispatch();
  let item= searchParams.getAll("item")
  let price= searchParams.getAll("price")
  const [loading,setLoading]= useState(false)
  // console.log(price)


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
  useEffect(() => {
     setLoading(true)
    if(item.length>0 || price.length>0){
      const queryParams={
        params:{
           category:['men'],
           item:item,
           price:price
        }
      }
      dispatch(getData(queryParams))
      //.then(()=>setLoading(false))
    }else{
      const queryParams={
        params:{
           category:['men'],
          
        }
      }
      dispatch(getData(queryParams))
      //.then(()=>setLoading(false))
    }
      
  }, [item.length,price.length,location.search]);



  

  
  
  return (
    <Flex mt={windowDimensions.width>920 && "8rem"} justifyContent="space-between">
      {/* <Filter/> */}
      {data.length>0 ? <> <Filter filter={filter}/>
{/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}
<Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={['3rem','3rem','5rem']} m="2rem 2rem"
w="80%" >
  {data?.map(el=>(
  
    <GridItem key={el._id} shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
    p={['0.25rem','0.5rem','1rem']}>
      <Image src={el.image_url[0]} w={['40%','50%','60%']} m="auto"/>
      <Text as={"b"}>{el.item}</Text>
    {el.brand && <Text color={"gray"}>{`Brand: ${el.brand}`}</Text>}  
      {/* <Text>{el.title}</Text> */}
      <Text color={"red.400"}>{`Price ${el.price}`}</Text>
      <Link to={`/product/${el._id}`}><Button bg={"blue.600"} color={'white'}>Show more</Button></Link>
    </GridItem>
  ))}
</Grid> </> : <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  m="auto"
/> }
      
    </Flex>
  );
};

export default Men;
