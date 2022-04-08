import React,{ Component }  from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './TabInfoPerfil.module.css'
class TabInfoPerfil extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
      }
      handleClick(){
        alert('Sesión cerrada con exito');
      }
    render(){
        return (
            <div id = "tab1" className={styles.profileposttab}>
                <h1>Perfil</h1>
                <div className={styles.InfoPerfil}>
    
                    <div className={styles.imgBack}>
                        <img src="/Media/default-.jpg" alt=""/>
                    </div>
                    
                    <div className={styles.infoU}>
                        <h2>Usuario: {this.props.Usuario}</h2>
                        <h2>Location: {this.props.Location}</h2>
                        <h2>Register: {this.props.FechaRegistro}</h2>
                        <button id="EditP" 
                        className={styles.btn}>Editar Perfil</button>
                        <button id="closeP" 
                        onClick={this.handleClick} 
                        className={styles.btn}>Cerrar sesión</button>
                    </div>
                </div>
            </div>
        );
    }
   
} 
export default TabInfoPerfil;

