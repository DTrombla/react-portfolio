import react from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" 
import Project from "../components/project"
function Portfolio(){
    return(
        <Container>
        
  
        <header class="row">
            <div class="col-md-12">
                <h1>Portfolio</h1>
            </div>
        </header>
    
       
        <div class="container pics">
            <Row class="row">
            <Project
            src = {"https://raw.githubusercontent.com/DTrombla/images/main/Search%26.PNG"}
            link = {"https://candygarcia014.github.io/search-and-rescue/"}
            title = {"Pet Adoption Project"}
            github = {"https://github.com/DTrombla/search-and-rescue"}
            />
            <Project
            src = {"https://raw.githubusercontent.com/DTrombla/images/main/wide.PNG"}
            link = {"https://dtrombla.github.io/weather-application/"}
            title = {"Weather Application"}
            github = {"https://github.com/DTrombla/weather-application"}
            />
            <Project
            src = {"https://raw.githubusercontent.com/DTrombla/images/main/Starter.PNG"}
            link = {"https://dtrombla.github.io/awesome_quiz/"}
            title = {"Code Quiz"}
            github = {"https://github.com/DTrombla/awesome_quiz"}
            />
            <Project
            src = {"https://raw.githubusercontent.com/DTrombla/images/main/Italy.PNG"}
            link = {"https://nameless-plateau-64183.herokuapp.com/"}
            title = {"Italia Today"}
            github = {"https://github.com/DTrombla/italy-all-the-way"}
            />

                

            </Row>
        </div>
    </Container>
    )  
}

export default Portfolio