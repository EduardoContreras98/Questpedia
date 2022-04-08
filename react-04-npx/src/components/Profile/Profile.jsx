import React,{ Component }  from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './Profile.module.css'

import  NavUser  from '../NavUser/NavUser';
import  ProfileBody  from '../ProfileBody/ProfileBody';
class Profile extends Component{
    render(){
        return (
            <div className={styles.container}>
                 <div className={styles.content}>
                    <div className={styles.mainbar}>
                        <article>
                            <div className={styles.Todo}>
                                <NavUser></NavUser>
                                <ProfileBody
                                Usuario={this.props.Usuario}
                                Location={this.props.Location}
                                FechaRegistro={this.props.FechaRegistro}
                                ></ProfileBody>
                            </div>
                        </article>
                    </div>
                 </div>
            </div>
        );
    }
    
}

export default Profile

