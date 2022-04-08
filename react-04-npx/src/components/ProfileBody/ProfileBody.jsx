import React,{ Component }  from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './ProfileBody.module.css';
import TabInfoPerfil from '../TabInfoPerfil/TabInfoPerfil';
import { TabActividad } from '../TabActividad/TabActividad';
import { TabFavoritos } from '../TabFavoritos/TabFavoritos';
import  TabProfileEdit  from '../TabProfileEdit/TabProfileEdit';
class ProfileBody extends Component{
    render(){
        return (
            <div class="profile-body">
                <TabInfoPerfil
                 Usuario={this.props.Usuario}
                 Location={this.props.Location}
                 FechaRegistro={this.props.FechaRegistro}
                ></TabInfoPerfil>
                <TabActividad></TabActividad>
                <TabFavoritos></TabFavoritos>
                <TabProfileEdit></TabProfileEdit>
            </div>
        );
    }
    
}

export default ProfileBody;

