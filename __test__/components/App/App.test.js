import {
	render, fireEvent
} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../../src/components/App';



jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({ state: {email: 'ezio@creed'}}),
}));

const localStorageMock = (() => {
	let store = {};
  
	return {
		getItem(key) {
			return store[key] || null;
		},
		setItem(key, value) {
			store[key] = value.toString();
		},
		removeItem(key) {
			delete store[key];
		},
		clear() {
			store = {};
		}
	};
})();
  
Object.defineProperty(window, 'sessionStorage', {
	value: localStorageMock
});

describe('App', () => {

	beforeEach(() => {
		window.sessionStorage.clear();
		jest.restoreAllMocks();
	});
	test('Send email adds mail to corresponding use', () => {
		window.sessionStorage.setItem('emailData', JSON.stringify({
			'ezio@creed': {
				name: 'Ezio Auditore',
				mailId: 1,
				sentMailId: 0,
				sentMailCount: 0,
				mailCount: 1,
				unreadMailCount: 0,
				draftCount: 2,
				mails: {
					'id1': {
						from: 'rupirt@hogwarts.com',
						name: 'Rupirt Grint',
						to: 'daniel@hogwarts.com',
						subject: 'Where are you',
						time: 'Aug 1',
					}
				},
				sentMails: {}
			},
			'edward@creed': {
				name: 'Edward Kenway',
				mailId: 1,
				sentMailId: 0,
				sentMailCount: 0,
				mailCount: 1,
				unreadMailCount: 0,
				draftCount: 2,
				mails: {
					'id1': {
						from: 'rupirt@hogwarts.com',
						name: 'Rupirt Grint',
						to: 'daniel@hogwarts.com',
						subject: 'Where are you',
						time: 'Aug 1',
					}
				},
				sentMails: {}
			},
			'emma@hogwarts.com': {},
			'daniel@hogwarts.com': {},
			'rupirt@hogwarts.com': {},
		}));
		const {getAllByRole, getByText} = render(
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</BrowserRouter>
		);

		fireEvent.click((getByText('Compose Mail')));
		console.log(getAllByRole('textbox')[2]);
		fireEvent.change(getAllByRole('textbox')[2],{target: {id: 'to', value: 'edward@creed'}});
		fireEvent.change(getAllByRole('textbox')[3],{target: {id: 'cc', value: 'some@cc'}});
		fireEvent.change(getAllByRole('textbox')[4],{target: {id: 'subject', value: 'Check mail'}});
		fireEvent.change(getAllByRole('textbox')[5],{target: {id: 'body', value: 'Hope it is recieved'}});
		fireEvent.click((getByText('Send')));
		expect(sessionStorage.getItem('emailData')).toBe(JSON.stringify({
			'ezio@creed': {
				name: 'Ezio Auditore',
				mailId: 1,
				sentMailId: 1,
				sentMailCount: 1,
				mailCount: 1,
				unreadMailCount: 0,
				draftCount: 2,
				mails: {
					'id1': {
						from: 'rupirt@hogwarts.com',
						name: 'Rupirt Grint',
						to: 'daniel@hogwarts.com',
						subject: 'Where are you',
						time: 'Aug 1',
					}
				},
				sentMails: {
					'id1': {
						from: 'ezio@creed',
						name: 'Ezio Auditore',
						to: 'edward@creed',
						cc: 'some@cc',
						subject: 'Check mail',
						body: 'Hope it is recieved',
						time: '',
						unread: true,
					}
				}
			},
			'edward@creed': {
				name: 'Edward Kenway',
				mailId: 2,
				sentMailId: 0,
				sentMailCount: 0,
				mailCount: 2,
				unreadMailCount: 1,
				draftCount: 2,
				mails: {
					'id2': {
						from: 'ezio@creed',
						name: 'Ezio Auditore',
						to: 'edward@creed',
						cc: 'some@cc',
						subject: 'Check mail',
						body: 'Hope it is recieved',
						time: '',
						unread: true,
					},
					'id1': {
						from: 'rupirt@hogwarts.com',
						name: 'Rupirt Grint',
						to: 'daniel@hogwarts.com',
						subject: 'Where are you',
						time: 'Aug 1',
					}
				},
				sentMails: {}
			},
			'emma@hogwarts.com': {image:'test-file-stub'},
			'daniel@hogwarts.com': {image:'test-file-stub'},
			'rupirt@hogwarts.com': {image:'test-file-stub'},
		}));

	});
});