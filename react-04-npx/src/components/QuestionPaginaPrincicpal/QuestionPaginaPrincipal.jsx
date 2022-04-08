import React,{ Component }  from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './QuestionPaginaPrincipal.module.css';
import  QuestionInfo  from '../QuestionInfo/QuestionInfo';

class QuestionPaginaPrincipal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.Noticia}>
                <div className={styles.bodyN}>

                    <div className={styles.left}>
                        <h2 id= "valueA6" >0</h2>
                        <p>Answers</p>
                    </div>

                    <div className={styles.center}>
                        <div className={styles.title}>  
                        <a href=""> <h2 id="Pregunta6">Titulo: Lorem ipsum dolor.</h2></a>
                        </div>
                        <h4>Descripción corta: </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Officia eaque tempora minima
                        doloribus aspernatur? 
                        Ipsum non expedita soluta fugit? Incidunt
                        voluptates aperiam ex quia id esse eveniet
                        velit vitae ipsam.</p>
                        
                        <div className= {styles.InfoNoticia}>
                            <p><span>#Utiles</span> </p>
                            <p><span>#NoUtiles</span></p>
                            <p><span>#Respuestas</span></p>
                            <p><span>Categorias:</span> </p>                     
                        </div>
                        <br/>
                        <div className={styles.InfoUsuarioPreg}>
                            <div className={styles.time}>
                            <p>posted 1 min ago</p>
                            </div>
                            <div className={styles.infoP}>
                            <img src="/Media/default-.jpg" alt="" 
                            width="90" height="72"/>
                            <a href=""><p id="User6">Usuario</p></a>
                            </div>
                        </div>

                    </div>

                   
                </div>
                
            
            </div>

        );
    }
}


export default QuestionPaginaPrincipal;
