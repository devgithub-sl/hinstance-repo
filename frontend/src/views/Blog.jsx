import { memo } from "react"
import NavBar from "../component/NavBar.component"

function Blog(){
    return(
        <>
            <NavBar/>
        </>
    )
}

export default memo(Blog)