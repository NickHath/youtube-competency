// COMP 37E-1
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getVideos } from '../ducks/reducer';

class Viewer extends Component {
  // COMP 36I
  constructor() {
    super();
    this.state = { term: '' }
  }

  handleInput(input) {
    this.setState({ term: input });
  }

  retrieveVideos() {
    let results = this.props.getVideos();
  }

  // COMP 36G
  render() {
    console.log('STATE', this.state);
    console.log('PROPS', this.props);
    return(
      <div className='viewer-wrapper'>
      I'm the viewer
      {/* COMP 37D, 36J */}
      <button onClick={ () => this.retrieveVideos() }>GET VIDEOS</button>
      <input onChange={ e => this.handleInput(e.target.value) }/>
      </div>
    )
  }
}

// COMP 43H
function mapStateToProps(state) {
  return state;
}

// COMPS 37E-2, 43C 
export default connect(mapStateToProps, { getVideos })(Viewer);