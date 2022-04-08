import React,{ Component }  from 'react';
import Styles from '../ContainerRegistroLogin/ContainerRegistroLogin.module.css'
import {} from 'bootstrap'


class ContainerRegistroLogin extends Component{
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
        //this.div.appendChild(script);  
    return (
        <div className= {Styles.container}>
           <div className = {Styles.cajaBack}>
              <div className = {Styles.Cajalogin}>
                  <h3>¿Ya tienes una cuenta?</h3>
                  <h5>Inicia sesion</h5>
                  <button className={Styles.btn} 
                  id = "btn-Log"> Inicar sesion</button>
              </div>
              <div className = {Styles.CajaRegister}>
                 <h3>¿No tienes una cuenta?</h3>
                 <h5>regístrate</h5>
                 <button className={Styles.btn} 
                 id = "btn-Reg">regístrarse</button>
              </div>
            </div>

            <div className= {Styles.containerLogReg}>
                <form action="" className={Styles.Formlog}>
                    <h2>Inicar sesion</h2>
                    <input type="text" className= {Styles.formcontrol} 
                    placeholder="Correo Electronico"></input>
                    <input type="password" className={Styles.formcontrol}
                     placeholder="Contraseña"></input>
                    <button className="btn signin">Entrar</button>
                </form>
                <form action="" className={Styles.FormReg}>
                    <h2>Registarse</h2>
                    <input type="text" className={Styles.formcontrol}
                     placeholder="Nombre Completo"></input>
                    <input type="text" className= {Styles.formcontrol}
                     placeholder="Correo Electronico"></input>
                    <input type="text" className={Styles.formcontrol}
                     placeholder="Usuario"></input>
                    <input type="password" className={Styles.formcontrol} 
                    placeholder="Contraseña"></input>
                    <button className="btn signup">regístrarse</button>
                </form>
           </div> 
           
           </div>
           
    );
      }
}


export default ContainerRegistroLogin;

