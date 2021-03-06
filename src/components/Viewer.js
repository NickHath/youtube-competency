// COMP 37E-1
import React, { Component } from 'react';
import Video from './Video';

import { connect } from 'react-redux';
import { getVideos } from '../ducks/reducer';

import { Link } from 'react-router-dom';

class Viewer extends Component {
  // COMP 36I
  constructor() {
    super();
    this.state = { term: '' }
    // COMP 37C
    // this.retrieveVideos = this.retrieveVideos.bind(this);
  }

  handleInput(input) {
    this.setState({ term: input });
  }

  retrieveVideos(term) {
    this.props.getVideos(term);
  }

  // COMP 36G
  render() {
    console.log('VIEWER STATE', this.state);
    console.log('VIEWER PROPS', this.props);
    // COMPS 36E, 36H
    const videos = this.props.videos.map(video => {
      return <Video video={ video }/>
    })
    return(
      <div className='viewer-wrapper'>
      I'm the viewer
      {/* COMP 36J */}
      <button onClick={ () => this.retrieveVideos(this.state.term) }>GET VIDEOS</button>
      {/* COMP 42E */}
      <Link to={ `/all/${this.state.term}` }><button>See previously searched videos using this term</button></Link>
      {/* COMP 37D */}
      <input onChange={ e => this.handleInput(e.target.value) }/>
      { videos }
      </div>
    )
  }
}

// COMP 43H, 43G
function mapStateToProps(state) {
  return state;
}

// COMP 43J
function mapDispatchToProps() {
  return { getVideos };
}

// COMPS 37E-2, 43C 
export default connect(mapStateToProps, mapDispatchToProps)(Viewer);