import React from 'react';
import logoURL from '../img/logo.svg';
import parcelBackURL from '../img/parcel-back.png';
import parcelFrontURL from '../img/parcel-front.png';

const Main = () => {
  return (
    <div>
      <h1>
        <img className="logo" src={logoURL} alt="Parcel" />
      </h1>
      <p class="subtitle">Blazing fast, zero configuration web application bundler</p>
      <div className="parcel">
        <img src={parcelBackURL} />
        <img src={parcelFrontURL} />
      </div>
    </div>
  );
};

export default Main;
