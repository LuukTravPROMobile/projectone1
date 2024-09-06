import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import axios from 'axios';

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [position, setPosition] = useState(['27.664827', '-83.915754']); // start position




  // collection of data from API server whenever the position or zoom changes
  const fetchLocations = async () => {
    try {
      const response = await axios.get('why is this still working ?');
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  const MyComponent = () => {
    const map = useMapEvent('moveend', () => {
      const center = map.getCenter();
      setPosition([center.lat, center.lng]);
      fetchLocations();
    });

    return null;
  };


  
  useEffect(() => {
    fetchLocations();
  }, []);
// let the people see where they zoom in or chance position.
  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, idx) => (
        <Marker key={idx} position={[location.latitude, location.longitude]}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      ))}
      <MyComponent />
    </MapContainer>
  );
};

export default Map.js;
