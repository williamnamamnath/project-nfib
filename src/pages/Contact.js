import styled from "styled-components"

import phone from "../images/phone.png"
import email from "../images/email.png"
import fax from "../images/fax.png"

const Contact = () => {

    return (
        <>
        <ParentContainer>
        <Div>
            <H1>Contact Us</H1>
        </Div>

        <Paragraph>Should you have any questions or concerns, please use one of the following methods below to reach out to us:</Paragraph>
        <br/>
        <ContactInfo>
            <InfoContainer>
            <ul>
                <Li><img src={phone} alt="phone logo"/><Span>Phone: </Span>
                <br/> (514) 412-4427</Li>
                <Li><img src={fax} alt="fax logo"/><Span>Fax: </Span>
                <br/> (514) 412-4296</Li>
                <Li><img src={email} alt="email logo"/><Span>Email: </Span>
                <br/> nf1@muhc.mcgill.ca</Li>
            </ul>
            </InfoContainer>
        </ContactInfo>

            <br/>
            <Paragraph>An administrative member of our team will then assist you to the best of their abilities to answer your question or to help you with your request.</Paragraph>
            <br/>

            <BtnDiv>
            <Button>
                <Anchor href="https://muhc.ca" target="_blank" rel="noopener noreferrer">More information on the MUHC</Anchor>
            </Button>
            </BtnDiv>
        </ParentContainer>
        </>
    )
}; 

const H1 = styled.h1`
text-align: center;
    text-decoration: underline;
`

const Div = styled.div`
    text-align: center;
    padding: 20px;
    transition: transform 0.3s ease;
`

const ContactInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border-color: black;
    border-radius: 10px;
`

const InfoContainer = styled.div`
    border-color: black;
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 #1d4ed8;
    background-color: #0f172a;
    color: white;
    width: max-content;
    padding: 15px;
    line-height: 2em;
    font-size: 1.2em;
`

const Li = styled.li`
    list-style: none;
    padding: 1.2em;
`

const ParentContainer = styled.div`
    padding: 0 0.7em;
`

const Button = styled.button`
    box-shadow: 0 2px 20px 0 #1d4ed8;
    background-color: #0f172a;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1em;
    transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
  cursor: pointer;
  }
`

const Paragraph = styled.p`
    padding: 0 0.7em;
    text-align: center;
`

const BtnDiv = styled.div`
    text-align: center;
    padding: 20px;
`

const Anchor = styled.a`
    text-decoration: none;
    color: white;
`

const Span = styled.span`
    font-weight: bold;
`

export default Contact;