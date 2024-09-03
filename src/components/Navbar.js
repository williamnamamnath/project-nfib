import styled from "styled-components";

const Navbar = () => {

    return (
        <>
        <Nav>
            <Ul>
                <Li><Anchor href="#">NF1</Anchor></Li>
                <Li><Anchor href="#">About</Anchor></Li>
                <Li><Anchor href="#">Contact</Anchor></Li>
            </Ul>
        </Nav>
        </>
    )
}; 

const Nav = styled.nav`
    background-color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`

const Ul = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Li = styled.li`
    height: 50px;

    &:first-child {
        margin-right: auto;
        font-size: x-large;
        font-weight: bold;
    }
`

const Anchor = styled.a`
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;

    &:hover {
        background-color: #f0f0f0;
    }
`

export default Navbar;