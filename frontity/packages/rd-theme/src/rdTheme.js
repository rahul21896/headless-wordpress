import React from 'react';
import { connect, useConnect , Global, css, styled,Head,keyframes} from 'frontity';
import Header from "./layouts/Header";
import Body from "./layouts/Body";
import {RContainer} from "./component/CommonStyle";
import axios from "axios";
import Switch from '@frontity/components/switch';
import Preloader from "react-preloaders/lib/Preloader";
import {useTransition,animated} from 'react-spring';


const rdTheme = ({state,actions}) => {
    const data = state.source.get(state.router.link);

    axios.get(state.source.url+'/wp-json/rd-theme/v1/menu-list/primary')
        .then(function (response) {
            const menu = response.data;
            state.rdTheme.menu = menu;
        })
        .catch(function (error) {
        });


    axios.get(state.source.url+'/wp-json/acf/v2/options')
        .then(function (response) {
            state.rdTheme.isLoading = false;
            state.rdTheme.site_options = response.data.acf;
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <>

            <div>
                <RContainer>
                    <Header />
                </RContainer>
                <Body />
                {(data.isFetching || state.rdTheme.isLoading) && <RDiv><Loader><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></Loader></RDiv>}
            </div>


        </>
    );
};

export default connect(rdTheme);

const Absolute = styled.div`
  // position: absolute;
  width: 100%;
`;

const RDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,255,255,1);
    opacity: 1;
`;

const Loader = styled.div`
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        div {
          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          transform-origin: 40px 40px;
        }
        div:after {
          content: " ";
          display: block;
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #000;
          margin: -4px 0 0 -4px;
        }
        div:nth-child(1) {
          animation-delay: -0.036s;
        }
        div:nth-child(1):after {
          top: 63px;
          left: 63px;
        }
        div:nth-child(2) {
          animation-delay: -0.072s;
        }
        div:nth-child(2):after {
          top: 68px;
          left: 56px;
        }
        div:nth-child(3) {
          animation-delay: -0.108s;
        }
        div:nth-child(3):after {
          top: 71px;
          left: 48px;
        }
        div:nth-child(4) {
          animation-delay: -0.144s;
        }
        div:nth-child(4):after {
          top: 72px;
          left: 40px;
        }
        div:nth-child(5) {
          animation-delay: -0.18s;
        }
        div:nth-child(5):after {
          top: 71px;
          left: 32px;
        }
        div:nth-child(6) {
          animation-delay: -0.216s;
        }
        div:nth-child(6):after {
          top: 68px;
          left: 24px;
        }
        div:nth-child(7) {
          animation-delay: -0.252s;
        }
        div:nth-child(7):after {
          top: 63px;
          left: 17px;
        }
        div:nth-child(8) {
          animation-delay: -0.288s;
        }
        div:nth-child(8):after {
          top: 56px;
          left: 12px;
        }
        @keyframes lds-roller {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
`;