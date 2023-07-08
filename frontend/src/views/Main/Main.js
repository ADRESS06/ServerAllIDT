import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div>
        <header>
        <div class="one_up"></div>
        <div class="two_up"><h2>I<span>D</span>T</h2></div>
        <div class="three_up"></div>
    </header>

    <div class="contenido">
        <h2>Docentes</h2>
        <div class="Docentes"> 
            <div class="box" id="prt">1</div>
            <div class="box">2</div>
       </div>

       <h2>Practicantes</h2>
       <div class="Practicantes">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
      </div>
    </div>
    
    <footer>
        <div class="one_back"> <div>© 2023 ID Tolu. All rights reserved</div> </div>
        <div class="two_back"></div>
        <div class="three_back">
           <div class="git"><a href="https://github.com/Sxssxn"><p>Sxssan</p></a> </div>
           <div class="git"><a href="https://github.com/ADRESS06"><p>Adress06</p></a></div> 
        </div>
    </footer>
    </div>
  )
}

export default Main