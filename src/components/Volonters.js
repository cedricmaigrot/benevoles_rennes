import { Badge, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Volonter from "./Volonter";


function dispo() {
    let r = Math.random()
    if (r < 0.33) { return 'yes' }
    if (r > 0.66) { return 'no' }
    return 'maybe'
}

const dispo_priority = (value) => {
    if (value === 'yes') {
        return 0;
    } else if (value === 'maybe') {
        return 1;
    } else if (value === 'no') {
        return 2;
    } else {
        return 3;  // au cas où une autre valeur serait renvoyée par dispo()
    }
}

// day={day} data={donneesAPI}
function Volonters(props) {

    if (Object.keys(props.data).length === 0) { return ""; }

    let data = props.data[props.day.toLowerCase()][props.period.toLowerCase()]
    const persons = data['Oui'].map((element) => [element, 'yes']).concat(data['Peut-être'].map((element) => [element, 'maybe']));

    return (
        persons.map((person) => {
            let str = (
                <Volonter person={person[0]} disponibility={person[1]} />
            )
            return str
        })
    )
}

export default Volonters;
