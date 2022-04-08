/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ Component }  from 'react';
import Styles from '../Footer/Footer.module.css';
import {} from 'bootstrap'
class Footer extends Component{

    render(){
        return (
            <footer>
            <div className = {Styles.containerfooter}>
                <div className= {Styles.Rowfooter}>
    
                    <div className= {Styles.Footer1}>
                            <h1>ABOUT US</h1>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Cupiditate officiis 
                                optio dolore ipsa quaerat. 
                                Facilis repellat nesciunt blanditiis. 
                                Totam </p>
                    </div>
    
                    <div className= {Styles.Footer2}>
                            <h1>CONNECT WITH US</h1>
                            
                            <div className= {Styles.SocaialRow}>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <label >Follow us on Facebook</label>
                            </div>
                            <div className = {Styles.SocaialRow}>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <label>Follow us on Twitter</label>
                            </div>
                            <div className = {Styles.SocaialRow}>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <label>Follow us on Instragram</label>
                            </div>
                            <div className = {Styles.SocaialRow}>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                            <label >Follow us on Pinteres</label>
                            </div>
    
                    </div>
    
                    <div className = {Styles.Footer3}>
                        <h1>CONTACT US</h1>
                        <div className={Styles.ContactRow1}>
                            <a href="#"><i className="fas fa-mobile-alt"></i></a>
                            <label>+1-809-395-2064</label>
                        </div>
                        <div className= {Styles.ContactRow1}>
                            <a href="#"><i className="fas fa-envelope"></i></a>
                            <label>MentalBlow@hotmail.com</label>
                        </div>
                        <div className= {Styles.ContactRow1}>
                            <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                            <label>HERE</label>
                        </div>
                    </div>
                </div>   
            </div>
            
            <div className = {Styles.containerbotfooter}>
              <div className={Styles.Copyright}>
                <a href="#"><i className="far fa-copyright"></i></a>
                <p>MentalBlow.com, Inc. All rights reserved</p>
              </div>
              <div className = {Styles.infoFooter}>
                <a href="#">Terms & Conditions</a> ǀ <a href="#">
                    Frequently Asked Questions</a> 
              </div>
            </div>
    
        </footer>
        );
    }
    
}


export default Footer;

