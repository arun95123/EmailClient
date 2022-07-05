import {
	render, screen
} from '@testing-library/react';
import Navigator from '../../../src/components/Navigator';

describe('Navigator', () => {
	test('Show folders section', () => {
		const {getByText} = render(<Navigator />,);
		const image = screen.getAllByRole('img');
		const hr = screen.getAllByRole('separator');
		expect(getByText('FOLDERS')).toBeTruthy();
		expect(getByText('Inbox')).toBeTruthy();
		expect(getByText('25')).toBeTruthy();
		expect(image[0]).toHaveAttribute('alt', 'inbox');
		expect(getByText('Sent Mail')).toBeTruthy();
		expect(image[1]).toHaveAttribute('alt', 'mail');
		expect(getByText('Important')).toBeTruthy();
		expect(image[2]).toHaveAttribute('alt', 'astrick');
		expect(getByText('Draft')).toBeTruthy();
		expect(getByText('2')).toBeTruthy();
		expect(image[3]).toHaveAttribute('alt', 'draft');
		expect(getByText('Trash')).toBeTruthy();
		expect(image[4]).toHaveAttribute('alt', 'trash');
		expect(hr.length).toBe(5);
	});

	test('Show Categories section', () => {
		const {getByText, getAllByText} = render(<Navigator />,);
		const image = screen.getAllByRole('img');
		expect(getByText('CATEGORIES')).toBeTruthy();
		expect(getAllByText('Work')[0]).toBeTruthy();
		expect(image[5]).toHaveAttribute('alt', 'decorative');
		expect(getByText('Documents')).toBeTruthy();
		expect(image[6]).toHaveAttribute('alt', 'decorative');
		expect(getByText('Social')).toBeTruthy();
		expect(image[7]).toHaveAttribute('alt', 'decorative');
		expect(getByText('Advertising')).toBeTruthy();
		expect(image[8]).toHaveAttribute('alt', 'decorative');
		expect(getByText('Clients')).toBeTruthy();
		expect(image[9]).toHaveAttribute('alt', 'decorative');
	});

	test('Show Label section', () => {
		const {getByText, getAllByText} = render(<Navigator />,);
		expect(getByText('LABELS')).toBeTruthy();
		expect(getAllByText('Work')[1]).toBeTruthy();
		expect(getByText('Family')).toBeTruthy();
		expect(getByText('Home')).toBeTruthy();
		expect(getByText('Children')).toBeTruthy();
		expect(getByText('Holidays')).toBeTruthy();
		expect(getByText('Music')).toBeTruthy();
		expect(getByText('Photography')).toBeTruthy();
		expect(getByText('Film')).toBeTruthy();
	});
});