// COMP 37E-1
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getVideos } from '../ducks/reducer';

import { Link } from 'react-router-dom';

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
    console.log('VIEWER STATE', this.state);
    console.log('VIEWER PROPS', this.props);
    return(
      <div className='viewer-wrapper'>
      I'm the viewer
      {/* COMP 37D, 36J */}
      <button onClick={ () => this.retrieveVideos() }>GET VIDEOS</button>
      {/* COMP 42E */}
      <Link to={ `/all/${this.state.term}` }><button>See previously searched videos using this term</button></Link>
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