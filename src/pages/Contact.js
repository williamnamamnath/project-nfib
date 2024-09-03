import styled from "styled-components"

const Contact = () => {

    return (
        <>
        <Div>
            <h2>To get in contact with a member of our NF1 team, please consider the following options:</h2>
        </Div>
        <br/>

        <Div>
            <ul>
                <li>Phone: (514) 412-4427</li>
                <li>Fax: (514) 412-4296</li>
                <li>Email: nf1@muhc.mcgill.ca</li>
            </ul>
            <br/>
            <p>An administrative member of our team will then assist you to the best of their abilities to answer your question or to help you with your request.</p>
        </Div>
        </>
    )
}; 

const Div = styled.div`
    text-align: center;
    padding: 20px;
`

export default Contact;