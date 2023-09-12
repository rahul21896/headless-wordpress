import React from 'react';
import {styled} from "frontity";

/* Common Container */
const RContainer = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding:15px;
   
`;

/* Header */
const RHeader = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
`;

/* Logo Style */
const RLogo = styled.div`
    
    img{
        width:200px;
    }
`;


/* Main  Menu */
const RMenu = styled.div`
   ul{
    display:flex;
    justify-content:flex-end;
   }
   ul li{
    margin: 0 10px;
    list-style:none;
    padding:10px;
   }
   
   ul li:hover{
    background-color:yellow;
    color:black;
   }
   
`;

export {
    RContainer,
    RMenu,
    RLogo,
    RHeader
}