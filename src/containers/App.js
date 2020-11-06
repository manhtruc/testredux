import React, { Component } from 'react';
import { connect } from 'react-redux'
import News from '../components/News';

class App extends Component {
  render() {

    return (
      <div>
        <h1>Torres</h1>
        {this.props.num}
        <News />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    num: state.num
  }
}

export default connect(mapStateToProps)(App);