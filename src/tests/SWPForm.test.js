import renderer from 'react-test-renderer';
import { SWPForm } from "../components";

it('should check for SWPForm props and classes', ()=>{
  const component = renderer.create(
    <SWPForm />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props).toEqual({"className": "md:m-16 m-4"});
})