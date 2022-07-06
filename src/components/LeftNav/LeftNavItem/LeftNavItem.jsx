import React from 'react';
import PropTypes from 'prop-types';
import './left-nav-item.scss';

const LeftNavItem = ({icon, iconAlt, selected, highlight, heading}) => (
	<div className={`left-nav-item ${selected ? 'selected' : ''} ${highlight ? 'highlight': ''}`}>
		<img src={icon} alt={iconAlt}/>
		{heading && <h6>{heading}</h6>}
	</div>
);

LeftNavItem.propTypes = {
	icon: PropTypes.string.isRequired,
	iconAlt: PropTypes.string.isRequired,
	heading: PropTypes.string,
	selected: PropTypes.bool,
	highlight: PropTypes.bool,
};

LeftNavItem.defaultProps = {
	selected: false,
	highlight: false,
	heading: null,
};

export default LeftNavItem;