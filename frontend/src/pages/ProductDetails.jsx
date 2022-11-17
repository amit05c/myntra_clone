import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getData } from "../Redux/ProductsReducer/action";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { getCartData } from "../Redux/CartReducer/action";
import axios from "axios";
import { SingleProd } from "../Redux/AuthReducer/action";

// import Aos from 'aos'
// import "aos/dist/aos.css"
// import { Alert } from "../components/Shop/Alert";

const breakpoints = {
  sm: "column",
  md:"column",
  lg: "row"

}

const breakpoints_width={
  sm: "50%",
  lg: "100%"
}


const text_width={
  sm: "10%",
  lg: "8%"
}

const innerDivMargin={
  sm:"auto",
  md:"auto",
  lg:"0"
}

const ProductDetails = () => {
  const { id } = useParams();
  const navigate= useNavigate()
  const  {data}  = useSelector((state) => state.AppReducer);
//   const {cartData} = useSelector((state)=>state.CartReducer)
  // console.log(cartData)
  const dispatch = useDispatch();
  const [selectSize,setSize]= useState('')
  const [qty,setQty]= useState(1)
  
  const token=JSON.parse(localStorage.getItem("token"))
  const singleProd = data.filter((el) => el._id === id);
//   const sizes = singleProd?.size?.split(" ").map(Number);
//   console.log(sizes);
  console.log(singleProd);
  
    

  useEffect(() => {
//     dispatch(getData())
//    dispatch(getCartData())
    //  SingleProd(id)
    //  .then(res=>console.log(res.data))
  }, []);
  // console.log(cartData.length+1)
  const addToCart=async ()=>{
    
    const newData={
      // id:cartData.length+1,
      // productId:singleProd[0]._id,
      // title:singleProd[0].title,
      // price:singleProd[0].price,
       size:selectSize,
       qty,
      // category:singleProd[0].category,
      // image: singleProd[0].image_url
    }
     
    // console.log(newData)
    
    if(selectSize!=="" && token){
      await axios.post(`https://odd-jade-fawn-toga.cyclic.app/cart/add/${id}`,newData,{
        headers:{authorization: `bear ${token}`},  //authorization
      },)
    //   .then(()=>dispatch(getCartData()))
      .then(()=>navigate(`/cart`))

      setQty(1)
      setSize('')
    }else if(selectSize==""){
      alert(`Select the size`)
    }else{
        alert(`Please login first`)
    }
  
  }


  const handleBuy=async()=>{
    const newData={
      // id:cartData.length+1,
      id:Date.now(),
      title:singleProd[0].title,
      price:singleProd[0].Price,
      size:selectSize,
      quantity:qty,
      image: singleProd[0].images
    }
     
    // console.log(newData)
    
    if(selectSize!==""){
      await axios.post(`https://62ed747cc1ef25f3da7a4746.mockapi.io/userdata`,newData)
    //   .then(()=>dispatch(getCartData()))
    //   .then(()=>navigate(`/checkout`))

      setQty(1)
      setSize('')
    }else{
      alert(`Select the size`)
    }
  }



  useEffect(()=>{
    
    // Aos.init({duration:1000})
    
  },[])

  return (
    <Flex    justifyContent="space-evenly"     // border={"1px solid red"}
     margin={"2rem 0 5rem 0"}
     direction={breakpoints}
     gap="1rem"
     height={"110vh"}
    >
      <Flex width={"40%"} margin={innerDivMargin}  border={"2px solid black"}
      borderRadius="2%"
      direction="column"
      padding={"1rem"}
      gap="1rem"
      
       > 
       <Box data-aos='fade-up' bg={"black"} color="white" width={text_width} position={"relative"} top="1rem" left="1rem"><Text>Sale</Text></Box>         
        <Image  src={singleProd[0]?.image_url[0]}   
        margin="auto" width="60%"
        cursor={"pointer"}
        height="80%"
        />

        <Box display={"flex"}>
           
        <Image  src={singleProd[0]?.image_url[1]}   //border="1px solid red"
        margin="auto" width="15%"
        />

        <Image  src={singleProd[0]?.image_url[0]}   //border="1px solid red"
        margin="auto" width="15%"
        />

        <Image  src={singleProd[0]?.image_url[1]}   //border="1px solid red"
        margin="auto" width="15%"
        />
          
        </Box>
        
      </Flex>

  



      <Flex
         border={"2px solid black"}
         borderRadius="2%"
        direction="column"
        justifyContent="space-evenly"
       margin={innerDivMargin}
        
        width="40%"
        
      >
        <Stack>
          <Box 
        //  border={"1px solid red"}
          width="50%"
           margin={"auto"}>
        <Text as={"b"} fontFamily="sans-serif" fontStyle={"revert-layer"} fontSize="1.5rem">{`Title: ${singleProd[0]?.title}`}</Text>

          </Box>
          <Box>
          <Text as={"b"}>{`Brand: ${singleProd[0]?.brand}`}</Text>
          </Box>
        
        <Box>
        <Text as={"b"} color="red">{`Price: ${singleProd[0]?.price}`}</Text>
        </Box>
        
        <Box>✓Available Size : {singleProd[0]?.size?.map((el,i)=>el+" ")}</Box>

        </Stack>
        
        <Stack width="50%" ml="1rem"  
          // border="1px solid red"
        position={"relative"} left="9rem"
        >
          <Select color="gray" placeholder="Select size"  onChange={(e)=>setSize(e.target.value)}>
            {singleProd[0]?.size?.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Select>
        </Stack>

        <Flex         // border="1px solid red"
       
         justifyContent={"space-around"}>
       <Box display={"flex"}
        gap="0.5rem"
        border="2px solid black"
        borderRadius={"3%"}
        ml="1rem"
        padding="0.5rem"
       >
        <Button borderRadius="50%" bg={"#7d7d7d"} disabled={qty==1} onClick={()=>setQty(qty-1)}>-</Button>
        <Flex>{qty}</Flex>
        <Button bg={"#7d7d7d"}  borderRadius="50%" disabled={qty==10} onClick={()=>setQty(qty+1)} >+</Button>
       </Box>

        <Box>
        <Button bg="#1f1f1f" _hover={"none"} color="white" mt={"1rem"} onClick={addToCart}>Add to cart</Button>
        </Box>

        <Button bg="#1f1f1f" _hover={"none"} color="white" mt="1rem" onClick={handleBuy}>Buy</Button>
          
        </Flex>
      </Flex>


    </Flex>
  );
};

export default ProductDetails;
