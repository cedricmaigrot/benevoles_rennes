import { Badge } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons';


function Volonter(props) {
    let color = 'success';
    let icon = faCheck;
    if (props.disponibility === 'maybe') { color = "secondary"; icon = faQuestion }
    return (
        <>
            {/* <Col> */}
            {/* <FontAwesomeIcon icon={faUser} className={"text-" + color} /> <Badge bg={color}>{props.disponibility}</Badge> {props.person} */}
            <Badge bg={color} className="available-person"> {props.person} < FontAwesomeIcon icon={icon} /></Badge >
            {/* </Col> */}
        </>
    );
}

export default Volonter;
