import React from 'react';
import logo from './TravPROMobile2024_logo.png';
import qrCode from './travpromobile-thesource-qrcode-1600x1600.png';
import lasVegasMap from './Las-Vegas-Road-Map-1265x1265.jpg';
import theSourcePoster from './thesource-app-poster.jpg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './fontawesome';
// Header
import React from 'react';
import logo from './logo';
import qrCode from './qrCode';

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-4 border-black pb-4">
      <div className="flex items-center">
        <img src={logo} alt="TravPRO Mobile Logo" className="w-17 h-16" />
      </div>
      <div className="flex space-x-4">
        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded">home</a>
        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded">training</a>
        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded">travels</a>
      </div>
      <div>
        <img src={qrCode} alt="QR code" className="w-40 h-45" />
      </div>
    </div>
  );
};



// LeftColumn
import React from 'react';

const LeftColumn = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-2/3">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="bg-orange-500 p-4 text-white">
          <p>info over het adres van bestemming</p>
          <a href="#" className="text-blue-400">map</a>
        </div>
      ))}
    </div>
  );
};

// RightColumn
import React from 'react';
import lasVegasMap from './lasVegasMap';
import theSourcePoster from './theSourcePoster';
import screenshot from './screenshot';

const RightColumn = () => {
  return (
    <div className="w-1/3 ml-4">
      <div className="mb-4">
        <img src={lasVegasMap} alt="Map of Las Vegas with markers" className="w-full h-auto" />
      </div>
      <div>
        <img src={theSourcePoster} alt="The SOURCE - The Travel Advisor Super-app" className="w-full h-auto" />
      </div>
      <div>
        <img src={screenshot} alt="The SOURCE - The Travel Advisor Super-app" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default web
