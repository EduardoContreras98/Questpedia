import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './TabActividad.module.css';

export function TabActividad(){
    return(
        <div id = "tab2" className={styles.profilereviewtab}>
            <h1>Actividad</h1>
            <br/>
            <div class={styles.Actividad}>
                <br/>
                <h2>Respuestas</h2>  
                <ul id="container">
                    <li>Article 1</li>
                    <li>Article 2</li>
                    <li>Article 3</li>
                    <li>Article 4</li>
                    <li>Article 5</li>
                    <li>Article 6</li>
                    <li>Article 7</li>
                    <li>Article 8</li>
                </ul>
                <br/>
                <h2>Preguntas</h2>  
                <ul id="container">
                    <li>Article 1</li>
                    <li>Article 2</li>
                    <li>Article 3</li>
                    <li>Article 4</li>
                    <li>Article 5</li>
                    <li>Article 6</li>
                    <li>Article 7</li>
                    <li>Article 8</li>
                </ul>
            </div>
        </div>
    );
}