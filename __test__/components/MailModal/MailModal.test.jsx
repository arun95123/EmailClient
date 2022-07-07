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

	test('sends mail and closes modal', () => {
		const closeModalMock = jest.fn();
		const sendMailMock = jest.fn();
		const {getAllByRole, getByRole} = render(<MailModal isOpen={true} closeModal={closeModalMock} sendClick={sendMailMock}/>);
		fireEvent.change(getAllByRole('textbox')[0],{target: {id: 'to', value: 'me'}});
		fireEvent.change(getAllByRole('textbox')[1],{target: {id: 'cc', value: 'mom'}});
		fireEvent.change(getAllByRole('textbox')[2],{target: {id: 'subject', value: 'Evaluation'}});
		fireEvent.change(getAllByRole('textbox')[3],{target: {id: 'body', value: 'Hope i clear'}});
		fireEvent.click(getByRole('button'));
		expect(sendMailMock).toHaveBeenCalledWith({
			'to': 'me',
			'cc': 'mom',
			'subject': 'Evaluation',
			'body': 'Hope i clear',
			'time': '',
		});
		expect(closeModalMock).toHaveBeenCalled();
	});

	test('shows mail', () => {
		const closeModalMock = jest.fn();
		const {getByDisplayValue, queryByText} = render(<MailModal isOpen={true} closeModal={closeModalMock} 
			emailContent={{
				from: 'her',
				cc: 'friend',
				subject: 'proposal',
				body: 'result is rejected'
			}}
		/>);
		expect(getByDisplayValue('her')).toBeTruthy();
		expect(getByDisplayValue('friend')).toBeTruthy();
		expect(getByDisplayValue('proposal')).toBeTruthy();
		expect(getByDisplayValue('result is rejected')).toBeTruthy();
		expect(queryByText('Send')).not.toBeInTheDocument();

	});

});