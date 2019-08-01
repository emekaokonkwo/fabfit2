import React from 'react';

const image = <img src="https://placehold.it/50" />

const ThumbnailDetail = ({ selectedPane }) => {

  return (
    <div className="column" >
      <div className="ui segment" >
        {image}
        <div className="content">
          <div>{selectedPane.id}</div>
          <div>{selectedPane.description}</div>
        </div>
      </div>

    </div>
  )
}


export default ThumbnailDetail;