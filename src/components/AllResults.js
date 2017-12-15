import React, { Component } from 'react';

export default class AllResults extends Component {
  constructor() {
    super();
    // COMP 36C
    this.state = { term: '' }
  }

  componentDidMount() {
    // COMP 42J, 42K, 36D
    this.setState({ term: this.props.match.params.term })
  }

  // COMP 36F
  render() {
    console.log('ALLRESULTS STATE', this.state);
    console.log('ALLRESULTS PROPS', this.props);
    return (
      <div className='all-results-wrapper'>
        I'm the AllResults component
      </div>
    )
  }
}