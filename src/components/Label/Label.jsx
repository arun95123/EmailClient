import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const Label = ({name, image, imageAlt, onClick}) => (
	<div className="label" onClick={onClick}>
		{image && <img alt={imageAlt} src={image} />}
		{name && <p className='label__text' >{name}</p>}
	</div>
);

Label.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	onClick: PropTypes.func,
};

Label.defaultProps = {
	name: null,
	image: null,
	imageAlt: 'decorative',
	onClick: () => {}
};

export default Label;