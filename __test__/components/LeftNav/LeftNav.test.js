import {
	render, fireEvent
} from '@testing-library/react';
import LeftNav from '../../../src/components/LeftNav';

describe('LeftNav', () => {
	test('Show LeftNav Collapsed Items', () => {
		const {getAllByAltText} = render(<LeftNav />);
		expect(getAllByAltText('profile')[0]).toBeTruthy();
		expect(getAllByAltText('mailbox')[0]).toBeTruthy();
		expect(getAllByAltText('widgets')[0]).toBeTruthy();
		expect(getAllByAltText('graphs')[0]).toBeTruthy();
		expect(getAllByAltText('dashboard')[0]).toBeTruthy();
		expect(getAllByAltText('layouts')[0]).toBeTruthy();
		expect(getAllByAltText('forms')[0]).toBeTruthy();
	});

	test('Show LeftNav Expanded Items', () => {
		const {getAllByAltText, getByText, getByAltText} = render(<LeftNav />);
		expect(getByAltText('profile')).toBeTruthy();
		expect(getByText('Emma Watson')).toBeTruthy();
		expect(getByText('Vice Director')).toBeTruthy();
		expect(getAllByAltText('mailbox')[1]).toBeTruthy();
		expect(getByText('Mailbox')).toBeTruthy();
		expect(getAllByAltText('widgets')[1]).toBeTruthy();
		expect(getByText('Widgets')).toBeTruthy();
		expect(getAllByAltText('graphs')[1]).toBeTruthy();
		expect(getByText('Graphs')).toBeTruthy();
		expect(getAllByAltText('dashboard')[1]).toBeTruthy();
		expect(getByText('Dashboard')).toBeTruthy();
		expect(getAllByAltText('layouts')[1]).toBeTruthy();
		expect(getByText('Layouts')).toBeTruthy();
		expect(getAllByAltText('forms')[1]).toBeTruthy();
		expect(getByText('Forms')).toBeTruthy();
	});

	test('adding expand and collapse class name',() => {
		const {container} = render(<LeftNav />);
		expect(container.getElementsByClassName('left-nav-expanded').length).toBe(0);
		fireEvent(document, new CustomEvent('left-nav-expand'));
		expect(container.getElementsByClassName('left-nav-expanded').length).toBe(1);
		fireEvent(document, new CustomEvent('left-nav-collapse'));
		expect(container.getElementsByClassName('left-nav-expanded').length).toBe(0);
	});
});