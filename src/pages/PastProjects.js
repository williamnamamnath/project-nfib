import styled from "styled-components";

const PastProjects = () => {

    return (
        <>
        <ParentContainer>
            <Div>
                <h1>Our Past Projects</h1>
            </Div>
            <br/>
            <br/>

            <PDiv>
                <TextContainer>
                    <TextInfo>
            <p>NFIB, also known as <b>neurofibromatosis</b>, contains 3 conditions: Neurofibromatosis type 1 (NF1), also known as von Recklinghausen disease, Neurofibromatosis type 2 (NF2) and Schwannomatosis (SWN).</p>
            
            <br/>
            <p>At the Montreal University Health Centre, the genetics department specializes with <b>Neurofibromatosis Type 1 (NF1) </b>, which is a genetic condition that causes changes in skin pigment and tumors on nerve tissue. Skin changes include flat, light brown spots and freckles in the armpits and groin. Tumors can grow anywhere in the nervous system, including the brain, spinal cord and nerves. NF1 is rare. About 1 in 2,500 is affected by NF1.
                <br/>
                <br/>
            The tumors often are not cancerous, known as benign tumors. But sometimes they can become cancerous. Symptoms often are mild. But complications can occur and may include trouble with learning, heart and blood vessel conditions, vision loss, and pain.
                <br/>
                <br/>
            Treatment focuses on supporting healthy growth and development in children and early management of complications. If NF1 causes large tumors or tumors that press on a nerve, surgery can reduce symptoms. A newer medicine is available to treat tumors in children, and other new treatments are being developed.</p>
                    </TextInfo>
                </TextContainer>
            </PDiv>
            <br/>
            <br/>
        </ParentContainer>
        </>
    )
}

export default PastProjects;

const ParentContainer = styled.div`
    padding: 0 0.7em;
`

const Div = styled.div`
    text-align: center;
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

const TextInfo = styled.div`
    border-color: black;
    border-radius: 10px;
    box-shadow: 0 2px 10px 0 #1d4ed8;
    background-color: #D2DCF1;
    color: black;
    width: max-content;
    padding: 15px;
    line-height: 2em;
    font-size: 1.1em;
`