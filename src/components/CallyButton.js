import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function CallyButton(props) {
    if (props.link === '') { return <></> }
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#2566D3', color: '#fff', padding: '10px', fontSize: '12px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faLink} style={{ marginRight: '8px' }} />
                Cally
            </button>
        </a>
    );
}

export default CallyButton;
