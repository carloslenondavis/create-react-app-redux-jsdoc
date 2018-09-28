// #region load dependencies
import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// #endregion
// #region load components
import Avatar from './../../presentational/Avatar';
import { getInfo } from './../../../services/profileSvc';
// #endregion

/**
 * @file components/containers/App/index.js
 * @class components/containers/App
 * @extends React.Component
 * @classdesc This is the main app component. Were all the views and controls are loaded. This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <App />
 */
class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getInfo());
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/App
   * @description Render all components
   * @return {JSX} Components for App 
   */
  render() {
    const profileName = 'Carlos Lenon',
      photoUrl = 'https://avatars0.githubusercontent.com/u/4239218?s=400&u=f2778b9e2ca31ad43ff98c632f2e22e15ab46784&v=4',
      emails = {
        prof: 'dev@carloslenon.com',
        code: 'code@carloslenon.com',
      };
    const { showProfileInfo, profileInfo } = this.props;

    return (
        <Avatar 
          name={profileName} 
          photoUrl={photoUrl} 
          profEmail={emails.prof} 
          codeEmail={emails.code} 
          showInfo={showProfileInfo} 
          info={profileInfo} />
    );
  }
}

/**
   * @function
   * @name mapStateToProps
   * @memberof components/containers/App
   * @description Set props to state
   * @param {Object} state    - list of state
   * @return {Object} state from store 
   */
const mapStateToProps = state => ({
  showProfileInfo: state.profile.showProfileInfo,
  profileInfo: state.profile.info
});

App.propTypes = {
  showProfileInfo: PropTypes.bool,
  profileInfo: PropTypes.string
}

export default withRouter(connect(mapStateToProps)(App));