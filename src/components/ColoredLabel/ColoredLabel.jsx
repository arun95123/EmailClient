import React from 'react';
import PropTypes from 'prop-types';
import './colored-label.scss';

const ColoredLabel = ({text, color, classname}) => {
	const colorMap = {
		'red': 'red-label',
		'yellow': 'yellow-label',
		'blue': 'blue-label'
	};

	return (
		<div className={`colored-label ${colorMap[color]} ${classname}`}>{text}</div>
	);
};

ColoredLabel.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	color: PropTypes.string,
	classname: PropTypes.string,
};

ColoredLabel.defaultProps = {
	color: 'red',
	classname: '',
};

export default ColoredLabel;