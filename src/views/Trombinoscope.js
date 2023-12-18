import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { Alert, Col, Row } from "react-bootstrap";

import Contact from "../components/Contact";
import ContactV2 from '../components/Contact_v2';


function compareFn(a, b) {
    return a.prenom > b.prenom
}

function TrombinoscopeV2() {

    const [persons, setPersons] = useState([]);

    // Fonction pour effectuer l'appel à l'API
    const fetchAPI = async () => {
        try {
            // Remplacez l'URL ci-dessous par l'URL réelle de votre API
            const response = await axios.get('https://refuge-rennes.fr/api/annuaire');
            let data = response.data;
            data.sort(compareFn)
            setPersons(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API', error);
        }
    };

    // Utilisation de useEffect pour effectuer l'appel à l'API une fois le composant monté
    useEffect(() => {
        fetchAPI();
    }, []); // Le tableau vide signifie que cela ne dépend d'aucune variable, donc il ne sera exécuté qu'une fois après le rendu initial.


    return (
        <>
            <h2>Trombinoscope</h2>

            <Alert key="info" variant="info">
                <Alert.Heading>Information : données privées</Alert.Heading>
                <p>
                    Les informations présentées ici ont été récupérées car en accessible de manière libre par les autres personnes du refuge (Numéro de téléphone affiché dans le refuge, adhésion au groupe WhatsApp, etc.)
                </p>
                <hr />
                <p className="mb-0">
                    Si vous ne souhaitez pas apparaître ici, merci de me contacter à <b>maigrot.cedric@gmail.com</b>.
                </p>
            </Alert>

            <hr />
            <Row className='category direction' xs={1} sm={2} md={2}>
                <span>Direction</span>
                {
                    persons.map((person) => {
                        if (person.category === 'Responsable de refuge')
                            return (
                                <Col className='text-center'><ContactV2 person={person} /></Col>
                            )
                        return <></>
                    })
                }
                {
                    persons.map((person) => {
                        if (person.category === 'Cheffe d\'équipe')
                            return (
                                <Col className='text-center'><ContactV2 person={person} /></Col>
                            )
                        return <></>
                    })
                }
            </Row>
            <Row className='category agents' xs={1} sm={2} md={6}>
                <span>Agents animalier</span>
                {
                    persons.map((person) => {
                        if (person.category === 'Agent animalier')
                            return (
                                <Col className='text-center'><ContactV2 person={person} /></Col>
                            )
                        return <></>
                    })
                }
            </Row>

            <Row className='category formation_balade' xs={1} sm={2} md={6}>
                <span>Formation balade</span>
                {
                    persons.map((person) => {
                        if (person.formation_balade)
                            return (
                                <Col className='text-center'><ContactV2 person={person} /></Col>
                            )
                        return <></>
                    })
                }
            </Row>

            <Row className='category reseaux_sociaux' xs={1} sm={2} md={6}>
                <span>Réseaux sociaux</span>
                {
                    persons.map((person) => {
                        if (person.reseaux_sociaux)
                            return (
                                <Col className='text-center'><ContactV2 person={person} /></Col>
                            )
                        return <></>
                    })
                }
            </Row>

            <Row className='category club_jeunes' xs={1} sm={2} md={6}>
                <span>Club Jeunes</span>
                {
                    persons.map((person) => {
                        if (person.club_jeunes)
                            return (
                                <Col className='text-center'><ContactV2 person={person} /></Col>
                            )
                        return <></>
                    })
                }
            </Row>
        </>
    );
}

export default TrombinoscopeV2;
