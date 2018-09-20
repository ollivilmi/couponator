import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes } from '../actions/boxActions';

import './styles/app.css';
import Box from "./Box";

class Container extends Component {
    componentWillMount() {
        this.props.fetchBoxes();
    }

    render() {
        const boxElements = this.props.boxes.map(box => (
            <Box key={box.id} title={box.title} amount={box.amount} progress={box.progress}/>
        ));
        return (
        <div className="container">
            {boxElements}
        </div>
        )
    }
}

Container.propTypes = {
    fetchBoxes: PropTypes.func.isRequired,
    boxes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    boxes: state.boxes.contents
});

export default connect(mapStateToProps, { fetchBoxes })(Container);