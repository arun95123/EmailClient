import {
	render,
} from '@testing-library/react';
import TopNav from '../../../src/components/TopNav';
import {EmailDataContext} from '../../../src/contexts';

describe('TopNav', () => {
	test('TopNav shows up', () => {
		const {getByPlaceholderText, getByAltText, getByText} = render(
			<EmailDataContext.Provider value={{emailData: {unreadMailCount: 16, mailCount:2}}}>
				<TopNav />
			</EmailDataContext.Provider>
		);
		expect(getByPlaceholderText('Search for something...')).toBeTruthy();
		expect(getByAltText('menu')).toBeTruthy();
		expect(getByAltText('email')).toBeTruthy();
		expect(getByAltText('notification')).toBeTruthy();
		expect(getByAltText('logout')).toBeTruthy();
		expect(getByText('16')).toBeTruthy();
		expect(getByText('2')).toBeTruthy();
		expect(getByText('Log out')).toBeTruthy();
	});
});