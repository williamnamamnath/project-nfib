import styled from "styled-components";

import phone from "../images/phone.png"
import email from "../images/email.png"
import fax from "../images/fax.png"

const MUHCInfo = () => {

    return (
        <>
        <ParentContainer>
            <PDiv>
                <TextContainer>
                    <TextInfo>
                        <H2>Clinics</H2>
                        <br/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TextInfo>
                </TextContainer>
            </PDiv>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PDiv>
        <TextContainer>
            <TextInfo>
                <H2>Referrals</H2>
                <br/>
                <p>When external hospitals and physicians or internal departments refer patients to the neurfibromatosis clinic, they ensure a streamlined process. This means our medical geneticists will triage each patient's referral received weekly in order for patients to receive direct consultation with one of our NFIB professionals.</p>
                <p>To fill with desired info.</p>
            </TextInfo>
        </TextContainer>
        </PDiv>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PDiv>
            <ContactContainer>
                <TextInfo>
                    <H2>Clinic Information</H2>
                    <br/>
                    <p>To contact us, consider one of the following options: </p>
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
                </TextInfo>
            </ContactContainer>
        </PDiv>
        </ParentContainer>
        </>
    )
}

export default MUHCInfo;

const ParentContainer = styled.div`
    padding: 2em 1.5em;
`
const H2 = styled.h2`
    font-weight: bold;
`

const PDiv = styled.div`
    text-align: justify;
    margin: 0 20px 40px 20px;
    line-height: 1.4em;
`

const TextContainer = styled.div`
    display: flex;
    border-color: black;
    border-radius: 10px;
    text-align: justify;
    margin: 0 20px 40px 20px;
    line-height: 1.4em;
`

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    border-color: black;
    border-radius: 10px;
    text-align: justify;
    margin: 0 20px 40px 20px;
    line-height: 1.4em;
`

const TextInfo = styled.div`
    border-color: black;
    border-radius: 10px;
    box-shadow: 0 2px 10px 0 #245BDE;
    background-color: #D2DCF1;
    width: max-content;
    padding: 15px;
    line-height: 2em;
    font-size: 1.1em;
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

    width: max-content;
    padding: 15px;
    line-height: 2em;
    font-size: 1.2em;
`

const Li = styled.li`
    list-style: none;
    padding: 1.2em;
`

const Span = styled.span`
    font-weight: bold;
`