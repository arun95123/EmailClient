import {
	render
} from '@testing-library/react';
import MailList from '../../../src/components/MailList';

describe('MailList', () => {
	test('Show MailList Header section', () => {
		const {getByText} = render(<MailList />,);
		expect(getByText('Inbox(16)')).toBeTruthy();
	});
});