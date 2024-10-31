import MUHCInfo from "./MUHCInfo";

import styled from "styled-components";

const Home = () => {

    return (
        <>
        <H1>NEUROFIBROMATOSIS</H1>
        <br/>
        <br/>
        <Div>
            <h4>
            The medical geneticists in charge of the neurofibromatosis clinics:
            </h4>
            <br/>
        </Div>

        <ParentDiv>
            <MDContainer>
                    <h3 style={{textDecoration: "underline"}}>Dr. Daniela D'Agostino</h3>
            <p style={{color: "#CECECE"}}>Pediatric and Adult Clinic</p>
            </MDContainer>
            <br/>
            <br/>

            <MDContainer>
                    <h3 style={{textDecoration: "underline"}}>Dr. Ahmad Ghais</h3>
            <p style={{color: "#CECECE"}}>Pediatric Clinic</p>
            </MDContainer>
            <br/>
            <br/>

            <MDContainer>
                    <h3 style={{textDecoration: "underline"}}>Dr. June Ortenberg</h3>
            <p style={{color: "#CECECE"}}>Pediatric Clinic</p>
            </MDContainer>
            <br/>
            <br/>
        </ParentDiv>
            <br/>
            <br/>
            <br/>
        <br/>
        <br/>
        <br/>
            <MUHCInfo />
        </>
    )
}; 

const H1 = styled.h1`
    text-align: center;
    font-size: 1.8em;
    font-weight: bold;
`

const Div = styled.div`
    margin: 1.2em;
    text-align: center;
    color: #272727;
    //color: #5A6169;
`

const ParentDiv = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border-color: black;
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 #1d4ed8;
    background-color: #245BDE;
    color: white;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5em;
`

const MDContainer = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1.6em;
`

export default Home; 