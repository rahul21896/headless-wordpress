import React from 'react';
import {connect,styled,css} from "frontity";
import image from "@frontity/html2react/processors/image";
import Link from "../Link";



const FlexibleDemoContent = ({data,libraries}) => {
    const section_title = data.section_title;
    const section_content = data.section_content;
    const section_image = data.section_image?.url;
    const Html2React = libraries.html2react.Component;

    return(
        <>
            <DemoContent>
               <div>
                   <h2>{section_title}</h2>
                   <Html2React html={section_content} />
                   <img src={section_image} alt={section_title} />
                   <Link href="/sample-page">Test</Link>
               </div>
            </DemoContent>
        </>
    );
};

export default connect(FlexibleDemoContent);

const DemoContent = styled.div`
        max-width:1140px;
        display:flex;
        justify-content:center;
        align-item:center;
        padding:20px;
        background-color:accentblue;
        border: 2px solid #0000cc;
       h2{
       font-size:30px;
       color:blue;
       text-align:center;
       }
        div{
           width:70%;
        }
        img{
          width: 300px;
        } 
        
      p{
      color:red;font-size:20px;text-align:center;}
    `;
