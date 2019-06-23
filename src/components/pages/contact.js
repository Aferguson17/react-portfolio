import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/images/contact/contact.jpg";


export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
        style={{
          background: "url(" + contactPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">602-708-7545</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">ashley.ferguson1218@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Peoria, AZ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
