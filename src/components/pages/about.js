import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
    <div className="left-column" 
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
    <div className="right-column">
    <p>Duis sollicitudin est et faucibus bibendum. Suspendisse sed rutrum nulla. 
    Praesent feugiat in nisi vitae sagittis.</p> 
    
    <p>Vestibulum viverra commodo dui, ac varius massa tempor vel. Suspendisse facilisis sapien quam, non viverra quam rhoncus condimentum. 
    Praesent fringilla sodales orci, vel lobortis eros varius vitae. Nam tempor semper suscipit. Vestibulum maximus risus nisl, et malesuada mi fringilla vel. 
    Vestibulum arcu metus, consequat sit amet velit in, egestas ullamcorper leo. </p>

    <p>Morbi non congue augue. Donec bibendum rhoncus augue, et bibendum lectus fermentum et. 
    Nulla tincidunt elementum nulla, ac porttitor lorem convallis quis. 
    Nulla facilisi. Vestibulum imperdiet neque rutrum massa sagittis gravida.</p>
    </div>
    </div>
  )
}