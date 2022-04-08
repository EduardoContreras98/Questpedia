import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

export function TabFavoritos(){
    return (
        <div id = "tab3" class="profile-Fav">
            <h1>favoritos</h1>
            <div class="Favoritos">
                <br/>
                <h2>Favoritos</h2> 
                <i class="far fa-bookmark"></i> 
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