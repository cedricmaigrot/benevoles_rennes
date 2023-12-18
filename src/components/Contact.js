import { Badge } from "react-bootstrap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faMobile, faChildren, faDog } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


// "https://wa.me/1XXXXXXXXXX"

function get_whatsapp_link(mobile) {
    return "https://wa.me/33" + mobile.slice(1).trim().replace(/\s/g, '')
}

function ContactV2(props) {
    const image_url = "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif";

    const handleImageError = (event) => {
        event.target.src = image_url;
    };

    const photoSrc = props.person.photo || image_url;

    return (
        <>
            <img
                alt="Image"
                className="photo"
                src={photoSrc}
                onError={handleImageError}
                width="100%"
            />
            <h4>{props.person.prenom}</h4>
            <p>
                {
                    props.person.category &&
                    <Badge bg="danger">< FontAwesomeIcon icon={faIdCard} /> {props.person.category}</Badge>
                }<br />
                {
                    props.person.mobile &&
                    <Badge bg="info">< FontAwesomeIcon icon={faMobile} /> {props.person.mobile}</Badge>
                }<br />
                {
                    props.person.mobile &&
                    <Badge className="contactWhatsApp"><a target="_blank" href={get_whatsapp_link(props.person.mobile)}><FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px' }} /> Contacter</a></Badge>
                }
            </p >
        </>
    );
}

export default ContactV2;
