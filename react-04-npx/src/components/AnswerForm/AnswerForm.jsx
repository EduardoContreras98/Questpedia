import React,{ Component }  from 'react';
import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './AnswerForm.module.css';
import { AskBtn } from '../AskBtn/AskBtn';

class AnswerForm extends Component{

    constructor(props){
        super(props);
       
      }

    componentDidMount(){
    
    }

    render(){
        return (
     
            <div className={styles.qform}>
               <br />
            <div className={styles.qhead}>
                <h5>Titulo</h5>
                <p>Be specific and imagine you’re asking a question to another person</p>
                <textarea name="" id=""  placeholder="Titulo"></textarea>
            </div>
            <div className={styles.qbody}>
                <h5>Body</h5>
                <p>Include all the information someone would
                   need to answer your question</p>
                
                  <textarea
                  name="" id=""  placeholder=""></textarea>
            </div>
            <h5>Tags</h5>
                <p>Add tags to describe what your question is about</p>
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
            <br />
            <AskBtn>Review answer</AskBtn>
            <br />
          </div>
          );
    }
    
}


export default AnswerForm;

