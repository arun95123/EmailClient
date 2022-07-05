import {
	render
} from '@testing-library/react';
import MailListHeaderSearch from '../../../../../src/components/MailList/MailListHeader/MailListHeaderSearch';

describe('MailListHeaderSearch', () => {
	test('Show MailList Header search bar', () => {
		const {getByText, getByPlaceholderText} = render(<MailListHeaderSearch />,);
		expect(getByPlaceholderText('Search email')).toBeTruthy();
		expect(getByText('Search')).toBeTruthy();
	});
});