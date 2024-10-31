import styled from "styled-components";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(!menuClicked)
    };

    return (
        <>
        <Nav>
            <Link to="/" className="title">NFIB</Link>
            <Div onClick={handleClick}>
                <Span></Span>
                <Span></Span>
                <Span></Span>
            </Div>
            <ul className={menuClicked ? "menu-clicked" : ""}>
                <Li>
                    <NavLink to="/about-nfib" className="nav-link">What is NFIB?</NavLink>
                </Li>
                <Li>
                    <NavLink to="/projects" className="nav-link">Our Projects</NavLink>
                </Li>
                <Li>
                    <NavLink to="/news-and-events" className="nav-link">News and Events</NavLink>
                </Li>
                <Li>
                    <NavLink to="/nf1-team" className="nav-link">Our Team</NavLink>
                </Li>
                <Li>
                    <NavLink to="/contact" className="nav-link">Contact and Resources</NavLink>
                </Li>
            </ul>
        </Nav>
        </>
    )
}; 

//Old background: #054a91
//#0759D3

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #245BDE;
    box-shadow: 0px 3px 3px #2048A8;

    @media all and (min-width: 360px) and (max-width: 969px) {
        flex-direction: column;
        align-items: start;
        width: 100vw;
    }
`

// const Ul = styled.ul`
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;

//     @media all and (min-width: 360px) and (max-width: 969px) {
//         display: none;
//         flex-direction: column;
//         width: 100%;
//         margin-bottom: 0.25rem;
//     }
//     `

const Li = styled.li`
    list-style: none;
    font-weight: bold;

    @media all and (min-width: 360px) and (max-width: 969px) {
        width: 100%;
        text-align: center;
    }
`

const Div = styled.div`
    display: none;
    position: absolute;
    top: 0.6rem;
    right: 0.5rem;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25rem;
    height: 2rem;

    &:hover {
        cursor: pointer;
    }

    @media all and (min-width: 360px) and (max-width: 969px) {
        display: flex;
        right: 2rem;
    }
`

const Span = styled.span`
    height: 0.4rem;
    width: 100%;
    background-color: white;
    border-radius: 0.2rem;
`

export default Navbar;