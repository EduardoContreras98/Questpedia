import React,{ Component }  from 'react';
import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './NavUser.module.css'
import { NavUserStyled } from '../NavUserStyled/NavUserStyled';

class NavUser extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    
    }
    render(){
        return (
            <div className={styles.navuser}>
                <ul className="tabs">
                    <NavUserStyled><h2>Perfil</h2></NavUserStyled>
                    <NavUserStyled><h2>Actividad</h2></NavUserStyled>
                    <NavUserStyled><h2>Favoritos</h2></NavUserStyled>
                
                </ul>
            </div>
        );
    }
}

export default NavUser;

