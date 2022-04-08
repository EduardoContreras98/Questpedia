import React,{ Component }  from 'react';
import ReactDOM from 'react-dom';

import {} from 'bootstrap'
import styles  from '../HacerPregunta/HacerPregunta.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

class HacerPregunta extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);

  }
  handleClick(){
    alert('Pregunta relizada con exito');
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <div className={styles.container}>
      
      <div className= {styles.qform}>
            <div className= {styles.qhead}>
                <h5>Titulo</h5>
                <p>Be specific and imagine you’re asking a question to another person</p>
                <div className= {styles.inputgroup}>
                  <textarea name="" id="" 
                  className={styles.formcontrol} 
                   placeholder="Titulo">{this.props.TituloPregunta}</textarea>
                </div>
            </div>
            <div className={styles.qbody}>
                <h5>Body</h5>
                <p>Include all the information someone would need to answer your question</p>
                <div className={styles.textcontainer}>

                  <div className={styles.inputgroup}>
                    <textarea className = "qtextarea form-control" 
                    name="" id=""  placeholder="">{this.props.CuerpoPregunta}</textarea>
                  </div>
                  

                </div>
            </div>
            <br/>
            <Dropdown>
                <Dropdown.Toggle variant="warning">
                Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#">
                    Videojuegos
                </Dropdown.Item>
                <Dropdown.Item href="#">
                    Hogar
                </Dropdown.Item>
                <Dropdown.Item href="#">
                    Tecnología
                </Dropdown.Item>
                </Dropdown.Menu>
             </Dropdown>
             <br/><br/>
            <Button variant="secondary" onClick={this.handleClick}>
                Review your question
            </Button>
      </div>
     
    </div>
  );
  }
    
}

export default HacerPregunta;

