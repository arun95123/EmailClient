import React from 'react';
import PropTypes from 'prop-types';
import './navigator-item.scss';

const NavigatorItem = ({image, imageAlt, header, count, showDivider}) => (
	<div className="navigator-item">
		<div className="navigator-item__content">
			<div className="navigator-item__content-wrapper">
				<div className="navigator-item__content__image">
					<img src={image} alt={imageAlt}  />
				</div>
				<h5 className="navigator-item__content__header">{header}</h5>
			</div>
			{count && <div className="navigator-item__content__count">{count}</div>}
		</div>
		{showDivider && <hr className="navigator-item__divider"/>}
	</div>
);

NavigatorItem.propTypes = {
	image: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	count: PropTypes.number,
	showDivider: PropTypes.bool,
};

NavigatorItem.defaultProps = {
	count: null
};

export default NavigatorItem;