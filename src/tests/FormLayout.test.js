import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { FormLayout } from '../components';

it('show form layout render', () => {
  const component = renderer.create(<FormLayout />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props).toEqual({ className: 'md:text-base text-sm' });
  expect(tree.children.length).toEqual(3);
  expect(tree.children[0].props).toEqual({ className: 'md:mx-16 mx-4 flex' });
  expect(tree.children[1].props).toEqual({ className: 'md:m-16 m-4' });
});
