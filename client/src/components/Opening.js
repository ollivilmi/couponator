import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleOpening } from '../actions/boxActions';

class Opening extends Component {
    render() {
        return (
            <div>
                Opening
                <button onClick={this.props.toggleOpening}>Toggle</button>
            </div>
        )
    }
}

Opening.propTypes = {
    toggleOpening: PropTypes.func.isRequired,
    isOpening: PropTypes.bool.isRequired
}
  
const mapStateToProps = state => ({
isOpening: state.container.opening
});

export default connect(mapStateToProps, { toggleOpening })(Opening);
