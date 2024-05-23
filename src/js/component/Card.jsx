import React from 'react';

const Card = () => {

 return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
      <img src="https://miro.medium.com/v2/format:webp/0*ZjYSm_q36J4KChdn" className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Todo esta bien</h5>
          <p className="card-text">Aunque todo se queme manten la calma. Todo esta bien</p>
          <a href="#read-more" className="btn btn-primary">Pulsa pero tampoco va</a>
        </div>
      </div>
    </div>
  );
}


export default Card;