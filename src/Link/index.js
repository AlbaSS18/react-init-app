import React from 'react';
import PropTypes from 'prop-types'

const Link = props => <a href={props.to}>{props.label}</a>

Link.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

Link.defaultProps = {
    to: "https://google.com"
}

export default Link;
