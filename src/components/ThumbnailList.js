import React from 'react';
import Thumbnail from './Thumbnail';


const ThumbnailList = ({ panes, onButtonClick }) => {
  const renderedPane = panes.map(pane => {
    return <Thumbnail onButtonClick={onButtonClick} key={pane.id} pane={pane} />
  })
  return (
    <div>
      {renderedPane}
    </div>
  )
}


export default ThumbnailList;