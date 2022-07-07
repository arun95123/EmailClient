import {
	render, screen
} from '@testing-library/react';
import NavigatorItem from '../../../../src/components/Navigator/NavigatorItem';

describe('NavigatorItem', () => {
	test('renders component', () => {
		const {getByText} = render(<NavigatorItem header='Potter' image='dummy-source' imageAlt='dummy' count={25} showDivider />,);
		expect(getByText('Potter')).toBeTruthy();
		expect(getByText('25')).toBeTruthy();
		const image = screen.getByRole('img');
		const hr = screen.getByRole('separator');
		expect(image).toHaveAttribute('src', 'dummy-source');
		expect(image).toHaveAttribute('alt', 'dummy');
		expect(hr).toBeTruthy();
	});

	test('does not show divider and count', () => {
		const {getByText, container} = render(<NavigatorItem header='Potter' image='dummy-source' imageAlt='dummy' />,);
		const hr = screen.queryByRole('separator');
		expect(hr).not.toBeInTheDocument();
		expect(container.getElementsByClassName('navigator-item__content__count').length).toBe(0);
	});

	test('does not show count when value is 0', () => {
		const {getByText, container} = render(<NavigatorItem header='Potter' image='dummy-source' imageAlt='dummy' count={0}/>,);
		expect(container.getElementsByClassName('navigator-item__content__count').length).toBe(0);
	});
});