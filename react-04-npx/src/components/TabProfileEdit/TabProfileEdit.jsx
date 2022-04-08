import React,{ Component }  from 'react';
import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './TabProfileEdit.module.css';
import { AskBtn } from '../AskBtn/AskBtn';

class TabProfileEdit extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
      }
      handleClick(){
        alert('Cambios realizados con exito en su perfil');
      }
      render(){
        return (
            <div id = "tab1" className={styles.profileEdit}>
                <h1>Perfil</h1>
                <div className={styles.InfoPerfil}>
                    <div className={styles.imgBack}>
                        <img id="imgp" src="/Media/default-.jpg" 
                        alt="" />
                    </div>
                        <div className={styles.infoU}>
                            <p>Nombre</p>
                            <textarea name="Usuario" id="" ></textarea>
                            <p>Location</p>
                            <textarea name="Location" id="" ></textarea>
                            <p>Title</p>
                            <textarea name="Title" id="" ></textarea>     
                            <input id = "default-btn" type="file"
                            hidden/>
                            <br />
                            <AskBtn
                            onClick={this.handleClick}
                            >Guardar Cambios</AskBtn>
                        </div>
                </div>
        </div>
        );
      }
}

export default TabProfileEdit;

