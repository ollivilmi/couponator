import React, { Component } from 'react';
import './styles/app.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleView } from '../actions/viewActions';
import { BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW } from '../actions/types';

class Nav extends Component {
  componentWillMount() {
    this.props.toggleView(BOX_VIEW);
  }

  mapViews = () => {
    return this.props.views.map((view, index) => {
      return (
        <li key={index} className="nav-item">
          <a className={view === this.props.view ? "nav-link active" : "nav-link"} 
           onClick={() => this.props.toggleView(view)}
           >{view}</a>
        </li>
        );
      });
  }

  render() {
    return (
      <ul className="nav nav-pills nav-fill">
        { this.mapViews() }
      </ul>
    )
  }
}

Nav.propTypes = {
  toggleView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  views: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  view: state.nav.view,
  views: [
    BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW
  ]
});

export default connect(mapStateToProps, { toggleView })(Nav);