import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Flex,Grid,GridItem,Image, Text } from '@chakra-ui/react';
import banner1 from "../images/banner1.webp"
import banner2 from "../images/banner2.webp"
import banner3 from "../images/banner3.jpg"
import banner4 from "../images/banner4.jpg"
import banner5 from "../images/banner5.jpg"
import banner6 from "../images/banner6.webp"
import c1 from "../images/c1.webp"
import c2 from "../images/c2.webp"
import c3 from "../images/c3.webp"
import c4 from "../images/c4.webp"
import c5 from "../images/c5.webp"
import c6 from "../images/c6.webp"
import c7 from "../images/c7.webp"
import c8 from "../images/c8.webp"
import c9 from "../images/c9.webp"
import c10 from "../images/c10.webp"
import c11 from "../images/c11.webp"
import c12 from "../images/c12.webp"
import c13 from "../images/c13.webp"
import c14 from "../images/c14.webp"
import c15 from "../images/c15.webp"
import c16 from "../images/c16.webp"
import c17 from "../images/c17.webp"
import c18 from "../images/c18.webp"
import c19 from "../images/c19.webp"
import c20 from "../images/c20.webp"
import c21 from "../images/c21.webp"
import c22 from "../images/c22.webp"
import c23 from "../images/c23.webp"
import c24 from "../images/c24.webp"



const Home = () => {

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




  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Box  zIndex={"1"} mt={windowDimensions.width>920 && "8rem"}>

     <Box w={"95%"} m={"auto"} mt={"1rem"}>
     <Slider {...settings}>
      <div>
      <img src={banner1} alt="" />
      </div>
      <div>
      <img src={banner2} alt="" />
      </div>
      <div>
      <img src={banner3} alt="" />
      </div>
      <div>
      <img src={banner4} alt="" />
      </div>
      <div>
      <img src={banner5} alt="" />
      </div>
      <div>
      <img src={banner6} alt="" />
      </div>
    </Slider>
     </Box>

     {/*  shopby category */}

     <Box mt={"3rem"}>
      <Text as="b" color={"teal"} fontSize={['lg','xl','3xl']}> SHOP BY CATEGORY</Text>
      <Grid  templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']} gap={['0.5rem','1rem','2rem']}>
      <GridItem>
      <Image src={c1} alt=""  />
     </GridItem>

     <GridItem>
      <img src={c2} alt="" />
     </GridItem>

     <GridItem>
      <img src={c3} alt="" />
     </GridItem>

     <GridItem>
      <img src={c4} alt="" />
     </GridItem>

     <GridItem>
      <img src={c5} alt="" />
     </GridItem>

     <GridItem>
      <img src={c6} alt="" />
     </GridItem>

     <GridItem>
      <img src={c7} alt="" />
     </GridItem>

     <GridItem>
      <img src={c8} alt="" />
     </GridItem>

     <GridItem>
      <img src={c9} alt="" />
     </GridItem>

     <GridItem>
      <img src={c10} alt="" />
     </GridItem>

     <GridItem>
      <img src={c11} alt="" />
     </GridItem>

     <GridItem>
      <img src={c12} alt="" />
     </GridItem>

     <GridItem>
      <img src={c13} alt="" />
     </GridItem>

     <GridItem>
      <img src={c14} alt="" />
     </GridItem>

     <GridItem>
      <img src={c15} alt="" />
     </GridItem>

     <GridItem>
      <img src={c16} alt="" />
     </GridItem>


     <GridItem>
      <img src={c17} alt="" />
     </GridItem>


     <GridItem>
      <img src={c18} alt="" />
     </GridItem>

     <GridItem>
      <img src={c19} alt="" />
     </GridItem>


     <GridItem>
      <img src={c20} alt="" />
     </GridItem>

     <GridItem>
      <img src={c21} alt="" />
     </GridItem>

     <GridItem>
      <img src={c22} alt="" />
     </GridItem>

     <GridItem>
      <img src={c23} alt="" />
     </GridItem>

     <GridItem>
      <img src={c24} alt="" />
     </GridItem>

      </Grid>
     </Box>

    </Box>
   


  )
}

export default Home