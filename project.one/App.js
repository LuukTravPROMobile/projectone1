import React from 'react';
import 'project.one/my-api/Map.js';
import Map from 'project.one/Map.js';


import React, { useEffect, useState } from 'react';

// App.js
import React from 'react';
import Header from 'web/Header';
import LeftColumn from 'web/LeftColumn';
import RightColumn from 'web/RightColumn';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="flex mt-8">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default App;

