import React from 'react';
import PropTypes from 'prop-types';
import './mail-list-header.scss';
import MailListHeaderSearch from './MailListHeaderSearch';

const MailListHeader = ({mailCount, mailHeader}) => (
	<div className="mail-list-header">
		<h2>{mailHeader}({mailCount})</h2>
		<MailListHeaderSearch />
	</div>
);

MailListHeader.propTypes = {
	mailCount: PropTypes.string.isRequired,
	mailHeader: PropTypes.string.isRequired,
};
export default MailListHeader;