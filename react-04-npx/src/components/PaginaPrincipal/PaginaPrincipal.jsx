import React,{ Component }  from 'react';

import {} from 'bootstrap'
import styles  from '../PaginaPrincipal/PaginaPrincipal.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { AskBtn } from '../AskBtn/AskBtn';
import QuestionPaginaPrincipal from '../QuestionPaginaPrincicpal/QuestionPaginaPrincipal';

class PaginaPrincipal extends Component{

  render(){
    return (
        <div className={styles.container}>
        
          <div className={styles.content}>
            
              <div className={styles.mainbar}>
                  <Container>
                          <Row md={4}>
                              <Dropdown>
                                <Dropdown.Toggle variant="warning">
                                Open Menu
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    Casa
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Videojuegos
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Tecnología
                                </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className={styles.ask}> 
                                  <AskBtn>Ask question</AskBtn>
                              </div>
                          </Row>
                  </Container>
                  <div className={styles.Todo}>
                    
                    <div className={styles.SeccionNoticias}>
                      <QuestionPaginaPrincipal></QuestionPaginaPrincipal>
                      <QuestionPaginaPrincipal></QuestionPaginaPrincipal>
                      <QuestionPaginaPrincipal></QuestionPaginaPrincipal>
                      <QuestionPaginaPrincipal></QuestionPaginaPrincipal>
                    </div>

                    <div className={styles.containerpag}>
                      <div className={styles.pagination}>
                        <ul>  </ul>
                      </div>
                    </div>

                  </div>
              </div>
              
          </div>

        </div>
    );
  }
   
}



export default PaginaPrincipal;

