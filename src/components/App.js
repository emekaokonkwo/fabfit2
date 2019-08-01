import React from 'react';
import ThumbnailList from './ThumbnailList';
import ThumbnailDetailList from './ThumbnailDetailList';

const Panes = [
  {
    id: 'pane1',
    description: 'Lorem ipsum 1'
  },
  {
    id: 'pane2',
    description: 'Lorem ipsum 2'
  },
  {
    id: 'pane3',
    description: 'Lorem ipsum 3'
  },
  {
    id: 'pane4',
    description: 'Lorem ipsum 4'
  }, {
    id: 'pane5',
    description: 'Lorem ipsum 5'
  }, {
    id: 'pane6',
    description: 'Lorem ipsum 6'
  },
]

let xPane = []


class App extends React.Component {
  state = {
    panes: Panes,
    selectedPane: null
  };


  onButtonClick = (pane) => {
    if (xPane.length > 2) {
      xPane = []
    }
    xPane.unshift(pane)
    this.setState({ selectedPane: xPane })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
          
            <ThumbnailDetailList selectedPane={this.state.selectedPane} />
        
        <br />
        <br />
        <div>
          <ThumbnailList onButtonClick={this.onButtonClick} panes={this.state.panes} />
        </div>
      </div>
    )
  }
}



export default App;