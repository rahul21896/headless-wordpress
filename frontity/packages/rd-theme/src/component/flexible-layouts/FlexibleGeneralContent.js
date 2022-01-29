import React from 'react';
import {connect,styled} from "frontity";

const FlexibleGeneralContent = ({data}) => {
    const section_title = data.section_title;
    const section_content = data.section_content;
    return(
        <>
            <GeneralContent>
               <div>
                   <h2>{section_title}</h2>
                   <Content dangerouslySetInnerHTML={{ __html: section_content }} />
               </div>
            </GeneralContent>
        </>
    );
};

export default connect(FlexibleGeneralContent);

const GeneralContent = styled.div`
        max-width:1140px;
        display:flex;
        justify-content:center;
        align-item:center;
        padding:20px;
        background-color:accentblue;
       h2{
       font-size:30px;
       color:blue;
       text-align:center;
       }
        div{
           width:70%;
           
        }
    `;

const Content = styled.p`
            color:red;
            font-size:20px;
            text-align:center;
    `;