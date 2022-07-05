import {
	render
} from '@testing-library/react';
import MailListHeader from '../../../src/components/MailList/MailListHeader';

describe('MailListHeader', () => {
	test('Show MailList Header section', () => {
		const {getByText} = render(<MailListHeader mailCount={16} mailHeader='Inbox' />,);
		expect(getByText('Inbox(16)')).toBeTruthy();
		expect(getByText('Search')).toBeTruthy();
	});
});