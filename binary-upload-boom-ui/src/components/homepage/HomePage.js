import React, { useState, useReducer } from 'react';
import {pageTitle, subTitle, slogan} from '../../constants/constants.js';
import Typograhy from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const HomePage = () => {
  const firstReducer = (state, action) =>{
    switch(action.type){
      case subTitle:{return {
        subTitle: "Lmaooo"

      }}
      case "slogan":{return{
        ...state,
        slogan: "Not Funny"
    
      }}
    }
  } 
  const [title, setTitle] = useState(pageTitle);
  const [state, dispatch] = useReducer(firstReducer,{subTitle, slogan})
  return (<Box sx={{width:"100%" , height:"100%"}}>
    <Typograhy variant ='h1' textAlign='center' getterBottom>{title}</Typograhy>
    <Typograhy>{state?.subTitle}</Typograhy>
    <Typograhy>{state?.slogan}</Typograhy>
    </Box>)
};