import React from 'react';
import ThumbnailDetail from './ThumbnailDetail';

const ThumbnailDetailList = ({ selectedPane }) => {
  if (!selectedPane) {
    return <div></div>
  }
  const renderedPane = selectedPane.map(pane => {
    return <ThumbnailDetail selectedPane={pane} />
  })

  return (
      <div className="ui three column grid">
        {renderedPane}
      </div>
  )

}





export default ThumbnailDetailList;