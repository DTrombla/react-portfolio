import react from "react"
function Project(props){
    return(
        <figure class="col-xl-4 col-lg-6 col-md-12">
            <a href={props.link} target="_blank"><img src={props.src} width="350px" height="230px" alt="pet adoption screenshot"></img></a>
            <h2>{props.title}</h2>
            <h4><a class = "githubLink" href={props.github} target="_blank">GitHub Repo</a></h4>
        </figure>
    )
}

export default Project