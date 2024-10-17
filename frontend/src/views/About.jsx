import NavBar from "../component/NavBar.component"
import { memo } from "react"

function About(){
    return(
        <>
            <NavBar/>
            <h1>About</h1>
            <p>
                This application is a Photo library and Blog
            </p>
        </>
    )
}

export default memo(About)