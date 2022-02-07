import React from 'react';
import { connect, Global, css, styled,Head} from 'frontity';
import Logo from '../assets/images/dark.png';
import Link from "../component/Link";
import {RLogo, RMenu, RHeader, RContainer} from "../component/CommonStyle";
import dd from '../assets/style.css';


const Header = ({state}) => {
    const menu = state.rdTheme.menu;
    return (
        <HeaderContainer>
            <Global styles={css(dd)} />
                <a href="/" className="logo">
                    <img src={Logo} alt="" />
                </a>
                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" checked={state.rdTheme.isMenuOpen} onChange={() => {state.rdTheme.isMenuOpen = !state.rdTheme.isMenuOpen} } />
                <label htmlFor="menu-icon"></label>
                <nav className="nav">
                    <ul className="pt-5">
                        {menu.map((item)=>{
                            return(
                                <li>
                                    <Link href={item.url} isActive={item.url === state.router.link}>{item.name}</Link>
                                </li>
                            )
                        })}

                    </ul>
                </nav>
        </HeaderContainer>
    );
};

export default connect(Header);

const HeaderContainer = styled.div`
            position: fixed !important;
            background: #FFFFFF !important;
            width: 100%;
            height: 85px;
            top: 0;
            max-width: 1235px;
            margin: 0;
            padding: 20px;
            left: 0;
            z-index: 99999;
    `;