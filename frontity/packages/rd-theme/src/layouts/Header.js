import React from 'react';
import { connect, Global, css, styled,Head} from 'frontity';
import Logo from '../assets/images/dark.png';
import Link from "../component/Link";
import {RLogo,RMenu,RHeader} from "../component/CommonStyle";


const Header = ({state}) => {
    const menu = state.rdTheme.menu;
    return (
        <>
            <RHeader>
                <RLogo>
                    <img src={Logo} />
                </RLogo>
                <RMenu>
                    <ul>
                        {menu.map((item)=>{
                            return(
                                <li>
                                    <Link href={item.url} isActive={item.url === state.router.link}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </RMenu>
            </RHeader>
        </>
    );
};

export default connect(Header);