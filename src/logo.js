import React from 'react';
import {  BsBell  } from 'react-icons/bs'; 


// import { FaCloud } from 'react-icons/fa';// Import the bell icon from react-icons


const BellIcon = () => {
  return (
   <div style={{ maxHeight: '100px', padding:'8px'}}>
      < BsBell  color="white" size={16} /> {/* Change color and size as needed */}
     
      
    </div>
    
  );
};

export default BellIcon;
