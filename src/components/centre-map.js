import React, { Component } from 'react';
import jmap from 'jmap.js'
import { JibestreamMapContext } from '../context'
import '../App.css';

class CentreMap extends Component {
  mapHolder = React.createRef();

  componentDidMount() {
    const { activeVenue } = this.context;

    const height = this.mapHolder.current ? this.mapHolder.current.clientHeight : undefined;
    const width = this.mapHolder.current ? this.mapHolder.current.clientWidth : undefined;

    this.control = new jmap.JController({
      activeVenue,
      container: '#map', // where the map lives
      forceCanvas: true, // SCALA doesn't support webgl
      height,
      width,
    });
    this.control.parseAllMaps();
    this.control.showDefaultMap();
  }
  componentWillUnmount() {
    delete this.control;
  }

  render() {
    return (
      <div className="Map-container">
       <p>Map lives here</p>
        <div
          id='map'
          ref={this.mapHolder}
          className="Map-holder"
        />
      </div>
    )
  }
}
CentreMap.contextType = JibestreamMapContext;

export default CentreMap;
