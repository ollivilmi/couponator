import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes, toggleView } from '../actions/boxActions';
import { BOX_VIEW } from '../actions/types';

import './styles/app.css';
import Box from "./Box";

const BoxView = props => {
    const boxElements = props.boxes.map(box => (
        <Box key={box.id} title={box.title} amount={box.amount} progress={box.progress}/>
    ));
    return (
        <div className="container">
            {boxElements}
        </div>
    )
}


class Container extends Component {
    componentWillMount() {
        this.props.toggleView(BOX_VIEW);
        this.props.fetchBoxes();
    }

    render() {
        switch (this.props.view) {
            case BOX_VIEW:
                return <BoxView boxes={this.props.boxes} />
            default:
                return <p>Internal error</p>
        }
    }
}

Container.propTypes = {
    fetchBoxes: PropTypes.func.isRequired,
    boxes: PropTypes.array.isRequired,
    toggleView: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    boxes: state.container.boxes,
    view: state.container.view
});

export default connect(mapStateToProps, { fetchBoxes, toggleView })(Container);