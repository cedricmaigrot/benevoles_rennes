import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { startOfWeek, addDays, format } from 'date-fns';

import { Badge, Col, Row } from "react-bootstrap";

import Volonters from "./Volonters";
import CallyButton from "./CallyButton";


function Week(props) {

    const [donneesAPI, setDonneesAPI] = useState({});

    // Fonction pour effectuer l'appel à l'API
    const fetchAPI = async () => {
        try {
            // Remplacez l'URL ci-dessous par l'URL réelle de votre API
            const response = await axios.get('https://refuge-rennes.fr/api/get_dispo/' + props.year + '/' + props.week);
            console.log(response)
            setDonneesAPI(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API', error);
        }
    };

    // Utilisation de useEffect pour effectuer l'appel à l'API une fois le composant monté
    useEffect(() => {
        fetchAPI();
    }, []); // Le tableau vide signifie que cela ne dépend d'aucune variable, donc il ne sera exécuté qu'une fois après le rendu initial.

    function show_date(numeroSemaine, annee) {
        // Obtenez la date du premier jour de la semaine
        const premierJourSemaine = startOfWeek(new Date(annee, 0, 1));

        // Ajoutez le nombre de semaines à la date du premier jour
        const datePremierJourSemaineDonnee = addDays(premierJourSemaine, (numeroSemaine - 1) * 7 + 1);

        // Créez un tableau avec les dates des 7 jours de la semaine
        const datesSemaine = Array.from({ length: 7 }, (_, index) => addDays(datePremierJourSemaineDonnee, index));

        // Formatez les dates comme vous le souhaitez
        const datesFormatees = datesSemaine.map(date => format(date, 'dd/MM/yyyy'));

        return datesFormatees;
    }

    let dates = show_date(props.week, props.year);
    return (
        <Col className="week">
            <h2>
                <Badge bg="dark" className='w-100'>
                    <span className="text">Semaine {props.week}</span> | <span className="text">{props.year}</span> | <span className="text"><CallyButton link={props.link} /></span>
                </Badge>
            </h2>

            <Row xs={1} sm={1} md={4}>
                {
                    ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day, ind) => {
                        let str = (
                            <>
                                <Col className='week'>
                                    <h4>{day} {dates[ind]}</h4>
                                    <Row>
                                        <Col>
                                            <h5>Matin</h5>
                                            <Volonters day={day} data={donneesAPI} period="matin" />
                                        </Col>
                                        <Col>
                                            <h5>Après-midi</h5>
                                            <Volonters day={day} data={donneesAPI} period="am" />
                                        </Col>
                                    </Row>
                                </Col>
                            </>
                        )
                        return str
                    })
                }
            </Row>
        </Col>
    );
}

export default Week;
