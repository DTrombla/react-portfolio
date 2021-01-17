import Container from "react-bootstrap/Container"
import react from "react"
import Row from "react-bootstrap/esm/Row"
function Contact(){
    return(
        <Container>
        <header>
            <h1>Contact</h1>
        </header>
        <Row>
            <div class="col-xl-12">

                <ul>
                    <li>Email: duncan@trombla.org</li>
                    <li>Phone:(415)-852-1640</li>
                </ul>
            </div>
        </Row>
    </Container>
    )
}

export default Contact