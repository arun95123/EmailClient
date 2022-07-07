import React from 'react';
import PropTypes from 'prop-types';
import './navigator-item.scss';
import ColoredLabel from '../../ColoredLabel';

const NavigatorItem = ({image, imageAlt, header, count, countColor, showDivider, classname}) => (
	<div className={`navigator-item ${classname}`}>
		<div className="navigator-item__content">
			<div className="navigator-item__content-wrapper">
				<div className="navigator-item__content__image">
					<img src={image} alt={imageAlt}  />
				</div>
				<h5 className="navigator-item__content__header">{header}</h5>
			</div>
			{count > 0 ? <ColoredLabel text={count} color={countColor}/> : <></>}
		</div>
		{showDivider && <hr className="navigator-item__divider"/>}
	</div>
);

NavigatorItem.propTypes = {
	image: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	count: PropTypes.number,
	countColor: PropTypes.string,
	showDivider: PropTypes.bool,
	classname: PropTypes.string,
};

NavigatorItem.defaultProps = {
	count: null,
	countColor: null,
	classname: ''
};

export default NavigatorItem;