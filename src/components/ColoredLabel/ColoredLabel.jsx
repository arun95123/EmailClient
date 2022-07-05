import React from 'react';
import PropTypes from 'prop-types';
import './colored-label.scss';

const ColoredLabel = ({text, color}) => {
	const colorMap = {
		'red': 'red-label',
		'yellow': 'yellow-label',
		'blue': 'blue-label'
	};

	return (
		<div className={`colored-label ${colorMap[color]}`}>{text}</div>
	);
};

ColoredLabel.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	color: PropTypes.string,
};

ColoredLabel.defaultProps = {
	color: 'red'
};

export default ColoredLabel;