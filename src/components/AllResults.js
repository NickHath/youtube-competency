import React, { Component } from 'react';

export default class AllResults extends Component {
  constructor() {
    super();
    this.state = { term: '' }
  }

  componentDidMount() {
    // COMP 42J, 42K
    this.setState({ term: this.props.match.params.term })
  }

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