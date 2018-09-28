// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

/**
 * @file components/presentational/Avatar/index.js
 * @module components/presentational/Avatar
 * @desc This is the stateless functional component for Center.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Avatar component
 * @example
 * <Avatar name={profileName} photoUrl={photoUrl} profEmail={emails.prof} codeEmail={emails.code} />
 */
const Avatar = ({ name = 'John Doe', photoUrl = '', profEmail = '', codeEmail = '', showInfo = false, info = '' }) => (
    <div className="app-avatar">
        <img 
            className="photo" 
            src={photoUrl}
            alt="Profile Name" />
        <h1 className="name">{name}</h1>
        <p>
            <span className="link">{profEmail}</span>            
            <span className="devider">&nbsp;/&nbsp;</span>            
            <span className="link">{codeEmail}</span>
        </p>
        { showInfo && <p className="info"><span className="quote">&ldquo;</span>{info}<span className="quote">&rdquo;</span></p> }
        
    </div>
);

/**
 * @name Avatar PropTypes
 * @memberof components/presentational/Avatar
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {String} name         - Profile name
 * @param {String} photoUrl     - Profile url photo
 * @param {String} profEmail    - Profile profesional email
 * @param {String} codeEmail    - Profile code email
 * @param {Boolean} showInfo    - Show Profile info logan
 * @param {String} info         - Profile info logan
 * @return {Array} React PropTypes
*/
Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    profEmail: PropTypes.string.isRequired,
    codeEmail: PropTypes.string.isRequired,
    showInfo: PropTypes.bool,
    info: PropTypes.string
};

export default Avatar;