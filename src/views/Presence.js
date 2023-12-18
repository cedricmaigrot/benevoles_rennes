import { Row } from "react-bootstrap";

import Week from "../components/Week";


function Presence() {
    return (
        <>
            <h2>Présence des bénévoles</h2>
            <Row xs={1} sm={1} md={1}>
                <Week week={50} year={2023} link={'https://cally.com/puxsqpdq3zgnfx7k'} />
                <Week week={51} year={2023} link={'https://cally.com/pvxqzau9u6gnfxyw'} />
                <Week week={52} year={2023} link={'https://cally.com/p5xmih5jhmrnfxy9'} />
                <Week week={1} year={2024} link={'https://cally.com/pyxjnj7a57infxyj'} />
                {/* <Week week={2} year={2024} link={''} />
                <Week week={3} year={2024} link={''} /> */}
            </Row>
        </>
    );
}

export default Presence;
