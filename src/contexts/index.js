import React from 'react';

export const EmailDataContext = React.createContext({
	emailData: {
		mailCount: 0,
		mailId: 0,
		sentMailId: 0,
		sentMailCount: 0,
		unreadMailCount: 0,
		draftCount: 0,
		mails: {},
		sentMails: {}
	},
	setEmailData: () => {},
});
