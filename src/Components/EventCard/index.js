import { useState } from "react";
import React, {useEffect} from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";


function EventCard({event}) {
 

  
  
  const date=  new Date(event.time).toString().slice(0,15);
  const time = new Date(event.time).toString().slice(16,21);
  

  
  

  //nominatim added by JJ for trial to see if maps work  ////////////
  let lng= event.longitude;
  let lat= event.latitude;

  const[address,setAddress]=useState([]);
  useEffect(()=> {
    async function getStreet(){
      let url= `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    let response =  await fetch(url);
    let data = await response.json();
      console.log(data);
      let city= data.address.city;
        let road=data.address.road;
      let postcode= data.address.postcode;
      console.log(city,road,postcode);
    setAddress([road,city, postcode]);
  
    }
    getStreet();
  } ,[]);

////////////////////////// see above ///////////////////////////////////


  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {event.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <WrapItem>Date: {date}</WrapItem>
            <WrapItem>Time: {time}</WrapItem>
            <WrapItem>Location: {address[0]}, {address[1]}, {address[2]}</WrapItem>  
            <WrapItem>Description: {event.description}</WrapItem>
            <WrapItem>Exercise Type: {event.exerciseType}</WrapItem>
            <WrapItem>Intensity: {event.intensity}</WrapItem>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export default EventCard;

