import { Outlet, Link } from "react-router-dom";
import NavbarSite from "../components/NavbarSite";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <NavbarSite />
            <Container id="website" fluid>
                {/* <Header /> */}
                <Outlet />
            </Container>
        </>
    )
};

export default Layout;