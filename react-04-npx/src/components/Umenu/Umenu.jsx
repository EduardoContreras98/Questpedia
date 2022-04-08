import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import styled from "styled-components";
import styles from './Umenu.module.css';

export function Umenu(){
    return ( 
        <div className = {styles.action}>
            <div id = "U_menu" className={styles.profile}>
                <img src="Media/pexels-tran-huynh-nam-3134555.jpg" 
                alt=""/>
            </div>
            <div className={styles.Umenu}>

                <h3>Somerone<br/><samp>Website</samp></h3>
                <ul>

                    <li><a className={styles.dropdownitem} href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 
                    text-gray-400"></i>
                    Profile
                    </a></li>
                    <li> <a className={styles.dropdownitem} href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                    </a></li>
                    <li> <a className={styles.dropdownitem} href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                    </a></li>
                    <li><a className={styles.dropdownitem} href="#">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                    </a></li>

                </ul>

            </div>
        </div>
    );
}