import NavBar from "../component/NavBar.component"
import { memo } from "react"

function Home(){
    return(
        <>
            <NavBar/>
            <h1>Hallo</h1>
        </>
    )
}

export default memo(Home)