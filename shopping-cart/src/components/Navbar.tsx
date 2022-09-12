import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import image from "../assets/icons8-shopping-cart-24.png"

export function Navbar() {
    return (
        <NavbarBS sticky="top" className="bg-primary shadow-lg mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to={"/"} as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to={"/about"} as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
                <Button className="rounded-circle" variant="outline-dark" style={{ width: "50px", height: "50px", position: "relative" }}>
                    <img src={image} />
                    <div className="rounded-circle d-flex bg-danger justify-content-center align-items-center" style={{ color: "white", width: "25px", height: "25px", position: "absolute" }} >2</div>
                </Button>
            </Container>
        </NavbarBS>
    )
}