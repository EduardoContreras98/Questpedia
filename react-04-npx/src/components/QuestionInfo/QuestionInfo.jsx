import React,{ Component }  from 'react';
import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './QuestionInfo.module.css';

class QuestionInfo extends Component{
    render(){
        return (
            <div className={styles.InfoPregunta}>
                  <div className={styles.Noticia}>
    
                    <div className={styles.bodyN}>
    
                        <div className={styles.leftv}>
                        
                        <i className="fas fa-angle-up"></i>
                        <h2 id= "valueV1" >0</h2>
                        <i className="fas fa-angle-down"></i>
                        <p>No util</p>
                        <i className="fas fa-angle-up"></i>
                        <h2 id= "valueV1" >0</h2>
                        <i className="fas fa-angle-down"></i>
                        <p>Util</p>
    
                        <div className={styles.fav}>
                            <i className="far fa-bookmark"></i> 
                        </div>
    
                        </div>
    
                        <div className={styles.center}>
                            <div className={styles.title}>
                            <p id="Pregunta2">Titulo: {this.props.title}</p>
                            </div>
                            <p>Descripción corta: </p>
                            <p>Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Officia eaque tempora minima 
                            doloribus aspernatur? 
                            Ipsum non expedita soluta fugit? Incidunt voluptates 
                            aperiam ex quia id esse eveniet velit vitae ipsam.</p>
    
                            <div className= {styles.InfoNoticia}>
                                <p>#Utiles</p>
                                <p>#NoUtiles</p>
                                <p>#Respuestas</p>                    
                            </div>
                   
                            <div className={styles.InfoUsuarioPreg}>
                                <div className={styles.time}>
                                <p>posted 1 min ago</p>
                                </div>
                                <div className={styles.infoP}>
                                <img src="/Media/default-.jpg" 
                                alt="" width="90" height="72"/>
                                <p id="User2">Usuario</p>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
                  </div>
    
            </div>
        );
    }
    
}

export default QuestionInfo;




// export function QuestionInfo(){
//     return (
//         <div className={styles.InfoPregunta}>
//               <div className={styles.Noticia}>

//                 <div className={styles.bodyN}>

//                     <div className={styles.leftv}>
                    
//                     <i className="fas fa-angle-up"></i>
//                     <h2 id= "valueV1" >0</h2>
//                     <i className="fas fa-angle-down"></i>
//                     <p>No util</p>
//                     <i className="fas fa-angle-up"></i>
//                     <h2 id= "valueV1" >0</h2>
//                     <i className="fas fa-angle-down"></i>
//                     <p>Util</p>

//                     <div className={styles.fav}>
//                         <i className="far fa-bookmark"></i> 
//                     </div>

//                     </div>

//                     <div className={styles.center}>
//                         <div className={styles.title}>
//                         <p id="Pregunta2">Titulo: {this.props.title}</p>
//                         </div>
//                         <p>Descripción corta: </p>
//                         <p>Lorem ipsum dolor, sit amet consectetur 
//                         adipisicing elit. Officia eaque tempora minima 
//                         doloribus aspernatur? 
//                         Ipsum non expedita soluta fugit? Incidunt voluptates 
//                         aperiam ex quia id esse eveniet velit vitae ipsam.</p>

//                         <div className= {styles.InfoNoticia}>
//                             <p>#Utiles</p>
//                             <p>#NoUtiles</p>
//                             <p>#Respuestas</p>
//                             <p>Categorias: </p>                     
//                         </div>
            
//                         <div className={styles.imgPregunta}>
//                             <img src="Media/pug.jpg" alt=""/>
//                             <img src="Media/MOnkey.jpg" alt=""/>
//                         </div>

//                         <div className={styles.InfoUsuarioPreg}>
//                             <div className={styles.time}>
//                             <p>posted 1 min ago</p>
//                             </div>
//                             <div className={styles.infoP}>
//                             <img src="/Media/default-.jpg" 
//                             alt="" width="90" height="72"/>
//                             <p id="User2">Usuario</p>
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//               </div>

//         </div>
//     );
// }