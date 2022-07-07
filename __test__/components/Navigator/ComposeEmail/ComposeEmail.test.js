import {
	fireEvent,
	render, screen
} from '@testing-library/react';
import { EmailDataContext } from '../../../../src/contexts';
import ComposeEmail from '../../../../src/components/Navigator/ComponseEmail';

describe('Label', () => {
	test('renders component', () => {
		const {getByText} = render(
			<EmailDataContext.Provider value={{}}>
				<ComposeEmail />
			</EmailDataContext.Provider>
		);
		expect(getByText('Compose Mail')).toBeTruthy();
	});

	test('shows and closes modal', () => {
		const {getByText, queryByText} = render(
			<EmailDataContext.Provider value={{}}>
				<ComposeEmail />
			</EmailDataContext.Provider>
		);
		fireEvent.click((getByText('Compose Mail')));
		expect(getByText('To')).toBeTruthy();
		fireEvent.click((getByText('X')));
		expect(queryByText('To')).not.toBeInTheDocument();
	});

	test('send email', () => {
		let emailData = {
			sentMailId: 1,
			sentMailCount: 1,
			sentMails: {
				1: {
					from: 'him',
					time: 'today',
					subject: 'something',
					unread: true
				}
			}
		};
		const setEmailDataMock = jest.fn();
		const {getByText, queryByText, getAllByRole} = render(
			<EmailDataContext.Provider value={{emailData, setEmailData: setEmailDataMock, email: 'from@mail'}}>
				<ComposeEmail />
			</EmailDataContext.Provider>
		);
		fireEvent.click((getByText('Compose Mail')));
		fireEvent.change(getAllByRole('textbox')[0],{target: {id: 'to', value: 'me'}});
		fireEvent.change(getAllByRole('textbox')[1],{target: {id: 'cc', value: 'mom'}});
		fireEvent.change(getAllByRole('textbox')[2],{target: {id: 'subject', value: 'Evaluation'}});
		fireEvent.change(getAllByRole('textbox')[3],{target: {id: 'body', value: 'Hope i clear'}});
		fireEvent.click((getByText('Send')));
		expect(setEmailDataMock).toBeCalledWith({
			sentMailId: 2,
			sentMailCount: 2,
			sentMails: {
				2: {
					from: 'from@mail',
					to: 'me',
					cc: 'mom',
					subject: 'Evaluation',
					body: 'Hope i clear',
					time: '',
					unread: true
				},
				1: {
					from: 'him',
					time: 'today',
					subject: 'something',
					unread: true
				}
			}
		});
	});
});