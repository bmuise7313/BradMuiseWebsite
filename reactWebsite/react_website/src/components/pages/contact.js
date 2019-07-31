import React from 'react';
import Resume from './images/Brad Muise Resume.pdf'

function contact() {
  return (
    <div className="container-fluid">
    <div className="boxed">

      <h1 align="center">
        Contact
      </h1>

      <p>
      Email: <a href="mailto:brad.muise03@gmail.com?Subject=Website%20Contact" target="_top">Brad.Muise03@gmail.com</a></p>

      <p>
      Phone: (226) 791-6364</p>

      <p>
      Find me on:
      <br></br>
      <a href="https://www.facebook.com/brad.muise.5">Facebook</a> <br></br>
      <a href="https://www.linkedIn.com/in/bradmuise">LinkedIn</a><br></br>
      </p>
      <p><a href={Resume} download>Download My Resume</a></p>


      </div>

    </div>
  );
}

export default contact;
