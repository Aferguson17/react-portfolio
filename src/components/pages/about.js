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
    <p>My name is Ashley Ferguson and I am a native to Arizona. I attended Arizona State University for a bachelor's degree in English and San Jose State University for a master's in Library and Information Science.</p> 
    
    <p>My background in technology began when I worked for a tech store in the electronic components department. I taught myself what each product did by reading about each item and eventually learned how to build computers form scratch. 
      It wasn't until later where I realized that this was the field that I wanted to work in. I made a trasition from non-profits to software in 2017. I have worked in QA for the last two years for Naviga, and have gaind experience in JIRA, Selenium, Jenkins and Postman.</p>

    <p>The next big venture I would like ot make is to transition into software development. I was given the incredible opportunity to ex[pand what I have learned about web programming through Bottega. A software company called Axosoft sponsored a scholarship to attend Bottega to become a full-stacked devloper.</p>
    </div>
    </div>
  )
}