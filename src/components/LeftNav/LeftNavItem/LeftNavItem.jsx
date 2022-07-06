import React from 'react';
import PropTypes from 'prop-types';
import './left-nav-item.scss';

const LeftNavItem = ({icon, iconAlt, selected, highlight}) => (
	<div className={`left-nav-item ${selected ? 'selected' : ''} ${highlight ? 'highlight': ''}`}>
		<img src={icon} alt={iconAlt}/>
	</div>
);

LeftNavItem.propTypes = {
	icon: PropTypes.string.isRequired,
	iconAlt: PropTypes.string.isRequired,
	selected: PropTypes.bool,
	highlight: PropTypes.bool,
};

LeftNavItem.defaultProps = {
	selected: false,
	highlight: false,
};

export default LeftNavItem;