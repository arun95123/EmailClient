import {
	render
} from '@testing-library/react';
import MailListHeader from '../../../src/components/MailList/MailListHeader';

describe('MailListHeader', () => {
	test('Show MailList Header section', () => {
		const {getByText, getByAltText} = render(<MailListHeader mailCount={16} mailHeader='Inbox' />,);
		expect(getByText('Inbox(16)')).toBeTruthy();
		expect(getByText('Search')).toBeTruthy();
		expect(getByAltText('refresh')).toBeTruthy();
		expect(getByAltText('read')).toBeTruthy();
		expect(getByAltText('priority')).toBeTruthy();
		expect(getByAltText('delete')).toBeTruthy();
		expect(getByAltText('forward')).toBeTruthy();
		expect(getByAltText('back')).toBeTruthy();
	});
});