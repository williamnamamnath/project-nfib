import styled from "styled-components";

const MUHCInfo = () => {

    return (
        <>
        <ParentContainer>
            <PDiv>
        <H2>Clinics</H2>
        <br/>
        <p>
            To fill with desired info.
        </p>

            </PDiv>
        
        <PDiv>
        <H2>Referrals</H2>
        <br/>
        <p>When external hospitals and physicians or internal departments refer patients to the neurfibromatosis clinic, they ensure a streamlined process. This means our medical geneticists will triage each patient's referral received weekly in order for patients to receive direct consultation with one of our NFIB professionals.</p>
        <p>To fill with desired info.</p>
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