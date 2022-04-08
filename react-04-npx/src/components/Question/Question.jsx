import React,{ Component }  from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './Question.module.css';
import  QuestionInfo  from '../QuestionInfo/QuestionInfo';
import  Answer  from '../Answer/Answer';
import AnswerForm from '../AnswerForm/AnswerForm';


class Question extends Component{

    constructor(props){
        super(props);
        this.state={
            counter:5
        }
        setInterval(() => {
            this.setState({
                counter:this.state.counter+1   
            })
        }, 1000);
    }
    

    render(){
    return (
        <div className={styles.container}>
             <div className={styles.content}>
                <div className={styles.mainbar}>
                    <div className={styles.todo}>
                        <div className={styles.InfoPregunta}>
                            <QuestionInfo
                            title={this.props.title}
                            InfoPregunta={this.props.InfoPregunta}
                            Usuario={this.props.Usuario}
                            Util={this.props.Util}
                            NoUtil={this.props.NoUtil}
                            ></QuestionInfo>
                        </div>
                        <h3>
                            Numero respuestas: 
                            {this.state.counter}</h3>
                        <div id="AreaRespuestas">
                            <div class="Respuestas">
                                <Answer></Answer>
                            </div>
                        </div>
                        <hr></hr>
                        <AnswerForm></AnswerForm>
                    </div>
                </div>
             </div>
        </div>
    );
    }
    
}

export default Question




// export function Question(){
//     debugger;
//     const numRespuestas = props => <p>{props.NumeroRespuestas}</p>
//     return (
//         <div className={styles.container}>
//              <div className={styles.content}>
//                 <div className={styles.mainbar}>
//                     <div className={styles.todo}>
//                         <div className={styles.InfoPregunta}>
//                             <QuestionInfo></QuestionInfo>
//                         </div>
//                         <h3>
//                             Numero respuestas: 
//                             {numRespuestas}</h3>
//                         <div id="AreaRespuestas">
//                             <div class="Respuestas">
//                                 <Answer></Answer>
//                             </div>
//                         </div>
//                         <hr></hr>
//                         <AnswerForm></AnswerForm>
//                     </div>
//                 </div>
//              </div>
//         </div>
//     );
// }