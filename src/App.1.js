import { Container } from 'react-bootstrap';
import Presence from './views/Presence';
import Header from './views/Header';

export function App() {
    return (
        <>
            <Container id="website" fluid>
                <Header />
                <Presence />
    // </Container>
        </>
    );
}
