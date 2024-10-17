import { memo } from "react"
import { Nav } from "react-bootstrap"
import { useLocation } from "react-router-dom"

function NavBar(){
  const location = useLocation();

  return(
    <Nav className="justify-content-start" variant="underline" defaultActiveKey="/home" style={{margin: "1rem", paddingRight: "2rem"}}>
      <Nav.Item>
        <Nav.Link href="/" active={location.pathname === "/"}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" active={location.pathname === "/about"}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blog" active={location.pathname === "/blog"}>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/collections" active={location.pathname === "/collections"}>Collections</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default memo(NavBar)