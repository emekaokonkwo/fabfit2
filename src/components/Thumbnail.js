import React from 'react';

const Thumbnail = ({ pane, onButtonClick }) => {

  return (
    
      <button
        onClick={() => onButtonClick(pane)}
        style={{ width: '40px', height: '40px', background: 'lightblue', border: '0.2px solid black', padding: '30px', margin: '3px', }}>
      </button>
   
  )
}


export default Thumbnail;