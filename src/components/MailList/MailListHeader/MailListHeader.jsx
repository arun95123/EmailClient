import React from 'react';
import PropTypes from 'prop-types';
import MailListHeaderSearch from './MailListHeaderSearch';
import Label from '../../Label';
import Refresh from '../../../images/refresh.svg';
import Eye from '../../../images/eye.svg';
import Priority from '../../../images/priority.svg';
import Trash from '../../../images/trash.svg';
import Back from '../../../images/back.svg';
import Forward from '../../../images/forward.svg';

import './mail-list-header.scss';

const MailListHeader = ({mailCount, mailHeader}) => (
	<div className='mail-list-header'>
		<div className="mail-list-header__row">
			<h2>{mailHeader}({mailCount})</h2>
			<MailListHeaderSearch />
		</div>
		<div className="mail-list-header__row">
			<div className="mail-list-header__row__actions">
				<Label name='Refresh' image={Refresh} imageAlt='refresh' />
				<Label image={Eye} imageAlt='read' />
				<Label image={Priority} imageAlt='priority' />
				<Label image={Trash} imageAlt='delete' />
			</ div>
			<div className="mail-list-header__row__page">
				<Label image={Back} imageAlt='back' />
				<Label image={Forward} imageAlt='forward' />
			</div>
		</div>
	</div>
);

MailListHeader.propTypes = {
	mailCount: PropTypes.number.isRequired,
	mailHeader: PropTypes.string.isRequired,
};
export default MailListHeader;