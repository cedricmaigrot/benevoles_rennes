import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const lienWhatsApp = 'https://chat.whatsapp.com/BkjG09JqP3VECHwfsqK501';

function NavbarSite() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">Bénévoles Rennes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <LinkContainer to="/">
                            <Nav.Link>Accueil</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trombinoscope">
                            <Nav.Link>Trombinoscope</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/presence">
                            <Nav.Link>Présence bénévole</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <div className="d-flex">

                        <a href={lienWhatsApp} target="_blank" rel="noopener noreferrer">
                            <button style={{ backgroundColor: '#25D366', color: '#fff', padding: '5px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px' }} />
                                Rejoindre la communauté WhatsApp
                            </button>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarSite;