import styled from "styled-components";

const Anchor = styled.a`
    text-decoration: none;
    color: white;
    
    &:hover {
        text-decoration: underline;
    }
`

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <Anchor href="/">
                <span>
                © NFIB 
                </span>
                </Anchor>
            </footer>
        </>
    )
}

export default Footer;