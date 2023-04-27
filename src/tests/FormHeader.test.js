import renderer from 'react-test-renderer';
import { FormHeader } from "../components";

it('should check for FormHeader props and classes', ()=>{
  const component = renderer.create(
    <FormHeader />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props).toEqual({ className: 'md:mx-16 mx-4 flex' })
  expect(tree.children.length).toEqual(2)
  expect(tree.children[0].props).toEqual({ className: 'w-1/2 rounded md:h-16 h-8 flex items-center justify-center bg-gray-400 text-white mr-1' })
  expect(tree.children[1].props).toEqual({ className: 'w-1/2 rounded md:h-16 h-8 flex items-center justify-center shadow-xl bg-gray-200 ml-1' })
})