import {
	fireEvent,
	render, screen
} from '@testing-library/react';
import MailModal from '../../../src/components/MailModal';

describe('MailModal', () => {
	test('renders component', () => {
		const closeModalMock = jest.fn();
		const {getByText, getByPlaceholderText} = render(<MailModal isOpen={true} closeModal={closeModalMock}/>);
		expect(getByText('To')).toBeTruthy();
		expect(getByText('Cc')).toBeTruthy();
		expect(getByPlaceholderText('Add a subject')).toBeTruthy();
		expect(getByPlaceholderText('Type body here')).toBeTruthy();
		expect(getByText('Send')).toBeTruthy();
	});

	test('closes modal', () => {
		const closeModalMock = jest.fn();
		const {getByText} = render(<MailModal isOpen={true} closeModal={closeModalMock}/>);
		fireEvent.click(getByText('X'));
		expect(closeModalMock).toHaveBeenCalled();
	});

});