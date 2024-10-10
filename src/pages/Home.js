import MUHCInfo from "./MUHCInfo";

import styled from "styled-components";

const Home = () => {

    return (
        <>
        <H1>NEUROFIBROMATOSIS</H1>
        <Div>
            <h4>
            The medical geneticists in charge of the neurofibromatosis clinics:
            </h4>
            <br/>
        </Div>

        <ParentDiv>
            <MDContainer>
                    <h3>Dr. Daniela D'Agostino</h3>
            <p style={{color: "#A9A9A9"}}>Pediatric and Adult Clinic</p>
            </MDContainer>
            <br/>
            <br/>

            <MDContainer>
                    <h3>Dr. Ahmad Ghais</h3>
            <p style={{color: "#A9A9A9"}}>Pediatric Clinic</p>
            </MDContainer>
            <br/>
            <br/>

            <MDContainer>
                    <h3>Dr. June Ortenberg</h3>
            <p style={{color: "#A9A9A9"}}>Pediatric Clinic</p>
            </MDContainer>
            <br/>
            <br/>
        </ParentDiv>
            <br/>
            <br/>
            <MUHCInfo />
        </>
    )
}; 

const H1 = styled.h1`
    text-align: center;
    text-decoration: underline;
    font-size: 1.8em;
    font-weight: bold;
    color: black;
`

const Div = styled.div`
    margin: 1.2em;
    text-align: center;
    color: #6C6C6C;
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
    background-color: #0f172a;
    color: white;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
`

const MDContainer = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1.6em;
`

export default Home; 