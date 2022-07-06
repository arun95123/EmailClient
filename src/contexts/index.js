import React from 'react';

export const EmailDataContext = React.createContext({
	emailData: {
		mailCount: 0,
		unreadMailCount: 0,
		draftCount: 0,
		mails: [],
	},
	setEmailData: () => {},
});
