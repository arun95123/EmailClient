import {
	render
} from '@testing-library/react';
import LeftNavItem from '../../../../src/components/LeftNav/LeftNavItem';

describe('LeftNavItem', () => {
	test('render component', () => {
		const {getByAltText, getByText, container} = render(<LeftNavItem icon={'something'} iconAlt={'anything'} selected highlight heading='Some'/>,);
		expect(getByAltText('anything')).toBeTruthy();
		expect(container.getElementsByClassName('selected').length).toBe(1);
		expect(container.getElementsByClassName('highlight').length).toBe(1);
		expect(getByText('Some')).toBeTruthy();

	});

	test('does not select or highlight the item', () => {
		const {getByAltText, container} = render(<LeftNavItem icon={'something'} iconAlt={'anything'} />,);
		expect(container.getElementsByClassName('selected').length).toBe(0);
		expect(container.getElementsByClassName('highlight').length).toBe(0);

	});
});