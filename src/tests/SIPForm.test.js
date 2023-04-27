import renderer from 'react-test-renderer';
import { SIPForm } from '../components';

it('should check for SIPForm props and classes', () => {
  const component = renderer.create(<SIPForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props).toEqual({ className: 'md:m-16 m-4' });
  expect(tree.children.length).toEqual(1);
});
