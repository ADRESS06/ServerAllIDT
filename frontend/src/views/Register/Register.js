import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='register'>
        <div class="formulario">
            <h4>Formulario de registro</h4>
            <div class="caja">
                <div class="caja2">
                    <input class="cubo" type=" text" name="nombres" id="nombres" placeholder="Nombre"/>
                    <input class="cubo_info" type="text"  name="nombres" id="nombres" placeholder="Informacion"/>
                </div>
                <div class="caja3">
                   <h4>Inserte tu imagen</h4>
                   <input class="foto" type="file" name="foto"/>
                </div>
            </div>
                <input class="boton_r" type="submit" value="Registro"/>
        </div>
        
    </div>
  )
}

export default Register