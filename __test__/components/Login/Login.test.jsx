import {
	fireEvent,
	render, screen
} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../../src/components/Login';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Login', () => {

	beforeEach(() => {
		Object.defineProperty(window, 'sessionStorage', {
			value: {
				getItem: () => {
					return JSON.stringify({
						'Naruto': {
							password: 'Hinata'
						}
					});
				}
			}
		});
		jest.restoreAllMocks();
	});
	test('renders component', () => {
		const {getByText, getByPlaceholderText} = render(
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		);
		expect(getByText('Login To Email')).toBeTruthy();
		expect(getByPlaceholderText('Username')).toBeTruthy();
		expect(getByPlaceholderText('Password')).toBeTruthy();
		expect(getByText('LOGIN')).toBeTruthy();
	});

	test('redirects to /email on successful login', () => {
		const {getByText, getByPlaceholderText} = render(
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		);
		expect(getByText('Login To Email')).toBeTruthy();
		fireEvent.change(getByPlaceholderText('Username'), {target: {id: 'username', value: 'Naruto'}});
		fireEvent.change(getByPlaceholderText('Password'), {target: {id: 'password', value: 'Hinata'}});
		fireEvent.click(getByText('LOGIN'));
		expect(mockedUsedNavigate).toHaveBeenCalledWith(
			'/email', {state: { email: 'Naruto'}}
		);
		expect(getByText('LOGIN')).toBeTruthy();
	});

	test('shows error message on failed login', () => {
		const {getByText, getByPlaceholderText} = render(
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		);
		expect(getByText('Login To Email')).toBeTruthy();
		fireEvent.change(getByPlaceholderText('Username'), {target: {id: 'username', value: 'Naruto'}});
		fireEvent.change(getByPlaceholderText('Password'), {target: {id: 'password', value: 'Uzumaki'}});
		fireEvent.click(getByText('LOGIN'));
		expect(getByText('Please enter correct username and password')).toBeTruthy();
	});
});