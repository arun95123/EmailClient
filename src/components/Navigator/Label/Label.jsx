import React from 'react';
import PropTypes from 'prop-types';
import Mail from '../../../images/mail.svg';
import './label.scss';

const Label = ({name}) => (
	<div className="label">
		<img alt='label' src={Mail} />
		<p>{name}</p>
	</div>
);

Label.propTypes = {
	name: PropTypes.string.isRequired
};

export default Label;