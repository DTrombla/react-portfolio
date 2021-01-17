import react from "react"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
function About(){
    return(
        <Container>
        <Row>
            <div class="col-xl-12">
                <header>
                    <h1>About Me</h1>
                </header>
                <Row>
                    <div class="col-xl-12">
                        <img id="profile" width="200" src="https://raw.githubusercontent.com/DTrombla/images/main/profile_image.JPG" alt=""></img>
                        <p> My name is Duncan Trombla. I am a 19 year old math major at the University of Colorado Boulder. I grew up in the San Francisco Bay Area. I've loved computers and tech ever since I used to watch my dad play videogames on our old box monitor PC when I was a toddler. I've always enjoyed riddles, puzzles, little logic games and what not, and I like to see coding in that same way. I really enjoy the feeling of working hard on something for hours until everything just clicks into place. In my free time I love to work out, play video games, and do tricking. Tricking is essentially martial arts mixed with tumbling, but you should just google it it's very entertaining. I am well versed in HTML, CSS, JavaScript, Node.js, JQuery, and MySQL.</p>
                    </div>
                </Row>
                <div>
                    <p style={{fontWeight:"bold"}}>Links</p>
                    <ul>
                        <a href="https://www.linkedin.com/in/duncan-trombla-5b9b621b9/" target="_blank"><li>Linkedin</li></a>
                        <a href="https://drive.google.com/file/d/1ObWP1WrPsQUn8D9Z3-d9T5SSbUbWhUbM/view" target="_blank"><li>Resume</li></a>

                    </ul>
                </div>
            </div>
            
        </Row>
    </Container>
    )
}

export default About