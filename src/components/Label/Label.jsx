import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const Label = ({name, image, imageAlt}) => (
	<div className="label">
		{image && <img alt={imageAlt} src={image} />}
		{name && <p className='label__text' >{name}</p>}
	</div>
);

Label.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
};

Label.defaultProps = {
	name: null,
	image: null,
	imageAlt: 'decorative',
};

export default Label;