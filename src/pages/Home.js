import styled from "styled-components";

const Home = () => {

    return (
        <>
        <H1>NEUROFIBROMATOSIS</H1>
        <Div>
            <h2>
            The medical geneticists in charge of the neurofibromatosis clinics:
            </h2>
            <br/>
        </Div>
        
            <div>
            <h3>Dr. Daniela D'Agostino</h3>
            <p>Pediatric and Adult Clinic</p>
            </div>
            <br/>

            <div>
            <h3>Dr. June Ortenberg</h3>
            <p>Pediatric Clinic</p>
            </div>
            <br/>

            <div>
            <h3>Dr. Isabelle De Bie</h3>
            <p>Pediatric Clinic</p>
            </div>

            <Div>
                <h2>What is NF1?</h2>
            </Div>
            <br/>

            <p>Insert text here...</p>

            <Div>
                <h2>Symptoms and Treatment</h2>
            </Div>
            <br/>

            <p>Insert text here...</p>
        </>
    )
}; 

const H1 = styled.h1`
    text-align: center;
    font-size: xx-large;
`

const Div = styled.div`
    text-align: center;
    padding: 20px;
`

export default Home; 